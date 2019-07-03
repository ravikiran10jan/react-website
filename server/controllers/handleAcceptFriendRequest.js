const { acceptFriendRequest } = require('../database/queries/select_search');

exports.post = (req, res) => {
  const { connectionsId } = req.body;
  acceptFriendRequest(connectionsId, (err, results) => {
    if (err) {
      res.send({ msg: 'Accept Freind Request Failed', code: err.code, status: false });
    } else {
      res.send({ msg: 'Freind Request accepted Successfully', status: true, deleteId: connectionsId });
    }
  });
};
