import connectDB from "./db/index.js";
import dotenv from "dotenv";
import express from  "express";
dotenv.config({
    path:'./env'
})
const app=express()
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`Server is running at ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MongoDb connection failed",error)
})