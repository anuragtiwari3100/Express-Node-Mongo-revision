const express = require("express");
const app = express();


//load config from env
require("dotenv").config();
const PORT = process.env.PORT || 4000;


//middleware to parse json request body
app.use(express.json());

//importing the routes for TODO ApI
const todoRoutes = require("./routes/todo");

//mounting the todo API routes
app.use("/api/v1",todoRoutes);

//connect to the db
const dbConnect = require("./config/database");
dbConnect();




//starting the server

app.listen(PORT,(req, res)=>{
    console.log(`Our Application has started at ${PORT}`);
})

//defaulte route

app.get("/",(req, res) =>{
    res.send(`<h1>This is HOME PAGE</h1>`)
})



