require("dotenv").config();
const express=require('express');


const cors=require('cors');
const cookieParser=require('cookie-parser');
const app=express();
app.use(cors({
    origin : 'http://localhost:5173',
    credentials:true,
}));
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
