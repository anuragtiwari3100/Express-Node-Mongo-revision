const express =  require('express');

//importing the  connection meathod 
const connectDB = require('./db');
const users = require('./routes/users')
const app = express();
const  dotenv = require('dotenv');


// load variables from .env file 👇 like  connection String  password
dotenv.config();
//loading env file
  

const PORT  = process.env.PORT;



//body parser 
app.use(express.json());

 connectDB();
    app.use('/api',users);


app.get('/',(req,res)=>{
    console.log("I am inside home page route handler");
    res.send("welcome to our websites");
})


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
