const express = require('express');

const router = express.Router();

const signup = require('./signup.js');
const login = require('./login.js');
const home = require('./home.js');
const notification = require('./notification');
const handleRejectFriendRequest = require('./handleRejectFriendRequest');
const handleAcceptFriendRequest = require('./handleAcceptFriendRequest');
const { postProfile, getProfile } = require('./profile.js');
const getSearchMentor = require('./search.js');
const detailes = require('./detailes.js');
const { postFrined } = require('./request.js');
const upload = require('./uploadImage');


router.post('/api/signup', signup.post);
router.post('/api/login', login.post);
router.post('/api/home', home.post);
router.get('/api/profile', getProfile);
router.put('/api/profile', postProfile);
router.post('/api/detailes', detailes.post);

router.post('/api/requests', postFrined);
router.post('/api/upload', upload.post);
router.post('/api/notification', notification.post);
router.post('/api/friendrequestcancel', handleRejectFriendRequest.post);
router.post('/api/friendrequestaccept', handleAcceptFriendRequest.post);
router.post('/api/search', getSearchMentor.post);


module.exports = router;
