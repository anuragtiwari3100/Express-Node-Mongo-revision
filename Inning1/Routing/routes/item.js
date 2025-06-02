//files for storing item specific routes 

const express = require("express");
const router = express.Router();

router.get("/",(req, res)=>{
        // res.send("Radhe Krishna")
res.sendFile(path.join(__dirname, "../dummy.html"));
   
})

router.post("/items",(req, res)=>{
    res.json({x:1,y:2,z:3})
    // res.send("Got a post request");
})

router.put("/items/:id",(req,res)=>{
    res.send("Get a put request");
})

router.delete("/items/id",(req,res)=>{
    res.send("got a delete request");
})


module.exports = router;




