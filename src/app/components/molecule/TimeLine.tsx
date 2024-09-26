import AboutList from "@/app/data/AboutList";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";
import { Card, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

const cardStyle = {
  padding: "16px",
  margin: "8px 0",
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
  animation: "fadeIn 1s ease-in-out",
};

const titleStyle = {
  fontWeight: "bold",
  marginBottom: "8px",
};

const subtitleStyle = {
  color: "#555",
};

const timelineItemStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "20px", // 各アイテム間の間隔を設定
  animation: "fadeIn 1s ease-in-out",
};

const timelineContentStyle = {
  flex: 1,
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function OppositeContentTimeline() {
  return (
    <Timeline position="alternate">
      {AboutList.map((item, index) => (
        <TimelineItem
          key={index}
          style={{ ...timelineItemStyle, animationDelay: `${index * 0.2}s` }}
        >
          <TimelineOppositeContent color="text.secondary">
            <Typography variant="body2">{item.date}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                height: "30px",
                width: "30px",
                animation: `${fadeIn} 1s ease-in-out`,
              }}
            />
            {index < AboutList.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent
            style={{
              ...timelineContentStyle,
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <Card style={{ ...cardStyle, animationDelay: `${index * 0.2}s` }}>
              <Typography variant="h6" style={titleStyle}>
                {item.title}
              </Typography>
              <Typography variant="body2" style={subtitleStyle}>
                {item.subtitle}
              </Typography>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
