const express=require('express');
const app=express();
const userRoutes=require('./Routes/userRoute');
const postRoutes=require('./Routes/postRoute');
app.use(express.json());
app.use("/api/user",userRoutes);
app.use("/api/post",postRoutes);
app.listen(5000,(req,res)=>{
    console.log("Running at port 5000");
});
