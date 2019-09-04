const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswersSchema = new Schema({
    input: String,
    players: {
        type: Schema.Types.palyerid
    }
});

const AnswersSchema = mongoose.model('Answers', AnswersSchema);

module.exports = AnswersSchema;

