"use client";
import { AppBar, Container, styled, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",

        borderBottom: "none",
        height: "65px",
      }}
    >
      <Container disableGutters>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: "1.5rem",
              paddingLeft: "1rem",
              letterSpacing: "0.1em",
              mt: "0.5rem",
            }}
          >
            Portfolio
          </Typography>
          <StyledIcon>
            <Link href="https://github.com/ryolingo" target="blank">
              <StyledImage
                src={"/images/header/github.png"}
                alt="githubアイコン"
              />
            </Link>
            <Link href={"https://x.com/ryolongo"} target="blank">
              <StyledImage src={"/images/header/x.png"} alt="twitterアイコン" />
            </Link>
          </StyledIcon>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

const StyledIcon = styled("div")(({ theme }) => ({
  marginLeft: "auto", // アイコンを右に寄せる
  marginRight: "3%",
  gap: "1rem", // アイコンの間隔
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    marginRight: "1.7%",
    gap: "1rem",
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "3rem",
  height: "3rem",

  [theme.breakpoints.down("sm")]: {
    width: "3rem",
    height: "3rem",
    marginTop: "0.5rem",
  },
}));
