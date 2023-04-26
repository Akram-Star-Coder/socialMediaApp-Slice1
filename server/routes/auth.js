const express = require('express');
const register = require('../controllers/register');
const login = require('../controllers/login');
const verifyToken = require('../middlewares/auth');
const router = express.Router();
 

router.post('/register', register);
router.post('/login', login);
router.get('/home', verifyToken  ,async (req, res)=>{
    try{
        res.status(200).json(req.user);
    }
    catch(E){
        res.status(500).send(E.message);
    }
});


module.exports = router;





