const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4001;
const routes = require('./routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const corsOptions = {
    // origin: ['http://localhost:3000'],
    origin: ["https://jacket-pocket.herokuapp.com"],
    methods: ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS"],
    headers: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    credentials: false,
    optionsSuccessStatus: 200
  }

app.use(cors(corsOptions));
app.options("https://jacket-pocket.herokuapp.com", cors());


app.use('/api/v1/player/', routes.player)
app.use('/api/v1/game/', routes.game)
app.use('/api/v1/round/', routes.round)

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))
