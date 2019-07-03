const { rejectFriendRequest } = require('../database/queries/select_search');

exports.post = (req, res) => {
  const { connectionsId } = req.body;
  rejectFriendRequest(connectionsId, (err, results) => {
    if (err) return res.send({ msg: 'Cancel Freind Request Failed', code: err.code, status: false });
    return res.send({ msg: 'Freind Request Canceled Successfully', status: true });
  });
};
