/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { Box, Stack, Avatar, Skeleton } from "@mui/material";
import RenderAttachment from "../../components/shared/RenderAttachment";
import { fileFormat, transformImage } from "../../lib/features";
import moment from "moment";
import Table from "../../components/shared/Table";

interface attachmentType {
  public_id: string;
  url: string;
}

interface messageType {
  attachments: attachmentType[];
  content: string;
  _id: string;
  sender: {
    _id: string;
    name: string;
  };
  chat: string;
  createdAt: string;
  groupChat?: false;
}

interface dataType {
  messages: messageType[];
}
const data: dataType = {
  messages: [
    {
      attachments: [
        {
          public_id: "sample_public_id_0",
          url: "https://example.com/sample_attachment_0.jpg",
        },
      ],
      content: "Sample content 0",
      _id: "sample_id_0",
      sender: {
        _id: "sender_id_0",
        name: "Sender 0",
      },
      chat: "Sample chat 0",
      createdAt: "2024-08-29T17:29:48.821992",
    },
    {
      attachments: [
        {
          public_id: "sample_public_id_1",
          url: "https://example.com/sample_attachment_1.jpg",
        },
      ],
      content: "Sample content 1",
      _id: "sample_id_1",
      sender: {
        _id: "sender_id_1",
        name: "Sender 1",
      },
      chat: "Sample chat 1",
      createdAt: "2024-08-24T17:29:48.821992",
    },
    {
      attachments: [
        {
          public_id: "sample_public_id_2",
          url: "https://example.com/sample_attachment_2.jpg",
        },
      ],
      content: "Sample content 2",
      _id: "sample_id_2",
      sender: {
        _id: "sender_id_2",
        name: "Sender 2",
      },
      chat: "Sample chat 2",
      createdAt: "2024-08-27T17:29:48.821992",
    },
    {
      attachments: [
        {
          public_id: "sample_public_id_3",
          url: "https://example.com/sample_attachment_3.jpg",
        },
      ],
      content: "Sample content 3",
      _id: "sample_id_3",
      sender: {
        _id: "sender_id_3",
        name: "Sender 3",
      },
      chat: "Sample chat 3",
      createdAt: "2024-08-28T17:29:48.821992",
    },
    {
      attachments: [
        {
          public_id: "sample_public_id_4",
          url: "https://example.com/sample_attachment_4.jpg",
        },
      ],
      content: "Sample content 4",
      _id: "sample_id_4",
      sender: {
        _id: "sender_id_4",
        name: "Sender 4",
      },
      chat: "Sample chat 4",
      createdAt: "2024-08-23T17:29:48.821992",
    },
  ],
};

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "attachments",
    headerName: "Attachments",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params: { row: { attachments: attachmentType[] } }) => {
      const { attachments } = params.row;

      return attachments?.length > 0
        ? attachments.map((i: { url: string }) => {
            const url = i.url;
            const file = fileFormat(url);

            return (
              <Box>
                <a
                  href={url}
                  download
                  target="_blank"
                  style={{
                    color: "black",
                  }}
                >
                  {RenderAttachment({ file, url })}
                </a>
              </Box>
            );
          })
        : "No Attachments";
    },
  },

  {
    field: "content",
    headerName: "Content",
    headerClassName: "table-header",
    width: 400,
  },
  {
    field: "sender",
    headerName: "Sent By",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params: {
      row: {
        sender: {
          name:
            | string
            | number
            | boolean
            | React.ReactElement<string>
            | Iterable<React.ReactNode>
            | null
            | undefined;
          avatar: string | undefined;
        };
      };
    }) => {
      const sender = params.row.sender;
      return (
        <Stack direction="row" alignItems="center" spacing={"1rem"}>
          {sender ? (
            <>
              <Avatar alt={String(sender.name) || ""} src={sender.avatar} />
              <span>{sender.name}</span>
            </>
          ) : (
            <span>No Sender</span> // Fallback if creator is undefined
          )}
        </Stack>
      );
    },
  },
  {
    field: "chat",
    headerName: "Chat",
    headerClassName: "table-header",
    width: 220,
  },
  {
    field: "groupChat",
    headerName: "Group Chat",
    headerClassName: "table-header",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Time",
    headerClassName: "table-header",
    width: 250,
  },
];

const MessageManagement = () => {
  const [rows, setRows] = useState([]);

  //   useEffect(() => {
  //     if (data) {
  //       setRows(
  //         data.messages.map(
  //           (i: {
  //             _id: string;
  //             sender: { name: string; avatar: string | undefined };
  //             createdAt: moment.MomentInput;
  //           }) => ({
  //             ...i,
  //             id: i._id,
  //             sender: {
  //               name: i.sender.name,
  //               avatar: transformImage(i.sender.avatar, 50),
  //             },
  //             createdAt: moment(i.createdAt).format("MMMM Do YYYY, h:mm:ss a"),
  //           })
  //         )
  //       );
  //     }
  //   }, [data]);

  const loading = false;

  return (
    <AdminLayout>
      {loading ? (
        <Skeleton height={"100vh"} />
      ) : (
        <Table
          heading={"All Messages"}
          columns={columns}
          rows={rows}
          rowHeight={200}
        />
      )}
    </AdminLayout>
  );
};

export default MessageManagement;
