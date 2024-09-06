import { NextFunction, Request, Response } from 'express';
import { User } from '../models/user';
import { cookieOption, sendToken } from '../utils/features';
import { compare } from 'bcrypt';
import { ErrorHandler } from '../utils/utility';
import { TryCatch } from '../middlewares/error';
import { Chat } from '../models/chat';

const newUser = (async (req:Request,res:Response)=>{

    const {name , username,bio,password} =req.body

  const user =   await User.create({name,username,bio,avatar:{public_id:"fgdfgdf",url:"dffdsfds"},password}) 
//   return res.status(200).json({message:"User created successfully"})

sendToken(res,user,201,"User created")

})

const login = TryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Username or Password", 404));
  }

  const isMatch = await compare(password, user.password);

  if (!isMatch) {
    return next(new ErrorHandler("Invalid Username or Password", 404));
  }

  sendToken(res, user, 201, `Welcome back ${user.name}`);
});

const getMyProfile = TryCatch(async (req:Request,res:Response) => {
const user = await User.findById(req.user)

res.status(200).json({
  success:true,
  user
})
})


const logout = TryCatch(async (req:Request,res:Response) => {
  return res
    .status(200)
    .cookie("chatAppToken","", { ...cookieOption, maxAge: 0 })
    .json({
      success: true,
      message: "Logged out successfully",
    });
  });

  const searchUser =  TryCatch(async (req:Request,res:Response,) => {
    const { name = "" } = req.query;

    const myChats = await Chat.find({ groupChat: false, members: req.user });
  
    const allUsersFromMyChats = myChats.flatMap((chat) => chat.members);
  
    const allUsersExceptMeAndFriends = await User.find({
      _id: { $nin: allUsersFromMyChats },
      name: { $regex: name, $options: "i" },
    });
  
    const users = allUsersExceptMeAndFriends.map(({ _id, name, avatar }) => ({
      _id,
      name,
      avatar: avatar.url,
    }));
  
    return res.status(200).json({
      success: true,
      users,
    });
    });

export {login,newUser,getMyProfile,logout,searchUser}