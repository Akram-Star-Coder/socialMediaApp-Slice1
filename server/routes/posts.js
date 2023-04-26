const express = require('express');
const verifyToken = require('../middlewares/auth');
const router = express.Router();
const createPost = require('../controllers/createPost');



router.post('/create', verifyToken , createPost);









module.exports = router;