/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
  Edit as EditIcon,
  Done as DoneIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import { bgGradient, matBlack } from "../constants/color";
import { lazy, memo, Suspense, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import AvatarCard from "../components/shared/AvatarCard";
import UserItem from "../components/shared/UserItem";

const sampleData = [
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
];

const ConfirmDeleteDialog = lazy(
  () => import("../components/dialogs/ConfirmDeleteDialog")
);

const AddMemberDialog = lazy(
  () => import("../components/dialogs/AddMemberDialog")
);

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
  const chatId = useSearchParams()[0].get("group");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
  const isAddMember = true;

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileClose = () => setIsMobileMenuOpen(false);

  const updateGroupName = () => {
    setIsEdit(false);
    console.log("Group name updated");
  };

  const navigateBack = () => {
    navigate("/");
  };

  useEffect(() => {
    setGroupName(`Group Name ${chatId}`);
    setGroupNameUpdatedValue(`Group Name ${chatId}`);

    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    };
  }, [chatId]);

  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
    console.log("Member deleted");
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };

  const openAddMemberHandler = () => {
    console.log("Member added successfully");
  };

  const deleteHandler = () => {
    console.log("Delete handler");
    closeConfirmDeleteHandler();
  };

  const removeMemberHandler = (id: string) => {
    console.log("member removed " + id);
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

  const GroupName = (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={"1rem"}
      padding={"3rem"}
    >
      {isEdit ? (
        <>
          <TextField
            value={groupNameUpdatedValue}
            onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
          />
          <IconButton onClick={updateGroupName}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4">{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </Stack>
  );

  const ButtonGroup = (
    <Stack
      direction={{
        xs: "column-reverse",
        sm: "row",
      }}
      spacing={"1rem"}
      p={{
        xs: "0",
        sm: "1rem",
        md: "1rem 4rem",
      }}
    >
      <Button
        size="large"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={openConfirmDeleteHandler}
      >
        Delete Group
      </Button>
      <Button
        size="large"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={openAddMemberHandler}
      >
        Add Member
      </Button>
    </Stack>
  );

  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sm={4}
        sx={{ display: { xs: "none", sm: "block" } }}
        bgcolor={"bisque"}
      >
        <GroupsList w={"50vw"} myGroups={sampleGroups} chatId={chatId || "2"} />
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
        {groupName && (
          <>
            {GroupName}
            <Typography
              margin={"2rem"}
              alignSelf={"flex-start"}
              variant="body1"
            >
              Members
            </Typography>
            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                sm: "1rem",
                xs: "0",
                md: "1rem 4rem",
              }}
              spacing={"2rem"}
              height={"50vh"}
              overflow={"auto"}
            >
              {sampleData.map((i) => (
                <UserItem
                  user={i}
                  key={i._id}
                  isAdded
                  styling={{
                    boxShadow: "0 0 0.5rem  rgba(0,0,0,0.2)",
                    padding: "1rem 2rem",
                    borderRadius: "1rem",
                  }}
                  handler={removeMemberHandler}
                />
              ))}
            </Stack>
            {ButtonGroup}
          </>
        )}
      </Grid>

      {isAddMember && (
        <Suspense fallback={<Backdrop open />}>
          <AddMemberDialog chatId={chatId || "2"} />
        </Suspense>
      )}

      {confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog
            open={confirmDeleteDialog}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteHandler}
          />
        </Suspense>
      )}

      <Drawer
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
      >
        <GroupsList w={"50vw"} chatId={chatId || "fgdgfdf"} />
      </Drawer>
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
    spacing={2}
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
      style={{ textDecoration: "none" }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatarUrl} />
        <Typography
          sx={{ color: "black", fontSize: "1.25rem", fontWeight: "600" }}
        >
          {name}
        </Typography>
      </Stack>
    </Link>
  );
});

export default Group;
