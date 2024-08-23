import React, { ComponentType } from "react";
import Title from "../shared/Title";
import Header from "./Header";
import { Grid } from "@mui/material";

const AppLayout = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return (props: P) => {
    return (
      <div style={{ height: "100vh" }}>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            lg={4}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
            First
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={4} height={"100%"}>
            {" "}
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={4}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
          >
            Third
          </Grid>
        </Grid>

        <div>Footer</div>
      </div>
    );
  };
};

export default AppLayout;
