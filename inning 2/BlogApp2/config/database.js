const  mongoose  = require("mongoose");
require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("Connection established with Db sucessfully");
    })
    .catch((err)=>{
        console.log("there are some issue while connecting to the databsases");
        console.log(err.message);
        process.exit(1);
    });

}

module.exports = dbConnect;