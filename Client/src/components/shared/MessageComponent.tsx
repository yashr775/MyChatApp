/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Typography } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import moment from "moment";
import React, { memo } from "react";
import { fileFormat } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";

export interface MessageComponentPropTypes {
  attachments:
    | [
        {
          public_id: string;
          url: string;
        }
      ]
    | []
    | null;
  content: string;
  _id: string;
  sender: {
    _id: string;
    name: string;
  };
  chat: string;
  createdAt: string;
  user?: User;
}

interface User {
  _id: string;
  name: string;
}

const MessageComponent = ({
  attachments,
  content,
  _id,
  sender,
  chat,
  createdAt,
  user = {
    _id: "bnm cxcb",
    name: "Aman",
  },
}: MessageComponentPropTypes) => {
  const sameSender = sender._id === user._id;
  const timeAgo = moment(createdAt).fromNow();

  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {!sameSender && (
        <Typography color={lightBlue} fontWeight={"600"} variant="caption">
          {sender.name}
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}
      {attachments &&
        attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(attachment.url);
          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download
                style={{
                  color: "black",
                }}
              >
                {/* <RenderAttachment file={file} url={url} /> */}
                {RenderAttachment({ file, url })}
              </a>
            </Box>
          );
        })}

      <Typography variant="caption" color={"text.secondry"}>
        {timeAgo}
      </Typography>
    </div>
  );
};

export default memo(MessageComponent);
