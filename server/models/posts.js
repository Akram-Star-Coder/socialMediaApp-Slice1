const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;


const postsSchema = new mongoose.Schema(
    {
        type : {
            type : String, 
            enum : ["profilePicture", "coverPicture", "post"], 
            default : "post"
        }, 
        text  : String, 
        image : String, 
        user : {
            type : ObjectId, 
            ref : "users", 
            required : true
        }, 
        comments : [
            {
                comment : {
                    type : String, 
                }, 
                commentBy : {
                    type : ObjectId,
                    ref : "users"
                }, 
                commentedAt : {
                    type : Date, 
                    default : new Date(),
                }

            }
        ]
    }, 
    {
        timestamps : true
    }
)


module.exports = mongoose.model('posts', postsSchema);




