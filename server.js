const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 4000;

const routes = require('./routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api/v1/player/', routes.player)
app.use('/api/v1/game/', routes.game)
app.use('/api/v1/round/', routes.round)

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))
