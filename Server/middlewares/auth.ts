import {Request , Response, NextFunction } from "express";
import { TryCatch } from "./error";
import { ErrorHandler } from "../utils/utility";
import jwt from "jsonwebtoken"



const isAuthenticated = TryCatch((req:Request, res:Response, next:NextFunction) => {
    const token = req.cookies["chatAppToken"];
    if (!token)
      return next(new ErrorHandler("Please login to access this route", 401));
  
    const decodedData = jwt.verify(token, process.env.JWT_SECRET || "jhgjhghjghj");

    if (!decodedData || typeof decodedData === 'string') {
        throw new Error("Invalid token");
    }
  
    req.user = decodedData._id;
  
    next();
  });
  
  export {isAuthenticated}