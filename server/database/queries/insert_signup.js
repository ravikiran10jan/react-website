const connection = require('./../db_connection');

const signupInsert = (first_name, last_name, email, mobile, country_code, city, position, gender, password, cb) => {
  const sql = {
    text: 'INSERT INTO users(first_name, last_name, email,mobile,country_code,city,position,gender,password) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) ',
    values: [first_name, last_name, email, mobile, country_code, city, position, gender, password],
  };
  connection.query(sql, (err, res) => {
    if (err) cb(err);
    else {
      cb(null, res.rows);
    }
  });
};


module.exports = signupInsert;
