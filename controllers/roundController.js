const db = require('../models');

function getTime() {
  return new Date().toLocaleString();
};

module.exports = {
    index: (req ,res) => {
        const allRounds = req.body;
        db.Round.find({}, (err, allRounds) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'});

                res.status(201).json({
                status: 201,
                numberOfResults: allRounds.length,
                data: allRounds,
                message: 'found all',
                requestedAt: getTime(),
                });
        });
    },
    create: (req ,res) => {
        const newRound = req.body;
        db.Round.create(newRound, (err, createdRound) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'});

                res.status(201).json({
                status: 201,
                data: createdRound,
                message: 'creating it',
                requestedAt: getTime(),
                });
        });
    },
    show: (req ,res) => {
        const showRound = req.body;
        db.Round.create(showRound, (err, showRound) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'});

                res.status(201).json({
                status: 201,
                data: showRound,
                message: 'showing it',
                requestedAt: getTime(),
                });
        });
    },
    update: (req ,res) => {
        // console.log('hello there udpating')
        const updateRound = req.body;
        db.Round.findByIdAndUpdate(req.params.round_id, updateRound, {new:true}, (err, updatedRound) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'});

                res.status(201).json({
                status: 201,
                data: updatedRound,
                message: 'updating it',
                requestedAt: getTime(),
                });
        });
    },
    delete: (req ,res) => {
        const deleteRound = req.body;
        db.Round.findByIdAndDelete(req.params.round_id, (err, deletedRound) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'});

                res.status(201).json({
                status: 201,
                data: deletedRound,
                message: 'deleting it',
                requestedAt: getTime(),
                });
        });
    }
};

