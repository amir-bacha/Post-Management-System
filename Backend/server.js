const express=require('express');
require("dotenv").config();
const cookieParser=require('cookie-parser');
const app=express();
app.use(cookieParser());
const DBconnection=require('./Config/db');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const userRoutes=require('./Routes/userRoute');
const postRoutes=require('./Routes/postRoute');
app.use(express.json());
DBconnection();
app.use("/api/user",userRoutes);
app.use("/api/post",postRoutes);
app.listen(5000,(req,res)=>{
    console.log("Running at port 5000");
});
