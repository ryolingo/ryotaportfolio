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
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight="bold" fontSize="2.0rem">
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
              <Styledtwitter
                src={"/images/header/x.png"}
                alt="twitterアイコン"
              />
            </Link>
          </StyledIcon>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

const StyledIcon = styled("div")(({ theme }) => ({
  width: "4rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1rem",
  [theme.breakpoints.down("sm")]: {
    marginRight: "1.7%",
    gap: "1rem",
  },
}));

const Styledtwitter = styled("img")(({ theme }) => ({
  width: "2.5rem",
  height: "2.5rem",

  [theme.breakpoints.down("sm")]: {
    width: "3rem",
    height: "3rem",
    marginTop: "0.5rem",
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
