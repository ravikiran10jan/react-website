const { getSearchResult } = require('./../database/queries/select_search');

exports.post = (req, res) => {
  const { label } = req.body.search.value1;
  const { id } = req.body;

  getSearchResult(label, id, (err, result) => {
    if (err) {
      res.send({ err: 'Something went wrong, try again later' });
      return;
    }
    if (result.length === 0) {
      res.send({ err: 'There is no mentors for this search' });
      return;
    }
    res.send(result);
  });
};
