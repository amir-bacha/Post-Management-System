const express=require('express');
const Authenticated=require("../Middlewares/authintication");
const router=express.Router();

const {
    createPost,
    getAllPosts,
    upDatePost,
    deletePost,
}=require('../Controllers/postController');
// create post
router.post("/",Authenticated,createPost);
// Read all post 
router.get("/",Authenticated,getAllPosts);
// Update post
router.post("/:id",Authenticated,upDatePost);
// delete post
router.delete("/:id",Authenticated,deletePost);
module.exports=router;
