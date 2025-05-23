const express = require('express')
const app = express()

const port = 3000




//middleware -logging , auth , validation

//first middleware
//creation of middlewares
 const  loggingMiddleware = function(req, res, next){
     console.log("first middleware is  running");
     next();
 }

 //loading of middlewares
 app.use(loggingMiddleware);

 //second middleware
 const authMiddleware =function(req,res,next){
     console.log("second middleware is  running");
     next();
 }
  app.use(authMiddleware);

 //third middle ware

 const  validationMiddleware = function(req, res, next){
    console.log("third middleware is  running");
    next();
 } 

 app.use(validationMiddleware);
 
app.use(express.json());
app.get("/",(req,res)=>{
    console.log(req.body);    
    res.send("Radhe-Radhe");
    console.log("me hu route handler");
})


app.listen(port,()=>{
    console.log(`Example app  is listining on port ${port}`)
})