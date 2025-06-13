const  mongoose = require('mongoose');

const userSchema = mongoose.Schema({
 
  name:{
    type:String,
    require:true,
    trim:true,    
  },
  email:{
    type:String,
    require:true,
    trim:true
  },
  password:{
    type:String,
    require:true,
  },
  role:{
    enum:["Admin","Student","Visitor"],
  },

})

module.exports = mongoose.model("User", userSchema);