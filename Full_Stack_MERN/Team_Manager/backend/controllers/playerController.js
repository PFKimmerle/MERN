const Player = require('../models/playerModel');


exports.listPlayers = async (req, res) => {
    try {
        const players = await Player.find({});
        res.json(players);
    } catch (error) {
        res.status(500).send('Error retrieving players: ' + error.message);
    }
};

exports.addPlayer = async (req, res) => {
    try {
        const { name, preferredPosition } = req.body;
        const newPlayer = new Player({ name, preferredPosition });
        await newPlayer.save();
        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(500).send('Error adding player: ' + error.message);
    }
};

exports.deletePlayer = async (req, res) => {
    try {
        await Player.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send('Error deleting player');
    }
};

exports.getPlayerStatus = async (req, res) => {
    try {
        const { game } = req.params; // e.g., 'game1', 'game2'
        const players = await Player.find().select(`status.${game} name preferredPosition`);
        const statusMapped = players.map(player => ({
            name: player.name,
            preferredPosition: player.preferredPosition,
            status: player.status[game]
        }));
        res.json(statusMapped);
    } catch (error) {
        res.status(500).send('Error retrieving player statuses: ' + error.message);
    }
};


exports.updatePlayerStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, game } = req.body; // Status to set, and game identifier like 'game1'
        
        const updatedPlayer = await Player.findByIdAndUpdate(id, 
            { $set: { [`status.${game}`]: status } },
            { new: true } // Return the updated document
        );
        
        if (!updatedPlayer) {
            return res.status(404).send('Player not found');
        }
        
        res.json(updatedPlayer);
    } catch (error) {
        res.status(500).send('Error updating player status: ' + error.message);
    }
};
