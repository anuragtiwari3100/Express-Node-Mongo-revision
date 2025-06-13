const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const {connectDB} = require("./config/db");




app.use(express.json());
connectDB();

//Import the route and mounting it
const user = require("./routes/user");

app.use("/api/v1", user);

app.get("/",(req,res)=>{
res.send(`<h1 style="color: purple;">🚩 Jai Shri Radhe Shyam 🚩</h1>`);
})



app.listen(PORT,()=>{
    console.log(`Our application is successfully running at port ${PORT}`);
})