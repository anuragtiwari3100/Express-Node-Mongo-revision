const mongoose  = require('mongoose');

require(dotenv).config();

const connectToDb = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        usedUnifiedTopology:true,
    })

   .then(()=>{
      console.log("Sucessfully connected with databases");
   })
   .catch((error)=>{
    console.log("there is an issue while connecting to db");
   console.log(error.message);
   process.exit(1);    
   })
}


module.export = connectToDb;