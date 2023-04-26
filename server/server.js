const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const userRoute = require('./routes/user');

const mongoose = require('mongoose');
require('dotenv').config();

//create app 
const app = express();

//set up json
app.use(express.json());

//set up cors
const option = {
    origin : `http://localhost:${process.env.Port}`
}
app.use(cors());


//create server
app.listen(process.env.Port, ()=>{
    console.log('Connected to Server');
}) 

//create connection to mongodb 
mongoose.connect(process.env.Mongo, {
    useNewUrlParser : true, 
})
.then(()=>{
    console.log("Connected to Database");
})
.catch((error)=>{
    console.log("Disconnected From Database/"+error.message);
})

//set up routes 
app.use('/auth', authRoute);
app.use('/post', postRoute);
app.use('/user', userRoute);
