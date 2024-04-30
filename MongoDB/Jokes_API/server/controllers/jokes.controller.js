const Joke = require('../models/jokes.model');

module.exports = {
    getAllJokes: (req, res) => {
        Joke.find()
            .then(jokes => res.json(jokes))
            .catch(err => res.status(400).json(err));
    },

    findRandomJoke: (req, res) => {
        Joke.aggregate([{ $sample: { size: 1 } }])
            .then(joke => {
                console.log("Random joke retrieved:", joke);
                res.json(joke[0] || {});
            })
            .catch(err => {
                console.error("Error retrieving random joke:", err);
                res.status(400).json(err);
            });
    },
    

    getJoke: (req, res) => {
        Joke.findById(req.params.id)
            .then(joke => res.json(joke))
            .catch(err => res.status(400).json(err));
    },

    createJoke: (req, res) => {
        Joke.create(req.body)
            .then(newJoke => res.json(newJoke))
            .catch(err => res.status(400).json(err));
    },

    updateJoke: (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(updatedJoke => res.json(updatedJoke))
            .catch(err => res.status(400).json(err));
    },

    deleteJoke: (req, res) => {
        Joke.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result }))
            .catch(err => res.status(400).json(err));
    }
};
