import { Request, Response } from 'express';

const login = ((req:Request,res:Response)=>{
    res.send("Hello")
})


export {login}