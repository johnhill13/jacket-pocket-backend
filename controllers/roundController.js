const db = require('../models');

function getTime() {
  return new Date().toLocaleString();
};

module.exports = {
    create: (req ,res) => {
        const newRound = req.body;
        db.player.create(newRound, (err, createdRound) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'});

                res.status(201).json({
                status: 201,
                data: createdRound,
                requestedAt: getTime(),
                });
        });
    },
    show: (req ,res) => {
        const newRound = req.body;
        db.player.create(newRound, (err, showRound) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'});

                res.status(201).json({
                status: 201,
                data: showRound,
                requestedAt: getTime(),
                });
        });
    },
    update: (req ,res) => {
        const updateRound = req.body;
        db.player.findByIdAndUpdate(req.params.player_id, (err, updatedRound) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'});

                res.status(201).json({
                status: 201,
                data: updatedRound,
                requestedAt: getTime(),
                });
        });
    },
    delete: (req ,res) => {
        const deleteRound = req.body;
        db.player.findByIdAndDelete(req.params.player_id, (err, deletedRound) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'});

                res.status(201).json({
                status: 201,
                data: deletedRound,
                requestedAt: getTime(),
                });
        });
    }
};

