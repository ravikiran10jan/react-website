const insertImage = require('./../database/queries/insert_image');

exports.post = (req, res) => {
  const { image } = req.body;
  const { id } = req.query;


  insertImage(image, id, (err, result) => {
    if (err) {
      console.log('err', err);

      res.send({ err: 'Something went wrong, try again later' });
      return;
    }
    console.log('result', result);

    res.send({ result, mse: 'the profile image update successful' });
  });
};
