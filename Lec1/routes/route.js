const  express = require('express')
const router = express.Router();

//middlewares

 const auth = function(req, res, next){
    console.log("i am inside auth wala middleware");
    //adding  a dummy user
    req.user ={userId :1 ,role:"Student"};
    if(req.user){
//if a valid user is  there in req , then proceed to next middleware
      next();
    }else{
        res.json({
            success:false,
            message:"Not a valid User",
        })
    }
 }


 const isStudent = function(req,res,next){
      console.log("I am inside Student wala midleware");
      if(req.user.role ==  "Student"){
        next();
      }else{
        res.json({
            success: false,
            message :"Access Denied , this route is only for Students"
        })
      }
 }



 const isAdmin =  function(req, res, next){
    console.log("i am inside isAdmin wala middleware");
    if(req.user.role == "admin"){
        next();
    }else{
        res.json({
            super:false,
            message:"Access denied  : this route is only for  Admin"
        })
    }
 }



 //routes
 router.get("/Student" ,auth , isStudent , (req, res) =>{
    console.log("I am inside student   route");
    res.send("Student specific page");
 })

  router.get("/admin" ,auth , isStudent , (req, res) =>{
    console.log("I am inside   Admin   route");
    res.send("Admin specific page");
 })



 module.exports = router;