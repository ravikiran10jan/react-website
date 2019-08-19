
const selectSearch = require('./../database/queries/select_search');

exports.post = (req, res) => {
  const { search } = req.body;

  selectSearch(search, (error, result) => {
    if (error) {
      res.send({ error });
    } else {
      res.send({ result });
    }
  });
};
