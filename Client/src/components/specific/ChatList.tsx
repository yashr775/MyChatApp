/* eslint-disable @typescript-eslint/no-unused-vars */
import { Stack } from "@mui/material";
import React from "react";
import ChatItem from "../shared/ChatItem";

interface ChatListProps {
  avatar: string[];
  w?: string;
  //   chats?: {
  //     chatId: string;
  //     message: string;
  //     sender: string;
  //     timestamp: number;
  //   }[];
  chats?: number[];
  chatId?: string;
  onlineUsers?: string[];
  newMessageAlert?: {
    chatId: string;
    count: number;
  }[];
}

const ChatList = ({
  w = "100%",
  chats = [],
  chatId = "kjlhldfig",
  onlineUsers = [],
  newMessageAlert = [],
}: ChatListProps) => {
  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((data) => {
        return (
          <ChatItem
            name={"John"}
            _id={chatId}
            sameSender={true}
            isOnline={true}
            newMessageAlert={[{ _id: chatId, count: 5 }]}
            handleDeleteChatOpen={function (
              e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
              _id: string,
              groupChat: boolean
            ): void {
              throw new Error("Function not implemented.");
            }}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
