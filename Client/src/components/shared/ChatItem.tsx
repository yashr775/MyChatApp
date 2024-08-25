/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo } from "react";
import { Link } from "../styles/stylecomponents";
import { Box, Stack, Typography } from "@mui/material";

interface ChatItemPropTypes {
  avatar?: string[]; // avatar is an optional string (URL or image path)
  name: string;
  _id: string;
  groupChat?: boolean;
  index?: number;
  sameSender: boolean;
  isOnline: boolean;
  newMessageAlert?: [{ _id: string; count: number }];
  handleDeleteChatOpen: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    _id: string,
    groupChat: boolean
  ) => void; // function type, returning nothing
}

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  index = 0,
  isOnline,
  newMessageAlert,
  handleDeleteChatOpen,
}: ChatItemPropTypes) => {
  return (
    <Link
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChatOpen(e, _id, groupChat)}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          position: "relative",
        }}
      >
        {" "}
        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert[0].count} New Message</Typography>
          )}
        </Stack>
        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default memo(ChatItem);
