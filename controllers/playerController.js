const db = require('../models');

function getTime() {
  return new Date().toLocaleString();
};

module.exports = {
    index: (req ,res) => {
        const allPlayers = req.body;
        db.Player.find({}, (err, allPlayers) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'});

                res.status(201).json({
                status: 201,
                numberOfResults: allPlayers.length,
                data: allPlayers,
                message: 'found all',
                requestedAt: getTime(),
                });
        });
    },
    create: (req ,res) => {
        const newPlayer = req.body;
        console.log(req);
        db.Player.create(newPlayer, (err, createdPlayer) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'});

                res.status(201).json({
                status: 201,
                data: createdPlayer,
                message: 'creating it',
                requestedAt: getTime(),
                });
        });
    },
    show: (req ,res) => {
        const showPlayer = req.body;
        db.Player.findById(req.params.player_id, (err, showPlayer) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'});

                res.status(201).json({
                status: 201,
                data: showPlayer,
                message: 'showing it',
                requestedAt: getTime(),
                });
        });
    },
    update: (req ,res) => {
        const updatePlayer = req.body;
        db.Player.findByIdAndUpdate(req.params.player_id, updatePlayer, {new:true}, (err, updatedPlayer) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'});

                res.status(201).json({
                status: 201,
                data: updatedPlayer,
                message: 'updating it',
                requestedAt: getTime(),
                });
        });
    },
    delete: (req ,res) => {
        const deletePlayer = req.body;
        db.Player.findByIdAndDelete(req.params.player_id, (err, deletedPlayer) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'});

                res.status(201).json({
                status: 201,
                data: deletedPlayer,
                message: 'deleting it',
                requestedAt: getTime(),
                });
        });
    }
};

