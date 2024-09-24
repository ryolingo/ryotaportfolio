import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <AppBar
      position="relative"
      sx={{
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Container>
        <Toolbar>
          <Typography>亮太のポートフォリオ</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
