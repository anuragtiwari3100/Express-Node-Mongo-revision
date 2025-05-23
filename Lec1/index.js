const express = require('express')
const app = express()

const port = 3000




/**
 * 
 * 
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
            //ending the Req res cycle
            res.send("Execution ends here");
        } 

        app.use(validationMiddleware);
 */

      const route = require('./routes/route');
      //mounting the routes
      app.use("/api" ,route);
       
      //-> /api/student
      //-> /api/admin
 
app.use(express.json());

app.get("/",(req,res)=>{
    console.log(req.body);    
    res.send("Radhe-Radhe");
    console.log("me hu route handler");
})


app.listen(port,()=>{
    console.log(`Example app  is listining on port ${port}`)
})