
const { getProfileData } = require('./../database/queries/select_profile');


exports.post = (req, res) => {
  const { id } = req.body;
  getProfileData(id, (err, result) => {
    if (err) {
      res.send({ err: 'Something went wrong, try again later' });
      return;
    }
    if (result.length === 0) {
      res.send({ err: 'There is no recored for this id' });
      return;
    }
    res.send(result);
  });
};
