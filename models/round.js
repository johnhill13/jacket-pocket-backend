const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
    input: String,
    player: {
        type: Schema.Types.ObjectId,
        refs: 'Player'
    }
})

const Response = mongoose.model('Response', ResponseSchema);

const RoundSchema = new Schema({
    question: String,
    responses: [Response.schema],
    answers: []

});


const Round = mongoose.model('Round', RoundSchema);

module.exports = Round;