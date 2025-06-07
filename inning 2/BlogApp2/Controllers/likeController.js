const Post = require("../model/postModel");
const Like = require("../model/likeModel");
const{response} = require('express');


//Like a post 
exports.likePost = async(req,res) =>{
    try{
        const {post , user} = req.body;
        const like = new Like({
            post,
            user
        });
        const savedLike = await like.save();
        

        //updating the collection basis on this 
        const updatePost = await Post.findByIdAndUpdate(
            post,
            {$push:{like:savedLike._id}},
        )
        .populate("likes")
        .exec();

        res.json({
            post:updatePost,
        });
    }catch(err){
        return res.status(500).json({
            error:"Error while Like Post",
        });
    };
}


//unlike a  Post
exports.unlikePost = async(req,res)=>{
    try{
        const{post,like} = req.body;

        //find and delete from the like collection
        const deletedLike  = await Like.findOneAndDelete({post:post, _id:like});

        //update the post collection

        const updatePost = await Post.findByIdAndUpdate(
            post,
            {$pull:{likes:deletedLike._id}},
            {new :true}
        );

        res.json({
            post:updatedPost,
        });
    }catch(err){
        return res.status(500).json({
            error:"Error while unliking the post",
        });
    }
};