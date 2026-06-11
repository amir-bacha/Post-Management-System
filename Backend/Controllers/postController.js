const postModel=require('../Models/postModel');
// create post
exports.createPost = async (req,res)=>{
    try {
        const {title,content}=req.body;
        const newPost=await postModel.create({
            title,
            content,
            author:req.user._id,
        });
        res.status(201).json({
            sucess:true,
            message:"Post created successful",
            newPost,
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
};

//  Get All Posts
exports.getAllPosts=async (req,res)=>{
    try {
        
        const posts=await postModel.find({
            author:req.user._id,
        });
        res.status(200).json({
            success:true,
            posts,
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        });
    };
};
exports.upDatePost=async (req,res)=>{
    try {
        const {title,content}=req.body;
        const UpdatedPost=await postModel.findOneAndUpdate(
            { _id:req.params.id,author:req.user._id},
            { title,content },
            { new:ture },
        );
        if(!upDatePost){
            res.status(404).json({
                message:"post not found",
            });
        };
        res.status(200).json({
            success:true,
            message:"Post Updated successfully",
            UpdatedPost,
        })

    } catch (error) {
        res.status(500).json({
            message:error.message,
            success:false,
        })
    }
};
 
 // Delete Post
 exports.deletePost=async (req,res)=>{
    try {
        const deletingPost=await postModel.findOneAndUpdate(
            {_id:req.params.id ,author:req.user._id},
           
        );
        if(!deletingPost){
            return res.status(404).json({
                success:false,
                message:"Post are not fund or User are not authorized",
            });
        };
        res.status(200).json({
            success:false,
            message:"Post deleted successfuly",
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
 }