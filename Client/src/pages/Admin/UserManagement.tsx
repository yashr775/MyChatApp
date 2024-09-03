/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { Avatar, Skeleton } from "@mui/material";
import Table from "../../components/shared/Table";
import { transformImage } from "../../lib/features";

interface UserType {
  name: string;
  avatar: string;
  _id: string;
  username: string;
  friends: number;
  groups: number;
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
    },
    {
      name: "Jane Smith",
      avatar: "https://example.com/avatar2.jpg",
      _id: "user456",
      username: "jane_smith",
      friends: 200,
      groups: 5,
    },
    {
      name: "Alice Johnson",
      avatar: "https://example.com/avatar3.jpg",
      _id: "user789",
      username: "alice_j",
      friends: 180,
      groups: 4,
    },
    {
      name: "Bob Brown",
      avatar: "https://example.com/avatar4.jpg",
      _id: "user101",
      username: "bobb",
      friends: 220,
      groups: 6,
    },
    {
      name: "Charlie Wilson",
      avatar: "https://example.com/avatar5.jpg",
      _id: "user102",
      username: "charlie_w",
      friends: 170,
      groups: 2,
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
    renderCell: (params: { row: { name: string; avatar: string } }) => (
      <Avatar alt={params.row.name} src={params.row.avatar} />
    ),
  },

  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "username",
    headerName: "Username",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "friends",
    headerName: "Friends",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "groups",
    headerName: "Groups",
    headerClassName: "table-header",
    width: 200,
  },
];

const UserManagement = () => {
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

export default UserManagement;
