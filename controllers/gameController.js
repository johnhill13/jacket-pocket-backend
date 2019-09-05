const db = require('../models');

function getTime() {
  return new Date().toLocaleString();
};

module.exports = {
  create: (req ,res) => {
    const newGame = req.body;
  
    db.game.create(newGame, (err, createdGame) => {
      if (err) return res.status(400).json({
        status: 400,
        message: 'Something went wrong, please try again'});
  
      res.status(201).json({
        status: 201,
        data: createdGame,
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