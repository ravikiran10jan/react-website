const connection = require('./../db_connection');

const selectSearch = (data, cb) => {

  let sql = {
  text: 'select id ,first_name, last_name from users where first_name =$1',
  values: [data]
};

connection.query(sql, (err, results) => {
if (err) return cb(err);
return cb(null,results.rows);
});
};

module.exports =selectSearch;