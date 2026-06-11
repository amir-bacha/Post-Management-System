const express=require('express');
const router=express.Router();
const {
    createPost,
    getAllPosts,
    upDatePost,
    deletePost,
}=require('../Controllers/postController');
// create post
router.post("/",createPost);
// Read all post 
router.get("/",getAllPosts);
// Update post
router.post("/:id",upDatePost);
// delete post
router.delete("/:id",deletePost);
module.exports=router;
