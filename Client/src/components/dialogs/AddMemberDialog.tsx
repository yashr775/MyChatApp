/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Dialog,
  Stack,
  DialogTitle,
  Skeleton,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import UserItem from "../shared/UserItem";

const sampleData = {
  friends: [
    {
      _id: "1",
      name: "Alice Johnson",
      avatar: "alice@example.com",
    },
    {
      _id: "2",
      name: "Bob Smith",
      avatar: "bob@example.com",
    },
    {
      _id: "3",
      name: "Charlie Brown",
      avatar: "charlie@example.com",
    },
  ],
};

const AddMemberDialog = ({ chatId }: { chatId: string }) => {
  const [members, setMembers] = useState(sampleData);
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [isAddMember, setIsAddMember] = useState(true);
  const isLoading = false;
  const [isLoadingAddMembers, setIsLoadingAddMembers] = useState(false);

  //   const addFriendHandler = (id: string) => {
  //     console.log(id);
  //   };

  const addMemberSubmitHandler = () => {
    closeHandler();
  };

  const selectMemberHandler = (_id: string) => {
    setSelectedMembers((prev) =>
      prev.includes(_id) ? prev.filter((i) => i != _id) : [...prev, _id]
    );
  };

  const closeHandler = () => {
    setSelectedMembers([]);
    setMembers(sampleData);
    setIsAddMember(false);
  };

  console.log(chatId);
  return (
    <Dialog open={isAddMember} onClose={closeHandler}>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>

        <Stack spacing={"1rem"}>
          {isLoading ? (
            <Skeleton />
          ) : sampleData?.friends?.length > 0 ? (
            sampleData?.friends?.map((i) => (
              <UserItem key={i._id} user={i} handler={selectMemberHandler} />
            ))
          ) : (
            <Typography textAlign={"center"}>No Friends</Typography>
          )}
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Button color="error" onClick={closeHandler}>
            Cancel
          </Button>
          <Button
            onClick={addMemberSubmitHandler}
            variant="contained"
            disabled={isLoadingAddMembers}
          >
            Submit Changes
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
