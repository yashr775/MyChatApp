/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { bgGradient, matBlack } from "../constants/color";
import { memo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AvatarCard from "../components/shared/AvatarCard";

const sampleGroups: Group[] = [
  {
    _id: "1",
    name: "React Developers",
    avatar: "https://www.w3schools.com/howto/img_avatar2.png",
  },
  {
    _id: "2",
    name: "UI/UX Designers",
    avatar: "https://www.w3schools.com/w3images/avatar6.png",
  },
  {
    _id: "3",
    name: "Backend Engineers",
    avatar: "https://www.w3schools.com/w3images/avatar2.png",
  },
  {
    _id: "4",
    name: "Project Managers",
    avatar: "https://www.w3schools.com/w3images/avatar5.png",
  },
  {
    _id: "5",
    name: "DevOps Enthusiasts",
  },
];

const Group = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileClose = () => setIsMobileMenuOpen(false);

  const navigateBack = () => {
    navigate("/");
  };

  const IconBtns = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}
      >
        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: matBlack,
            color: "white",
            ":hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );
  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sm={4}
        sx={{ display: { xs: "none", sm: "block" } }}
        bgcolor={"bisque"}
      >
        <GroupsList w={"50vw"} myGroups={sampleGroups} chatId={"2"} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {IconBtns}
      </Grid>
      <Drawer
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
      ></Drawer>
    </Grid>
  );
};

interface Group {
  _id: string;
  name: string;
  avatar?: string;
}

interface GroupsListProps {
  w?: string;
  myGroups?: Group[];
  chatId?: string;
}

interface GroupListItemProps {
  group: Group;
  chatId?: string;
}

const GroupsList = ({
  w = "100%",
  myGroups = [],
  chatId = "",
}: GroupsListProps) => (
  <Stack
    width={w}
    sx={{
      backgroundImage: bgGradient,
      height: "100vh",
      overflow: "auto",
    }}
  >
    {myGroups.length > 0 ? (
      myGroups.map((group) => (
        <GroupListItem group={group} chatId={chatId} key={group._id} />
      ))
    ) : (
      <Typography textAlign={"center"} padding="1rem">
        No groups
      </Typography>
    )}
  </Stack>
);

const GroupListItem = memo(({ group, chatId }: GroupListItemProps) => {
  const { name, avatar, _id } = group;
  const avatarUrl = avatar
    ? [avatar]
    : ["https://www.w3schools/howto/img_avatar.png"];

  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatarUrl} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Group;
