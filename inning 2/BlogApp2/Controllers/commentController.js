//import the model

const Post = require("../model/postModel")
const Comment = require("../model/commentModel")

const {response} = require("express")


//business logic 
exports.createComment = async(req,res)=>{
     try{
        //fetch the data from the request  body
        const{post, user, body} = req.body;

        //create comment object
        const comment = new Comment({
            post, user, body
        })

        //saving the comment object into the db
        const savedComment = await comment.save();

                // Find the Post By Id and the new comment to its comment array 
const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comment:savedComment}},
    {new:true})
    .populate("comments")
    .exec();

    res.json({
        post:updatedPost,
    })
    

     }catch(err){
        return res.status(500).json({
            error:"Error while creating  comment",
        })
     }
}