import AboutList from "@/app/data/AboutList";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";
import { Card, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const cardStyle = {
  padding: "16px",
  margin: "8px 0",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "none",
  border: "2px solid black",
  opacity: 0,
  transform: "translateY(20px)",
  transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
};

const titleStyle = {
  fontWeight: "bold",
  marginBottom: "8px",
};

const subtitleStyle = {
  color: "#555",
};

export default function OppositeContentTimeline() {
  const [visibleItems, setVisibleItems] = useState(
    Array(AboutList.length).fill(false)
  );
  const refs = useRef<(HTMLDivElement | null)[]>([]); // refsの型を明示

  useEffect(() => {
    const handleScroll = () => {
      const updatedVisibleItems = AboutList.map((_, index) => {
        const ref = refs.current[index];
        return ref && ref.getBoundingClientRect().top < window.innerHeight; // ビューポートに入ったか判定
      });
      setVisibleItems(updatedVisibleItems);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Timeline position="alternate">
      {AboutList.map((item, index) => (
        <TimelineItem
          key={index}
          ref={(el) => {
            refs.current[index] = el as HTMLDivElement;
          }}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          {/* 型アサーションを使用 */}
          <TimelineOppositeContent
            color="text.secondary"
            sx={{ flexDirection: "row" }}
          >
            <Typography variant="body2">{item.date}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                width: "10px",
                height: "10px",
                "@media(max-width:600px)": {},
              }}
            />
            {index < AboutList.length - 1}
          </TimelineSeparator>
          <TimelineContent>
            <Card
              style={{
                ...cardStyle,
                opacity: visibleItems[index] ? 1 : 0, // ビジュアルアイテムの可視性
                transform: visibleItems[index]
                  ? "translateY(0)"
                  : "translateY(20px)", // アニメーション
              }}
            >
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
