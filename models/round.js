const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoundSchema = new Schema({
    questions: Array,
    answers: Array,
});

const RoundSchema = mongoose.model('Round', RoundSchema);

module.exports = RoundSchema;