import AboutList from "@/app/data/AboutList";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineItemClasses,
} from "@mui/lab";
import { Typography } from "@mui/material";

export default function TimeLine() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {AboutList.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot sx={{ width: "24px", height: "24px" }} />
            {index < AboutList.length - 1 && (
              <TimelineConnector
                sx={{ width: "4px", backgroundColor: "black" }}
              />
            )}
          </TimelineSeparator>
          <TimelineContent>
            <Typography>{item.date}</Typography>
            <Typography>{item.title}</Typography>
            <Typography>{item.subtitle}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
