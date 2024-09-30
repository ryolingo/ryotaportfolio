import { Box, Grid } from "@mui/material";
import { WorkList } from "../../data/WorkList";
import WorkCard from "../molecule/WorksCard";

const Works = () => {
  return (
    <Box>
      {WorkList.map((workCard) => (
        <Grid item key={workCard.imagePath}>
          <WorkCard workCard={workCard} />
        </Grid>
      ))}
    </Box>
  );
};

export default Works;
