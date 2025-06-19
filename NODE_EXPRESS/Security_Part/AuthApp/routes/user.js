const express = require('express');
const  router = express.Router();

const{login,signup} = require('../controllers/Auth');
const{auth,isStudent,isAdmin} = require('../middlewares/auth');


router.post("/signup",signup);
router.post("/login",login);



//protected route  for single  route
router.get("/test",auth,(req,res)=>{
        res.json({
        success:true,
        message:'Welcome to the  protected route for the Visitors',
    });
})


//protected route
router.get("/students",auth, isStudent, (req,res)=>{
    res.json({
        success:true,
        message:'Welcome to the  protected route for the students',
    });
})



router.get("/admin",auth,isAdmin,(req,res)=>{
      res.json({
        success:true,
        message:'Welcome to the  protected route for the Admin',
    });  
})

module.exports = router;
