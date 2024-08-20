"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import LaptopIcon from "@mui/icons-material/Laptop";
import SpatialAudioOffSharpIcon from "@mui/icons-material/SpatialAudioOffSharp";
import CodeIcon from "@mui/icons-material/Code";
import { Box } from "@mui/material";

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      borderBottom={"1"}
      borderColor={"devider"}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
      >
        <Tab icon={<SpatialAudioOffSharpIcon />} label="About" />
        <Tab icon={<LaptopIcon />} label="Works" />
        <Tab icon={<CodeIcon />} label="Skills" />
      </Tabs>
    </Box>
  );
}
