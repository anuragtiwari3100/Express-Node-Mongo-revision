const express = require("express")
const app = express();
const port = 3000


// app.get("/",(rerq, res) =>{
//     res.send("Radhe Krishna");
// })

  //chainning
app.get("/",(req, res)=>{
        // res.send("Radhe Krishna")
   res.sendFile("./dummy.html",
    {root:__dirname})
   
}).post("/items",(req, res)=>{
    res.json({x:1,y:2,z:3});
    res.send("Got a post request");
}).put("/items/:id",(req,res)=>{
    res.send("Get a put request");
}).delete("/items/id",(req,res)=>{
    res.send("got a delete request");
})

app.listen(port,()=>{
    console.log(`Our Application is runnig on the port no ${port}`)
})