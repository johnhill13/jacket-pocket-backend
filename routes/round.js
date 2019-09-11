const express = require ('express');
const router = express.Router();

// DB
const db = require('../models');

// Controller
const roundController = require('../controllers').round;

// Create Round
router.post('/', roundController.create);

// Index Rounds
router.get('/', roundController.index);

// Update Round
router.put('/:round_id', roundController.update);

// Show Round
router.get('/:round_id', roundController.show);

// Destroy Round
router.delete('/:round_id', roundController.delete);

module.exports = router;