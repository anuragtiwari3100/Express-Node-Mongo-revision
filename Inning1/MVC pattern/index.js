const express = require('express')
const ConnectDb = require('./db')
const app = express()
const dotenv = require('dotenv');
const productRoutes = require("./routes/ProductRoute")

dotenv.config();

const PORT = process.env.PORT;


   ConnectDb();

app.use(express.json());


//api->/   on this url will call a meathod

  app.get('/',(req,res)=>{
    res.send('Hello World!')
  })

  app.use('/api',productRoutes);
 

  app.listen(PORT,(req,res)=>{
    console.log(`Example app listing on port ${PORT}`)
  })