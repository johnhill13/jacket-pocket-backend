
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    time: Number,
    players: Array,
    round: {
        type: Schema.Types.ObjectId,
        ref: 'round'
    }
})

const GameSchema = mongoose.model('Game', GameSchema);

module.exports = GameSchema;

