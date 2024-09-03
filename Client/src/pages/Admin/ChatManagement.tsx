/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { Avatar, Skeleton, Stack } from "@mui/material";
import Table from "../../components/shared/Table";
import { transformImage } from "../../lib/features";
import AvatarCard from "../../components/shared/AvatarCard";

interface UserType {
  name: string;
  avatar: string;
  _id: string;
  username: string;
  friends: number;
  groups: number;
  members: string[];
  totalMembers?: number;
  group?: string;
  totalMessages?: number;
}

interface dashboardDataType {
  users: UserType[];
}
const data: dashboardDataType = {
  users: [
    {
      name: "John Doe",
      avatar: "https://example.com/avatar1.jpg",
      _id: "user123",
      username: "john_doe",
      friends: 150,
      groups: 3,
      members: [
        "https://example.com/avatar1.jpg",
        "https://example.com/avatar2.jpg",
      ],
    },
    {
      name: "Jane Smith",
      avatar: "https://example.com/avatar2.jpg",
      _id: "user456",
      username: "jane_smith",
      friends: 200,
      groups: 5,
      members: [
        "https://example.com/avatar1.jpg",
        "https://example.com/avatar2.jpg",
      ],
    },
    {
      name: "Alice Johnson",
      avatar: "https://example.com/avatar3.jpg",
      _id: "user789",
      username: "alice_j",
      friends: 180,
      groups: 4,
      members: [
        "https://example.com/avatar1.jpg",
        "https://example.com/avatar2.jpg",
      ],
    },
    {
      name: "Bob Brown",
      avatar: "https://example.com/avatar4.jpg",
      _id: "user101",
      username: "bobb",
      friends: 220,
      groups: 6,
      members: [
        "https://example.com/avatar1.jpg",
        "https://example.com/avatar2.jpg",
      ],
    },
    {
      name: "Charlie Wilson",
      avatar: "https://example.com/avatar5.jpg",
      _id: "user102",
      username: "charlie_w",
      friends: 170,
      groups: 2,
      members: [
        "https://example.com/avatar1.jpg",
        "https://example.com/avatar2.jpg",
      ],
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
    field: "avatar",
    headerName: "Avatar",
    headerClassName: "table-header",
    width: 150,
    renderCell: (params: { row: { avatar: string } }) => (
      <AvatarCard avatar={[params.row.avatar]} />
    ),
  },

  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 300,
  },

  {
    field: "groupChat",
    headerName: "Group",
    headerClassName: "table-header",
    width: 100,
  },
  {
    field: "totalMembers",
    headerName: "Total Members",
    headerClassName: "table-header",
    width: 120,
  },
  {
    field: "members",
    headerName: "Members",
    headerClassName: "table-header",
    width: 400,
    renderCell: (params: { row: { members: string[] | undefined } }) => (
      <AvatarCard
        max={100}
        avatar={params.row.members ? params.row.members : []}
      />
    ),
  },
  {
    field: "totalMessages",
    headerName: "Total Messages",
    headerClassName: "table-header",
    width: 120,
  },
  {
    field: "creator",
    headerName: "Created By",
    headerClassName: "table-header",
    width: 250,
    renderCell: (params: {
      row: {
        creator: {
          name?: string; // Ensure name is a string or undefined
          avatar: string | undefined;
        };
      };
    }) => {
      const creator = params.row.creator;
      return (
        <Stack direction="row" alignItems="center" spacing={"1rem"}>
          {creator ? (
            <>
              <Avatar alt={creator.name || ""} src={creator.avatar} />
              <span>{creator.name}</span>
            </>
          ) : (
            <span>No creator</span> // Fallback if creator is undefined
          )}
        </Stack>
      );
    },
  },
];

const ChatManagement = () => {
  const loading = false;
  const [rows, setRows] = useState<UserType[]>([]);

  useEffect(() => {
    if (data) {
      setRows(
        data.users.map((i) => ({
          ...i,
          id: i._id,
          avatar: transformImage(i.avatar, 50),
        }))
      );
    }
  }, [data]);

  return (
    <AdminLayout>
      {loading ? (
        <Skeleton height={"100vh"} />
      ) : (
        <Table heading={"All Users"} columns={columns} rows={rows} />
      )}
    </AdminLayout>
  );
};

export default ChatManagement;
