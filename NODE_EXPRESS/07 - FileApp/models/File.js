const  mongoose = require("mongoose");
const  nodemailer = require("nodemailer");
 require("dotenv").config();



 const  fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    fileUrl:{
        type: String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }
 });


//  fileSchema.post("save", async  function (doc){
//     try{
//         console.log("DOC : ",doc );
        

//     }catch(err){
//         console.log(err);
//     }
//  })

 
const File = mongoose.model("File",fileSchema);
module.exports = File;

