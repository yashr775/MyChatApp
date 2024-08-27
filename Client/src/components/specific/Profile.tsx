import { Avatar, Stack, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import {
  Face as FaceIcon,
  AlternateEmail as UsernameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"kugjdflkjsudgfdjksh.fgdshjl,f"} />
      <ProfileCard
        heading={"Username"}
        text={"Escobar211"}
        Icon={<UsernameIcon />}
      />
      <ProfileCard heading={"name"} text={"Yash Raj"} Icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={moment("2024-08-27T00:00:00Z").fromNow()}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

export default Profile;

interface ProfileCardPropTypes {
  text?: string;
  Icon?: ReactElement;
  heading?: string;
}

const ProfileCard = ({ text, Icon, heading }: ProfileCardPropTypes) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={"1rem"}
      color={"white"}
      textAlign={"center"}
    >
      {Icon && Icon}

      <Stack>
        <Typography variant="body1">{text}</Typography>
        <Typography color={"gray"} variant="caption">
          {heading}
        </Typography>
      </Stack>
    </Stack>
  );
};
