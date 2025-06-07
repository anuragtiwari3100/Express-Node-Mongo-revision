//Import Mongoose
const mongoose =  require('mongoose');


//Route Handler

const  commentSchema = new mongoose.Schema({
    post:{
       
         type: mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    user:{
        type:String,
        required:true
    }
})

//exporting
module.exports = mongoose.model("Comment",commentSchema); 