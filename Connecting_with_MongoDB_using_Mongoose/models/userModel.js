const {Schema,model} = require("mongoose");


const userSchema  = new Schema({
    name:{   //it is like first feild
        type:String,
        required: true,
        maxlength:50
    },
    age:{   //it is like 2 feild
        type :Number,
        required:true
    },
    weight:{  //it is like 3 feild
        type:Number
    },
    
    hobbies:{  //it is like 4 feild
        type:String,
        required:true
    },  
    
    createdAt:{
        type:Date,
        default:Date.now,
    },
})

const userModel = model("user", userSchema)

module.exports = userModel;