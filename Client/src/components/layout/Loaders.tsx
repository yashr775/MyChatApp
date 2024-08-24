/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

export const LayoutLoader = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Grid container height={"calc(100vh - 4rem)"} spacing={"1rem"}>
        <Grid
          item
          sm={4}
          md={3}
          lg={4}
          sx={{ display: { xs: "none", sm: "block" } }}
          height={"100%"}
        >
          <Skeleton variant="rectangular" height={"100vh"} />
        </Grid>
        <Grid item xs={12} sm={8} md={5} lg={4} height={"100%"}>
          <Stack spacing={"1rem"}>
            {Array.from({ length: 10 }).map((_, index) => (
              <Skeleton variant="rectangular" height={"5rem"} />
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          md={4}
          lg={4}
          height={"100%"}
          sx={{
            display: { xs: "none", md: "block" },
            padding: "2rem",
          }}
        >
          <Skeleton variant="rectangular" height={"100vh"} />
        </Grid>
      </Grid>

      <div>Footer</div>
    </div>
  );
};
