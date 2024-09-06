import { ALERT, REFETCH_CHATS } from "../constants/event";
import { TryCatch } from "../middlewares/error";
import { Chat } from "../models/chat";
import { emitEvent } from "../utils/features";

interface UserType {
    _id: string;
    name: string;
    email: string;
}

interface GroupChatRequest extends Request {
    body: {
        name: string;
        members: UserType[]; // `members` should be an array of `UserType`
    };
    user?: UserType; // `req.user` should also be a `UserType`
}

const newGroupChat = TryCatch(async (req:GroupChatRequest,res:Response)=>{

    const { name, members } = req.body;

  const allMembers = [...members, req.user];

  await Chat.create({
    name,
    groupChat: true,
    creator: req.user,
    members: allMembers,
  });

emitEvent(req,ALERT,allMembers,`Welcome to ${name}`)
emitEvent(req,REFETCH_CHATS,)

  return res.status(201).json({
    success: true,
    message: "Group Created",
  });
})


export {newGroupChat}