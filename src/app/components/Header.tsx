import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

export function Header() {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Typography>亮太のポートフォリオ</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
