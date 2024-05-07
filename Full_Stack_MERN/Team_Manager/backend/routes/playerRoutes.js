const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

router.get('/', playerController.listPlayers);  // List all players
router.post('/', playerController.addPlayer);  // Add a new player
router.delete('/:id', playerController.deletePlayer);  // Delete a player
router.get('/status/:game', playerController.getPlayerStatus);  // Get player status for a game
router.put('/:id/status', playerController.updatePlayerStatus);  // Update player status

module.exports = router;
