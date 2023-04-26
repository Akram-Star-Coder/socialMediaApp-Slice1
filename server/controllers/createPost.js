const posts = require('../models/posts');


const createPost = async (req, res) => {
    try{
        const data = req.body;
        const isCreated = await new posts(data).save();
        if(isCreated){
            res.status(200).send('Successfull');
        }
        else{
            res.status(400).send('Error Occuried');
        }
    }
    catch(e){
        res.status(500).send(e.message);
    }
}


module.exports = createPost;