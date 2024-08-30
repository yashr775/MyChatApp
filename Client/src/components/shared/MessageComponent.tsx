/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo } from "react";

interface MessageComponentPropTypes {
  attachments: [
    {
      public_id: string;
      url: string;
    }
  ];
  content: string;
  _id: string;
  sender: {
    _id: string;
    name: string;
  };
  chat: string;
  createdAt: string;
}

const MessageComponent = ({}) => {
  return <div>MessageComponent</div>;
};

export default memo(MessageComponent);
