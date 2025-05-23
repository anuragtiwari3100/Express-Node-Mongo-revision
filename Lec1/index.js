const express = require('express')
const app = express()

const port = 3000








//loading middleware into the app
//in built middleware
app.use(express.json());
app.get("/",(req,res)=>{
    console.log(req.body);    
    res.send("Radhe-Radhe");
    console.log("Je to hostel bahar mil gaya hai...");
})


app.listen(port,()=>{
    console.log(`Example app  is listining on port ${port}`)
})