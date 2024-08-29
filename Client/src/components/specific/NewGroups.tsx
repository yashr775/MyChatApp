/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Dialog,
  Stack,
  DialogTitle,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import UserItem, { UserItemPropTypes } from "../shared/UserItem";
import { useInputValidation } from "6pp";

const sampleUsers: UserItemPropTypes[] = [
  {
    user: {
      name: "John",
      _id: "fdgjldflkjg",
      avatar: "https://www.w3schools/howto/img_avatar.png",
    },
    handler: (_id: string) => {},
  },
];

const Newgroups = () => {
  const groupName = useInputValidation("");

  const [members, setMembers] = useState<UserItemPropTypes[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  const submitHandler = () => {};

  const selectMemberHandler = (_id: string) => {
    // setMembers((prev) =>
    //   prev.map((i) => (i.user._id === _id ? { ...i, isAdded: !i.isAdded } : i))
    // );

    setSelectedMembers((prev) =>
      prev.includes(_id) ? prev.filter((i) => i != _id) : [...prev, _id]
    );
  };

  const closeHandler = () => {};

  console.log(selectedMembers);
  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>

        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />

        <Typography variant="body1">Members</Typography>

        <Stack>
          {sampleUsers.map((i) => (
            <UserItem
              user={i.user}
              handler={selectMemberHandler}
              key={i.user._id}
              isAdded={selectedMembers.includes(i.user._id)}
            />
          ))}
        </Stack>

        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="text" color="error" size="large">
            Cancel
          </Button>
          <Button variant="contained" size="large" onClick={submitHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default Newgroups;
