"use client";

import { Avatar, Box, Container, Typography, styled } from "@mui/material";

import React from "react";

export const Introduction = () => {
  return (
    <>
      <StyledIntroBox>
        <StyledImage>
          <StyledAvatar alt=" Profile Image" src="/images/avatar.jpg" />
        </StyledImage>
        <StyledContainer>
          <StyledTitle>Ryota Matsumoto</StyledTitle>
          <StyledSubtitle>松本亮太</StyledSubtitle>
          <StyledText>
            成蹊大学法学部/Pech.Tech/ACE公式テニス同好会副代表
          </StyledText>
        </StyledContainer>
      </StyledIntroBox>
    </>
  );
};
const StyledIntroBox = styled("div")(({ theme }) => ({
  display: "flex",
  backgroudColor: "gray",
  paddingLeft: "2rem",
  backgroundColor: "e0ffff",
  [theme.breakpoints.down("sm")]: {
    maginTop: "3rem",
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "25rem",
  backgroundColor: "F5F4EE",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "5%",
    height: "13rem",
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: "gray",
  fontSize: "5.5rem",
  fontWeight: "bold",
  letterSpacing: "2.3",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  letterSpacing: "1.5rem",
  color: "gray",
  alignItems: "center",
  fontSize: "2.5rem",
  fontFamily: "游ゴシック",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.7rem",
    letterSpacing: "1.7",
  },
}));

const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: "1.3rem",
  fontFamily: "游ゴシック",
  fontWeight: "bold",
  color: "gray",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6rem",
    letterSpacing: "1.7",
  },
}));

const StyledImage = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingRight: "12%",
  [theme.breakpoints.down("sm")]: {
    paddingRight: "5%",
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: "17rem",
  height: "17rem",
  [theme.breakpoints.down("sm")]: {
    width: "7rem",
    height: "7rem",
  },
}));

export default Introduction;
