const express = require("express")
const app = express();
const port = 3000


// app.get("/",(rerq, res) =>{
//     res.send("Radhe Krishna");
// })

app.get("/",(req, res)=>{
        // res.send("Radhe Krishna")
   res.sendFile("./dummy.html",
    {root:__dirname})
   
})

app.post("/items",(req, res)=>{
    res.json({x:1,y:2,z:3});
    res.send("Got a post request");
})

app.put("/items/:id",(req,res)=>{
    res.send("Get a put request");
})

app.delete("/items/id",(req,res)=>{
    res.send("got a delete request");
})
app.listen(port,()=>{
    console.log(`Our Application is runnig on the port no ${port}`)
})