import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import React from "react";
import avatarImage from "../../avatars/man.png";

interface AvatarCardPropType {
  avatar?: string[];
  max?: number;
}

const AvatarCard = ({
  avatar = [avatarImage, "https://www.w3schools/howto/img_avatar.png"],
  max = 4,
}: AvatarCardPropType) => {
  return (
    <Stack direction={"row"} spacing={0.5}>
      <AvatarGroup
        max={max}
        sx={{
          position: "relative",
        }}
      >
        <Box width={"5rem"} height={"3rem"}>
          {avatar.map((i, index) => (
            <Avatar
              key={Math.random() * 100}
              alt={`Avatar ${index}`}
              src={i}
              sx={{
                width: "3rem",
                height: "3rem",
                position: "absolute",
                left: {
                  xs: `${0.5 + index}rem`,
                  sm: `${index}rem`,
                },
              }}
            />
          ))}
        </Box>
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
