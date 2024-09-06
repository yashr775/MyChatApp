import { NextFunction } from "express"

interface ErrorWithStatusCode extends Error {
    statusCode?: number;
}
const errorMiddleware = (err:ErrorWithStatusCode, req:Request, res:Response, next:NextFunction) => {

    err.message ||= "Internal server error"
    err.statusCode ||=500
 
    return res.status(err.statusCode).json({success:false , message:err.message})

}


const TryCatch = (passedFunc:Function) => async (req:Request, res:Response, next:NextFunction) => {
    try {
      await passedFunc(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  



export {errorMiddleware,TryCatch}