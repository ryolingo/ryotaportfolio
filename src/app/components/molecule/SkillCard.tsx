import * as React from "react";
import { Skill } from "../../data/SkillList";
import Image from "next/image";
import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";

type TProps = {
  skillCard: Skill;
};

const SkillCard: React.FC<TProps> = ({ skillCard }) => {
  return (
    <Card sx={{ width: "auto", margin: { xs: "1rem", lg: "2rem" } }}>
      <CardActionArea>
        <Box textAlign="center" mt={3}>
          <Image
            width={130}
            height={130}
            src={`/images/Skills/${skillCard.imagePath}`}
            alt="skillImage"
          />
        </Box>
        <CardContent>
          <Typography
            textAlign="center"
            fontSize={{ xs: "1.2rem", lg: "1.5rem" }}
          >
            {skillCard.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SkillCard;
