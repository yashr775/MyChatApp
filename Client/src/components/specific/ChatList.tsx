/* eslint-disable @typescript-eslint/no-unused-vars */
import { Stack } from "@mui/material";
import React from "react";

interface ChatListProps {
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
  chatId,
  onlineUsers = [],
  newMessageAlert = [],
}: ChatListProps) => {
  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((data) => {
        return <div>{data}</div>;
      })}
    </Stack>
  );
};

export default ChatList;
