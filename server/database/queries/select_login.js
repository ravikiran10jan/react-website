const connection = require('./../db_connection');

const passwordCheck = (data, cb) => {
  const passwordsql = {
    text: 'select id, password from users where email = $1',
    values: [data],
  };

  connection.query(passwordsql, (err, results) => {
    if (err) return cb(err);
    return cb(null, results.rows);
  });
};

module.exports = passwordCheck;
