const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    name: String,
    score: Number,
});

const PlayerSchema = mongoose.model('Player', PlayerSchema);

module.exports = Player;