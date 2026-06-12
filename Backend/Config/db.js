const mongoose=require('mongoose');
const DBconnection=async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/POSTS");
        console.log("DB connected");
    } catch (error) {
        console.log(error);
    }
};
module.exports=DBconnection;