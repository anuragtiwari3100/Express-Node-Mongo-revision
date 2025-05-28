const express =   require('express');
const router = express.Router();


const User = require("../models/userModel");

//routes


//CRUD Operations




//view/Read
router.get('/users', async(req,res) =>{
      try{
          const users = await User.find();
          res.status(200).json(users);
      }catch(error){
    res.status(500).json({success:false,message:error.message});
      }
})




//create
  router.post('/users', async(req,res)=>{
    console.log("Receive request for post...");
    try{

      const {name,age,weight,hobbies} = req.body;

          // Step 1: Check if user already exists
          const existingUser = await  User.findOne({name,age});
    if(existingUser){
      return res.status(400).json({
        success:false,
        message:"User already exists with the same name and age "
      })
    }

      const NewUser = new User({name,age,weight,hobbies});
      await NewUser.save();
      res.status(200).json({
        success:true,
        User :NewUser
      })


    }catch(err){
      res.status(500).json({
        success:false,
        message:err.message
      })
    }
  })




  router.post('/bulk-users', async (req, res) => {
  try {
    // Expect an array of user objects in the request body
    const users = req.body;
    
    if (!Array.isArray(users)) {
      return res.status(400).json({
        success: false,
        message: "Expected an array of users"
      });
    }

    // Filter out any users that already exist (based on name and age)
    const usersToInsert = [];
    for (const userData of users) {
      const { name, age, weight, hobbies } = userData;
      // Check if a user with the same name and age already exists
      const existingUser = await User.findOne({ name, age });
      if (!existingUser) {
        // If not, push into our list to insert
        usersToInsert.push({ name, age, weight, hobbies });
      }
    }

    if (usersToInsert.length === 0) {
      return res.status(400).json({
        success: false,
        message: "All users already exist or no new user data provided"
      });
    }

    // Insert all new users at once
    const insertedUsers = await User.insertMany(usersToInsert);

    res.status(200).json({
      success: true,
      message: `${insertedUsers.length} users created successfully`,
      users: insertedUsers
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});



//update 
router.put('/users/:id', async(req,res) =>{
  const {id} = req.params;
  const{name,age,weight,hobbies} = req.body;

  //  if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(400).json({
  //     success: false,
  //     message: "Invalid ID format 🧨"
  //   });
  // }

  try{
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {name,age,weight,hobbies},
      {new:true} // returns the updated doc instead of old one
    );
    if(!updatedUser){
      res.json({
        message:"User Not found"
      })
    }
    //but if we have updated user sucessfully
    res.status(200).json({
      success:true,
      User:updatedUser
    })

  }catch(err){
    res.status(500).json({
      success:false,
      message:err.message
    })
  }
})



//Delete   operation
router.delete('/users/:id',async(req,res) =>{

  const {id}  = req.params;

  try{
      const deleteUser = await User.findByIdAndDelete(id);
      if(!deleteUser){
        res.json({
          message: "User not found"
        })
      }

      //user  Found and deleted Successfully 
      res.json({
         success:true,
         User : deleteUser
      })

  }catch(err){
    res.status(500).json({
      success:false,
      message:err.message
    })
  }
})

module.exports = router