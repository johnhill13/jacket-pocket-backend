const db = require('../models');

function getTime() {
  return new Date().toLocaleString();
};

module.exports = {
  create: (req ,res) => {
    const player = req.body.player
  
    db.Game.create(req.body, (err, createdGame) => {
      if (err) return res.status(400).json({
        status: 400,
        message: 'Something went wrong, please try again'});

        createdGame.players.push(player)

        const round = {question: "this is a question", answers: ["answer 1", "answer 2"]}
        db.Round.create(round, (err, createdRound) => {
          if (err) return res.status(400).json({
            status: 400,
            message: 'Something went wrong, please try again'});    
            
            // this is possibly where changes dalton
              // loops multiple times to create round with games
              // db.round.create(round)
            createdGame.rounds.push(createdRound)
            createdGame.save()
    
          res.status(201).json({
            status: 201,
            data: createdGame,
            message: 'creating game',
            requestedAt: getTime(),
          });
        })
    });
  
  },
  show: (req ,res) => {
    const showGame = req.body;
    db.Game.findById(req.params.player_id, (err, showGame) => {
        if (err) return res.status(400).json({
            status: 400,
            message: 'Something went wrong, please try again'});

            res.status(201).json({
            status: 201,
            data: showGame,
            message: 'showing game',
            requestedAt: getTime(),
            });
    });
},

//   delete: (req, res) => {
//     db.Game.findByIdAndDelete(req.params.game_id, (err, deletedGame) => {
//       if (err) return res.status(400).json({
//         status: 400,
//         message: 'Something went wrong, please try again',
//       });
  
//       console.log(deletedGame);
//       res.status(200).json({
//         status: 200,
//         message: 'Success',
//       });
//     });
//   },
};