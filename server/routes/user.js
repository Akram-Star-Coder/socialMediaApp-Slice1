const express = require('express');
const verifyToken = require('../middlewares/auth');
const router = express.Router();
const getUser = require('../controllers/getUser');


router.get('/getUser', verifyToken, getUser);








module.exports = router;