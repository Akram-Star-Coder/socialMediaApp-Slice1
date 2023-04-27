const express = require('express');
const verifyToken = require('../middlewares/auth');
const router = express.Router();
const getUser = require('../controllers/getUser');
const getUserById = require('../controllers/getUserById');

router.get('/getUser', verifyToken, getUser);
router.get('/getU/:id', verifyToken, getUserById);








module.exports = router;