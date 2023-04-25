const users = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const login = async (req, res) => {
    try{
        
        //fetching data and searching for the email if it is existing in databse 
        const {email, password} = req.body;
        const isFound = await users.findOne({email});
        if(isFound){
            //checking if the password does match.. 
            const check  = await bcrypt.compare(password, isFound.password);
            if(check){
                //we create a token 

                const token = jwt.sign(
                    {   
                        _id : isFound._id, 
                        username : isFound.username, 
                        email : isFound.email,
                        picture : isFound.picture, 
                        firstName : isFound.firstName, 
                        lastName : isFound.lastName,
                    }, 
                    process.env.tokenPass,
                    {
                        expiresIn : "24h" 
                    }
                )

                const user = {
                    
                    _id :  isFound._id,
                    username : isFound.username, 
                    email : isFound.email, 
                    picture : isFound.picture, 
                    firstName : isFound.firstName, 
                    lastName : isFound.lastName,
                    token : token, 
                }
                res.status(200).send(user);
            }
            else{
                res.status(400).send("Invalid credentials. Try again.");
            }
        }
        else{
            res.status(404).send('User Not Found.');
        }


    }
    catch(e){
        res.status(666).send(e.message);
    }
}


module.exports = login;