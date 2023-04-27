const posts = require('../models/posts');


const getAllPostByIdUser = async (req, res) => {
    try{
        const {idUser} = req.params;
        const isCreated = await posts.find({
            user : idUser
        }).sort({ createdAt: -1 });;
        if(isCreated){
            res.status(200).json(isCreated);
        }
        else{
            res.status(404).send('No post found..');
        }
    }
    catch(e){
        res.status(500).send(e.message);
    }
}


module.exports = getAllPostByIdUser;