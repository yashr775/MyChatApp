/* eslint-disable @typescript-eslint/no-unused-vars */
import { useInputValidation } from "6pp";
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";

// interface userType {
//   name: string;
//   email: string;
// }

interface userType {
  name: string;
  _id: string;
  avatar: string;
}

const users = [1, 2, 3];

const Search = () => {
  const search = useInputValidation("");
  const [userData, setUserData] = useState<userType>({
    name: "gfhhfgh",
    _id: "5433",
    avatar: "https://www.w3schools/howto/img_avatar.png",
  });

  const addFriendHandler = (id: string) => {
    console.log(id);
  };

  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />{" "}
        <List>
          {users.map((user) => (
            <UserItem
              user={userData}
              handler={function (_id: string): void {
                throw new Error("Function not implemented.");
              }}
              handlerIsLoading={false}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
