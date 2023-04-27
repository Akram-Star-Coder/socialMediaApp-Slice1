const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({

    firstName : {
        type : String, 
        required : [true, "First Name is Required"], 
        trim : true, 
        text : true
    }, 
    lastName : {
        type : String, 
        required : [true, "Last Name is Required"], 
        trim : true, 
        text : true
    }, 
    username : {
        type : String, 
        required : [true, "Username is Required"], 
        trim : true, 
        text : true, 
        unique : true
    }, 
    email : {
        type : String, 
        required : [true, "Email is Required"], 
        trim : true, 
        unique : true
    }, 
    password : {
        type : String, 
        required : [true, "Password is Required"], 
    },
    picture : {
        type : String, 
        required : false, 
        default : ""
    },
    cover : {
        type : String, 
        required : false, 
        trim : true, 
        default : ""
    },
    description :{
        type : String, 
        required : false, 
        default : ""
    },
    gender : {
        type : String, 
        required : [true, "Gender is Required"], 
        trim : true, 
        enum : ['Male', 'Female']
    },
    birthdayYear : {
        type : Number, 
        required : true, 
        trim : true
    }, 
    birthdayMonth : {
        type : Number, 
        required : true, 
        trim : true
    }, 
    birthdayDay : {
        type : Number, 
        required : true, 
        trim : true
    }, 
    friends : {
        type : Array, 
        default : []
    },
    following : {
        type : Array, 
        default : []
    }, 
    followers : {
        type : Array, 
        default : []
    }, 
    requests : {
        type : Array, 
        default : []
    }, 
    details : {
        bio : {
            type : String
        }, 
        otherName : {
            type : String
        }, 
        job : {
            type : String
        }, 
        highSchool : {
            type : String
        }, 
        college : {
            type : String
        }, 
        city : {
            type : String
        }, 
        relationship : {
            type : String, 
            enum : ["Single", "In a relationship", "Married", "Divorced"]
        }, 
        country : {
            type : String
        }, 
        instagram : {
            type : String
        }, 
        city : {
            type : String
        }
    }, 
    savedPosts : [
        {
            post : {
                type : String, 
                ref : "posts", 
            }, 
            savedAt : {
                type : Date, 
                default : new Date()
            }, 


        }
    ]
}, 
{
    timestamps : true
});



module.exports = mongoose.model('users', UserSchema);


