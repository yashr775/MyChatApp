/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment, useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { grayColor, orange } from "../constants/color";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/stylecomponents";
import FileMenu from "../components/dialogs/FileMenu";
import MessageComponent, {
  MessageComponentPropTypes,
} from "../components/shared/MessageComponent";

const user = {
  _id: "qwqeqwe",
  name: "aman",
};

const sampleMessages: MessageComponentPropTypes[] = [
  {
    attachments: [
      {
        public_id: "ldkfjldkds",
        url: "",
      },
    ],
    content: "Random message",
    _id: "kcvcxvxcxcv",
    sender: {
      _id: "qewerwqe",
      name: "Aman",
    },
    chat: "chatId",
    createdAt: "2024-08-30T04:04:08.736183Z",
  },
  {
    attachments: [
      {
        public_id: "ldkfjldkds2",
        url: "https://www.w3schools/howto/img_avatar.png",
      },
    ],
    content: "Random message2",
    _id: "kcvcxvxcxcv2",
    sender: {
      _id: "qwqeqwe",
      name: "Aman2",
    },
    chat: "chatId2",
    createdAt: "2024-08-30T04:04:08.736183Z",
  },
];

const Chat = () => {
  const containerRef = useRef(null);
  const fileMenuRef = useRef(null);

  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {sampleMessages.map((message) => (
          <MessageComponent
            key={message._id} // Ensure each child in a list has a unique key
            attachments={message.attachments}
            content={message.content}
            _id={message._id}
            sender={message.sender}
            chat={message.chat}
            createdAt={message.createdAt}
            user={user}
          />
        ))}
      </Stack>
      <form style={{ height: "10%" }}>
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              rotate: "30deg",
            }}
            ref={fileMenuRef}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type Message Here..." />

          <IconButton
            type="submit"
            sx={{
              rotate: "-30deg",
              bgcolor: orange,
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu anchorE1={fileMenuRef.current} />
    </Fragment>
  );
};

export default AppLayout(Chat);
