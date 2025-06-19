//auth,isStudent,isAdmin
const jwt = require('jsonwebtoken');
require("dotenv").config();


exports.auth = (req, res, next) => {
    try {

        // console.log("Body", req.body.token);
        // console.log("Cookies", req.cookies.token);
        // console.log("Header", req.header("Authorization").replace("Bearer", " "));

        // const token = req.body.token;
        // const token = req.cookie.token 
        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ", "");

        if(!token || token === undefined) {
            return res.status(401).json({
                success:false,
                message:'Token Missing',
            });
        }
        // verify the token 
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);

            console.log(decode)

            req.user = decode;
        }
        catch (e) {
            return res.status(401).json({
                success: false,
                message: "token is invalid"
            })
        }

        next();
    }
    catch (err) {
        console.log(err)
        return res.status(401).json({
            success: false,
            message: "Something went wrong while verifying token"
        })
    }
}


exports.isStudent = (req,res)=>{    
    try{
           if(req.user.role != "Student"){
            return res.status(401).json({
                success:false,
                message:'this is a protected route  for the  students'
            })
           }
           next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:'User role is not matching',
         })

    }
}


exports.isAdmin  = (req,res)=>{
    try{
        if(req.user.role != "Admin"){
             return res.status(401).json({
                success:false,
                message:'this is a protected route  for the  admin'
            })
        }

    }catch(error){
        return res.status(500).json({
            success:false,
            message:'User role is not matching',
         })

    }
}
