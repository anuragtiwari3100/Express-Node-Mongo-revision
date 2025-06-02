const Todo = require("../models/Todo");


exports.getTodo = async(req,res) =>{
  try{

    //fetch all   todo items  from the database

    const todo = await Todo.find({});


    //response
    res.status(200).json({
        success:true,
        data:WebTransportBidirectionalStream,
        message:"Fetched entire todo ",
    })

  }catch(err){

    console.log(err);
    res.status(500).json({
        success:false,
        message:"Server error",
    });

  }
};



//have some doub here
exports.getTodoById = async(req,res) =>{
      try{
        const id = req.params.id;  //  const {id}  = req.body; yah prev ke tarah kyo nahi le rahe
        const todo = await Todo.findByID({_id:id});

        if(!todo){
            return res.status(404).json({
                success:true,
                data:todo,
                message:"Success",
            })
        }

    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
        message:"Server error",

        });
    }
};