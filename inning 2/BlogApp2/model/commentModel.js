//Import Mongoose
const mongoose =  require('mongoose');


//Route Handler

const  commentSchema = new mongoose.Schema({
    post:{
        //dbout1
        type:mongoose.Schema.ObjectID,
        ref:"Post"
    },
    user:{
        type:String,
        required:true
    }
})

//exporting
module.exports = mongoose.model("Comment",commentSchema);