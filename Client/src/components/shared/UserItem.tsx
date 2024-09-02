import {
  ListItem,
  Stack,
  Avatar,
  Typography,
  IconButton,
  StackProps,
} from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import React, { memo } from "react";

export interface UserItemPropTypes {
  user: {
    name: string;
    _id: string;
    avatar: string;
  };
  handler: (_id: string) => void;
  handlerIsLoading?: boolean;
  isAdded?: boolean;
  styling?: StackProps;
}

const UserItem = ({
  user,
  handler,
  handlerIsLoading,
  isAdded = false,
  styling,
}: UserItemPropTypes) => {
  const { name, _id, avatar } = user;

  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
        {...styling}
      >
        <Avatar src={avatar} />

        <Typography
          variant="body1"
          sx={{
            flexGlow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {name}
        </Typography>

        <IconButton
          size="small"
          sx={{
            bgcolor: isAdded ? "error.main" : "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: isAdded ? "error.dark" : "primary.dark",
            },
          }}
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
        >
          {isAdded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem);
