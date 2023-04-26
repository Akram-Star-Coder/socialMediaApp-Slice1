const express = require('express');
const verifyToken = require('../middlewares/auth');
const router = express.Router();
const createPost = require('../controllers/createPost');
const getAllPosts = require('../controllers/getAllPosts');


router.post('/create', verifyToken , createPost);
router.get('/getAll', verifyToken, getAllPosts);








module.exports = router;