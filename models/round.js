const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoundSchema = new Schema({
    questions: Array,
    answers: Array,
    playerAnswers: {
        input: String,
        players: {
            type: Schema.Types.ObjectId,
            refs: 'Player'
        }
    }
});


const RoundSchema = mongoose.model('Round', RoundSchema);

module.exports = Round;