

const { insertFriendRequest } = require('./../database/queries/select_search');


const postFrined = (req, res) => {
  const { sender_id, recive_id } = req.body;

  insertFriendRequest({ sender_id, recive_id }, (err, result) => {
    if (err) {
      res.send({ err: 'Something went wrong, try again later' });
    } else {
      res.send({ result: 'result' });
    }
  });
};
module.exports = { postFrined };
