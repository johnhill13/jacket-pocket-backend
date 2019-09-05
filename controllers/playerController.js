const db = require('../models');

function getTime() {
  return new Date().toLocaleString();
};

module.exports = {
    create: (req ,res) => {
        const newPlayer = req.body;
        db.player.create(newPlayer, (err, createdPlayer) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'});

                res.status(201).json({
                status: 201,
                data: createdPlayer,
                requestedAt: getTime(),
                });
        });
    },
    show: (req ,res) => {
        const newPlayer = req.body;
        db.player.create(newPlayer, (err, showPlayer) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'});

                res.status(201).json({
                status: 201,
                data: showPlayer,
                requestedAt: getTime(),
                });
        });
    },
    update: (req ,res) => {
        const updatePlayer = req.body;
        db.player.findByIdAndUpdate(req.params.player_id, (err, updatedPlayer) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'});

                res.status(201).json({
                status: 201,
                data: updatedPlayer,
                requestedAt: getTime(),
                });
        });
    },
    delete: (req ,res) => {
        const deletePlayer = req.body;
        db.player.findByIdAndDelete(req.params.player_id, (err, deletedPlayer) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'});

                res.status(201).json({
                status: 201,
                data: deletedPlayer,
                requestedAt: getTime(),
                });
        });
    }
};

