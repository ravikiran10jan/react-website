require('env2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passwordCheck = require('./../database/queries/select_login.js');

exports.post = (req, res, next) => {
  const { email, password } = req.body;


  passwordCheck(email, (err, results) => {
    if (err) return next(err);
    if (!results.length) return res.send({ msg: 'Sorry .. Username/Password invalid', status: false });
    bcrypt.compare(password, results[0].password, (errorComparing, result) => {
      if (errorComparing) return next(errorComparing);
      if (!result) { return res.send({ msg: 'Sorry .. Username/Password invalid', status: false }); }
      const payload = {
        id: results[0].id,
        email: results[0].email,
      };

      jwt.sign(payload, process.env.SECRET, (errToken, token) => {
        if (errToken) return next(errToken);
        return res.send({ msg: 'Login Success', status: true, token });
      });
    });
  });
};
