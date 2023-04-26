const posts = require('../models/posts');


const getAllPosts = async (req, res) => {
    try{
        
        const isCreated = await posts.find();
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


module.exports = getAllPosts;