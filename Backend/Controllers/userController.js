const express=require('express');
const userModel=require('../Models/userModel');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const cookieParser=require('cookie-parser');
    // User Registration

exports.registerUser= async (req,res)=>{
    try {
        let {name,email,password}=req.body;
    const userExist=await userModel.findOne({email});

    // check wheither the user exist
    if(userExist){
      return res.status(400).json({
        message:"user already exist"
      })
    };
    // hashing password
    const hashedPossword=await bcrypt.hash(password,10);

    // create the user
    let newUser=await userModel.create({
        name,
        email,
        password:hashedPossword,
    });
    // response message
    res.status(201).json({
        message:"user registered",
        newUser:{
            id:newUser._id,
            name:newUser.name,
            email:newUser.email,
        }
    })
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }
};

 // User Login
exports.userLogin= async (req,res)=>{
    try {
        let {email,password}=req.body;
        // check wheither the user exist
        let user=await userModel.findOne({email});
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        };

        // check password
        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch){
            return  res.status(400).json({
                message:"invalid credentionals",
            })
        }
        // create token 
        const token=jwt.sign(
            {
            id: user._id},
            process.env.JWT_SECRET,
            { expiresIn:"1h" }
        );
        console.log(token);
        // sending cookie
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"lax",
            maxAge:24*60*60*1000,
        });
        res.status(200).json({
            message:"Login successful",
        })

    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }
}