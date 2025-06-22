const  mongoose = require("mongoose");
const  nodemailer = require('nodemailer');
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

 fileSchema.post("save" , async function(doc) {
     try{
        console.log("doc",doc);  //doc that will get to save in the database



        //tranporter

        //shift this configuration under config fiolder in a js  file
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                  user:process.env.MAIL_USER,
                  pass:process.env.MAIL_PASS
            },
        })





      //send eamil

      let info = await transporter.sendMail({
        from:`Tiwari - jee `,
        to: doc.email,
        subject: "New File Uploaded on Cloudinary",
        html:`<h2>Hello jee</h2><p>File Uploaded </p> Tap to View here: <a href="${doc.imageUrl}">${doc.imageUrl}`,
      })

      console.log("info",info);

     }  catch(err){
         console.error(err);

     }  
 })


 
const File = mongoose.model("File",fileSchema);
module.exports = File;

