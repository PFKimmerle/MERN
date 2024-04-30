const express = require('express');
const router = express.Router();
const JokesController = require('../controllers/jokes.controller');

router.get('/random', JokesController.findRandomJoke); // Random joke route
router.get('/', JokesController.getAllJokes); // All jokes route
router.get('/:id', JokesController.getJoke); // Single joke route
router.post('/', JokesController.createJoke); // Create joke route
router.put('/:id', JokesController.updateJoke); // Update joke route
router.delete('/:id', JokesController.deleteJoke); // Delete joke route

module.exports = router;
