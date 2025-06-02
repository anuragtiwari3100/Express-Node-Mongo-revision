// importing the model

const Todo = require("../models/Todo");


//define route  handler


exports.deleteTodo =  async(req,res)=>{
     try{
     const {id}  = req.body;
      await  Todo.findByIDAndDelete({id});

      res.json({
        success:true,
        message:"Todo deleted Successfully"
      })
     }catch(err){
         
        res.status(500).json({
            success:false,
            err:err.message,
            message:"Server error",
        });
     }
}
