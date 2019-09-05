const express = require ('express');
const router = express.Router();

// DB
const db = require('../models');

// Controller
const playerController = require('../controllers').player;

// Create Player
router.post('/', playerController.create);

// Update Player
router.put('/:player_id', playerController.update);

// Show Player
router.get('/:player_id', playerController.show);

// Destroy Player
router.delete('/:player_id', playerController.delete);

module.exports = router;