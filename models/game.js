
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    players: [],
    round: {
        type: Schema.Types.ObjectId,
        ref: 'Round'
    }
})

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;

