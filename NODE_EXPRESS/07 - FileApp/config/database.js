const mongoose = require('mongoose');
require("dotenv").config();


exports.dbconnect = ()=>{
    mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
})


.then(console.log("DB Connection Sucessfully"))
.catch((err)=>{
    console.log("DB Connection Issues");
    console.log(err);
    process.exit(1);
})
};
