const express = require('express');
const router = express.Router();

const signup = require('./signup.js');
const login = require('./login.js');
const home = require('./home.js')


router.post('/api/signup', signup.post);
router.post('/api/login', login.post);
router.post('/api/home',home.post)



module.exports = router;