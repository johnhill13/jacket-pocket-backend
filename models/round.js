const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoundSchema = new Schema({
    questions: Array,
    answers: Array,
    playerAnswers: {
        input: String,
        players: {
            type: Schema.Types.playerid
        }
    }
});


const RoundSchema = mongoose.model('Round', RoundSchema);

module.exports = Round;