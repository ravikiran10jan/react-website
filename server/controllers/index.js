const express = require('express');
const router = express.Router();

const signup = require('./signup.js');
const login = require('./login.js');
const home = require('./home.js');
// const { postProfile, getProfile, getUserData } = require('./profile');
const {getProfile , postProfile} = require('./profile.js')


router.post('/api/signup', signup.post);
router.post('/api/login', login.post);
router.post('/api/home',home.post);
router.get('/api/profile', getProfile);
router.put('/api/profile',postProfile)

// router.use('/api',(req,res)=>{
//   res.send("Reach")
// })



module.exports = router;