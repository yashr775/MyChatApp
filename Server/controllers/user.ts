import { Request, Response } from 'express';
import { User } from '../models/user';

const newUser = (async (req:Request,res:Response)=>{

    const {name , username,bio,password} =req.body

  const data =   await User.create({name,username,bio,avatar:{public_id:"fgdfgdf",url:"dffdsfds"},password}) 
  return res.status(200).json({message:"User created successfully"})
})

const login = ((req:Request,res:Response)=>{
    res.status(200).send({message:"user created successfully"})
})


export {login,newUser}