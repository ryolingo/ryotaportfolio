"use client";
import { Avatar, Container, Typography, styled } from "@mui/material";
import React from "react";

export const Introduction = () => {
  return (
    <>
      <StyledIntroBox sx={{ mt: "30px" }}>
        <StyledImage>
          <StyledAvatar
            alt=" Profile Image"
            src="/images/introdaction/avatar.JPG"
          />
        </StyledImage>
        <StyledContainer disableGutters>
          <StyledTitle sx={{ color: "#333333" }}>Ryota Matsumoto</StyledTitle>
          <StyledSubtitle sx={{ color: "#333333" }}>松本 亮太</StyledSubtitle>
          <StyledText sx={{ color: "#4a4a4az" }}>
            成蹊大学法学部/Peach.Tech/ACE公式テニス同好会副代表
          </StyledText>
        </StyledContainer>
      </StyledIntroBox>
    </>
  );
};

const StyledIntroBox = styled("div")(({ theme }) => ({
  display: "flex",
  backgroudColor: "gray",
  backgroundColor: "#f3f3f3",
  width: "100%",

  [theme.breakpoints.down("sm")]: {
    marginTop: "3rem",
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "25rem",
  backgroundColor: "F5F4EE",
  flexDirection: "column",
  padding: "0",
  marginRight: "0",
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
  letterSpacing: "0.5rem",
  color: "gray",
  alignItems: "center",
  fontSize: "2.5rem",
  fontFamily: "游ゴシック",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.7rem",
    letterSpacing: "1",
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
  width: "20rem",
  height: "20rem",
  marginLeft: "30%",
  marginTop: "10%",
  [theme.breakpoints.down("sm")]: {
    width: "7rem",
    height: "7rem",
  },
}));

export default Introduction;
