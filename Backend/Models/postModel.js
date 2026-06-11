const mongoose=require('mongoose');
const postSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:4,
    },
    content:{
        type:String,
        required:true,

    },
    author:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    }
});
module.exports=mongoose.model("post",postSchema);