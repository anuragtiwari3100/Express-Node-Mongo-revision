const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

require('dotenv').config();






exports.connectDB  = ()=>{
    mongoose.connect(process.env.MONGODB_URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    .then(()=>{
        console.log("Connection established with db successfully");
    })
    .catch((err)=>{
  console.log("Connection could not be established with db.....");
    console.error(err);
    process.exit(1);
    })
}



