
const connection = require('./../db_connection');

const insertImage = (image, id, cb) => {
  const sql = {
    text: 'UPDATE users SET image=$1 where id = $2 returning image',
    values: [image, id],
  };
  connection.query(sql, (err, res) => {
    if (err) cb(err);
    else {
      cb(null, res.rows);
    }
  });
};


module.exports = insertImage;
