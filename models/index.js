const mongoose = require('mongoose');
const DB_URL = process.env.DB_URI ||'mongodb://localhost:27017/jacket-pocket-backend';

mongoose.connect(DB_URL, {useNewUrlParser: true, useFindAndModify: false })
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.log(err));

module.exports = {
    answers: require('./answers'), 
    game: require('./game'),
    player: require('./player'),
    round: require('./round'),

}
