import * as React from "react";
import { Work } from "../../data/WorkList";
import { Box, Typography, styled, Link } from "@mui/material";
import { text } from "stream/consumers";

type TProps = {
  workCard: Work;
};

const WorkCard: React.FC<TProps> = ({ workCard }) => {
  return (
    <>
      <StyledContainer>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          p="3%"
          marginRight={"4%"}
          sx={{
            bgcolor: "#F0EDED",
            borderRadius: "1rem",
          }}
        >
          <StyledImage
            src={`/images/Works/${workCard.imagePath}`}
            alt="workImage"
          />
        </Box>

        <Box mt={"30px"}>
          <Title>{workCard.title}</Title>
          <Description>{workCard.details.content}</Description>
          <Description>≼概要≽{workCard.details.description}</Description>
          <Description>≼使用言語≽{workCard.details.language}</Description>
          <Description>
            <Link
              href={workCard.details.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {workCard.details.github}
            </Link>
          </Description>
        </Box>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  margin: "4.5%",
  borderBottom: "1px solid #ccc",
  paddingBottom: "1rem",
  [theme.breakpoints.down("sm")]: {
    display: "block",
    margin: "3%",
    width: "100%",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  paddingBottom: "5%",
  fontSize: "30px",
  fontWeight: " Bold",
  fontFamily: "游ゴシック",
  [theme.breakpoints.down("sm")]: {
    paddingBottom: "3%",
    fontSize: "1.5rem",
    textAlign: "center",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  paddingBottom: 10,
  fontSize: "1.2rem",
  fontWeight: 500,
  fontFamily: "游ゴシック",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6rem",
    textAlign: "center",
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "38vw",
  height: "24.5vw",
  [theme.breakpoints.down("sm")]: {
    width: "54vw",
    height: "49vw",
  },
}));

export default WorkCard;
