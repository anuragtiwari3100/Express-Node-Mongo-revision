const bcrypt = require("bcrypt");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const jwt_secret = process.env.JWT_SECRET;
require("dotenv").config();



//SignupHandler
exports.signup = async(req,res)=>{
    try{

        const{name,email,password,role} = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'User already exists'
            })
        }


        //Securing  password
        let hasedPassowrd ;

        try{
          hasedPassowrd  = await bcrypt.hash(password,10);
        }catch(error){
                return res.status(500).json({
                    success:false,
                    message:'Error while hashing the password'
                })
        }


        //create the new  user 
        const  user = await User.create({
          name,email, password:hasedPassowrd,role
        })

        return res.status(200).json({
            success:true,
            message:"User created successfully"
        })

    }catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message:'User can not be registered , please try again later'
        })
  
    }
}




//LoginHandler
exports.login = async (req,res)=>{

    try{

        //fetch data
        const{email, password} = req.body;
        
      //Validation on email and password
     if(!email || ! password){
        return res.status(400).json({
            success:false,
            message:'Please fill all the details carefully',
        })
     }

    //checking  for the registered user
     let user = await User.findOne({email});
    //  console.log("the user is"+user.password);
     //if not a registered user
     if(!user){
      return res.json(401).json({
        success:false,
        message:'User is not registered..'
      })
     }


    const payload ={
        email:user.email,
        id:user._id,
        role:user.ro
    };


     //Verify password && generate a JWT token
     if(await bcrypt.compare( password , user.password )){
                          // Pass from req.body, comparing with the hashed password from DB       

        //password matched  then  following task
        let  token  = jwt.sign(payload,jwt_secret,

            {
                expiresIn:"2h",
            }
        );

       
          user= user.toObject();
        user.token = token;
        user.password=undefined;

        const  options ={
         expires : new Date(Date.now() + 3*1000),
         httpOnly:true,
        }

        res.cookie("token", token,options).status(200).json({
            success:true,
            token,
            user,
            message:'User Logged in Successfully',
        });

        // res.status(200).json({
        //     success:true,
        //     token,
        //     user,
        //     message:'User Logged in Successfully',
        // });

        
        
     }else{
        //password do not matched
          return res.status(403).json({
            success:false,
            message:'Password inCorrect',
          })
     }


    }catch(error){
      console.log(error);
      return res.status(500).json({
        success:false,
        message:'Login Failure',
      })
    }
}