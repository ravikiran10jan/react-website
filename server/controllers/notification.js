const { notificationFriendRequest } = require('../database/queries/select_search.js');

exports.post = (req, res) => {
  const { id } = req.query;

  notificationFriendRequest(id, (err, results) => {
    if (err) return res.send({ msg: 'error in database connections', status: false });
    return res.send(results);
  });
};
