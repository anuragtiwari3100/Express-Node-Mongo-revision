const {Schema, model} = require("mongoose");

const ProductSchema = new Schema({
    name:{
        type:String,
        required:true,
       
    },
        price:{
        type:Number,
        required:true,
       
    },
        desc:{
        type:String,
        required:true,
       
    },

    cat:{
        type:String,
        default:Date.now,
    },
        createdAt:{
        type:Date,
        default:Date.now,
    },
});



const productModel = model("Product", ProductSchema)
module.exports= productModel;