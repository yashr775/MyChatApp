import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { memo } from "react";

interface NotificationType {
  sender: {
    avatar: string;
    name: string;
  };
  _id: string;
}

const sampleNotifications: NotificationType[] = [
  {
    sender: {
      avatar: "https://www.w3schools/howto/img_avatar.png",
      name: "John",
    },
    _id: "lkdsfhsl",
  },
  {
    sender: {
      avatar: "https://www.w3schools/howto/img_avatar.png",
      name: "John",
    },
    _id: "lkdsfhsl",
  },
];

const Notifications = () => {
  const friendRequestHandler = (_id: string, accept: boolean) => {
    console.log(_id + " " + accept);
  };

  return (
    <Dialog open>
      {" "}
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>
        {sampleNotifications.length > 0 ? (
          sampleNotifications.map((notification) => (
            <NotificationItem
              sender={notification.sender}
              _id={notification._id}
              handler={friendRequestHandler}
            />
          ))
        ) : (
          <Typography textAlign={"center"} padding="1rem">
            0 Notifications
          </Typography>
        )}
      </Stack>{" "}
    </Dialog>
  );
};

export default Notifications;

interface NotificationItemType {
  sender: { name: string; avatar: string };
  _id: string;
  handler: (_id: string, accept: boolean) => void;
}
const NotificationItem = memo(
  ({ sender, _id, handler }: NotificationItemType) => {
    const { name, avatar } = sender;

    return (
      <ListItem>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={"1rem"}
          width={"100%"}
        >
          <Avatar src={avatar} alt={name} />
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
            {`${name} sent you a friend request.`}
          </Typography>
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
          >
            <Button onClick={() => handler(_id, true)}>Accept</Button>
            <Button color="error" onClick={() => handler(_id, false)}>
              Reject
            </Button>
          </Stack>
        </Stack>
      </ListItem>
    );
  }
);
