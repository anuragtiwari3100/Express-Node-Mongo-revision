
const mongoose = require('mongoose');

//importing package of dotenv
const dotenv = require('dotenv');

//load env configuration
dotenv.config();

const connectDB = async()=>{
    try{
 const connect = await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser:true,
            // useUnifiedTopology:true,
        });
        console.log("MongoDB Connected ✅");
 
    }catch(err){
             console.error("MongoDB connection failed ❌:", err.message);
             process.exit(1);
    }
};

module.exports = connectDB;                