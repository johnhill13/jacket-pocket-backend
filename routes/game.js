const express = require ('express');
const router = express.Router();

// DB
const db = require('../models');

// Controller
const gameController = require('../controllers').game;

// Create Game
router.post('/', gameController.create);

// router.get('/', gameController.show);

// Show Game
router.get('/:game_id', gameController.show);

// Destroy Game
// router.delete('/:game_id', gameController.delete);

module.exports = router;