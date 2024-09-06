import mongoose from "mongoose"
import {Response} from "express"
import { UserType } from "./Types/userTypes"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"


dotenv.config({path:"./.env"})

const jwtSecret =process.env.JWT_SECRET || "My secret"


const cookieOption = {
    maxAge:15*24*60*60*1000,
    sameSite:!"none",
     http:true,
     secure:true
}



const connectDB = (uri:string | undefined) =>{
    if(!uri){
        console.log("data base inactive")
        return;
    }
    mongoose.connect(uri,{dbName:"chatapp"})
    .then((data)=>{console.log(`connected to db ${data.connection.host}`)})
    .catch((err) => {throw err})
}

const sendToken = (res:Response,user:UserType, code:number  ,message:string) =>{

    const token  = jwt.sign({_id:user._id},jwtSecret)
    
    return res.status(code).cookie("chatAppToken",token,cookieOption).json({success:true,message,user})

}


const emitEvent = (req:any,event:any,users:any,data:any)=>{

    console.log("Emmiting evengt"+event)
}



export {connectDB , sendToken , cookieOption,emitEvent}