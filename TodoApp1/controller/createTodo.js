//import the model
const Todo = require("../models/Todo");

//define route handler


//1sr tarika create and export
//kya aise ban ke export kar rahe hai to   file name aur meathod nam sam hona chaie
exports.createTodo = async(req , res) =>{
    try{

        //extract title and desxcription from reauest body
        const{title,description} = req.body;
       
        //create a new Todo Obj and insert in DB
        const response = await  Todo.create({title,description});

         //send a json response with a success flag
         res.status(200).json({
                      success:true,
                    data:response,
                    message:'Entry Created Successfully'
         });


    }
    catch(err){
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
        })
    }
}




//second tarka create then export
// module.exports = {getProduct,Updateproducts,createproduct,deleteProduct};
