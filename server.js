const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4001;
const routes = require('./routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const corsOptions = {
    origin: ['https://jacket-pocket.herokuapp.com'],
    credentials: false,
    optionsSuccessStatus: 200
  }

app.use(cors(corsOptions));


app.use('/api/v1/player/', routes.player)
app.use('/api/v1/game/', routes.game)
app.use('/api/v1/round/', routes.round)

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))
