import { Grid } from "@mui/material";
import SkillCard from "../molecule/SkillCard";
import { SkillList } from "../../data/SkillList";

const Skills = () => {
  return (
    <Grid container spacing={1} padding={"3% 15%"}>
      {SkillList.map((skillCard) => (
        <Grid
          key={skillCard.imagePath}
          item
          xs={12}
          sm={6}
          md={3}
          lg={3}
          xl={3}
        >
          <SkillCard skillCard={skillCard} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Skills;
