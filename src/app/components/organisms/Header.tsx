"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(10px)",
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  // height: "300vh",
  // width: "300vh",
  padding: theme.spacing(1),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function Header() {
  return (
    <StyledAppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              letterSpacing: "-0.05rem",
              color: "text.primary",
              textDecoration: "none",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "2.5rem",
              }}
            >
              Portfolio
            </Link>
          </Typography>
          <Box>
            <Link href="https://github.com/ryolingo" passHref>
              <StyledIconButton aria-label="GitHub">
                <GitHubIcon />
              </StyledIconButton>
            </Link>
            <Link href="https://x.com/ryolongo" passHref>
              <StyledIconButton aria-label="Twitter">
                <TwitterIcon />
              </StyledIconButton>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
