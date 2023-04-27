const express = require('express');
const verifyToken = require('../middlewares/auth');
const router = express.Router();
const createPost = require('../controllers/createPost');
const getAllPosts = require('../controllers/getAllPosts');
const getAllPostByIdUser = require('../controllers/getAllPostByIdUser');

router.post('/create', verifyToken , createPost);
router.get('/getAll', verifyToken, getAllPosts);
router.get('/getAllPostByIdUser/:idUser', verifyToken, getAllPostByIdUser);







module.exports = router;