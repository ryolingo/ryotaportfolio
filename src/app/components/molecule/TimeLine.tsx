import AboutList from "@/app/data/AboutList";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";
import { Card, Typography, useMediaQuery } from "@mui/material";
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
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  // メディアクエリで600px以下の画面サイズをモバイルと判定
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const handleScroll = () => {
      const updatedVisibleItems = AboutList.map((_, index) => {
        const ref = refs.current[index];
        return ref && ref.getBoundingClientRect().top < window.innerHeight;
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
    <Timeline
      position={isMobile ? "right" : "alternate"} // モバイル時に position を right に変更
      sx={{
        "@media(max-width:600px)": {
          "& .MuiTimelineItem-root": {
            flexDirection: "column", // モバイル時は要素を縦並びに変更
            alignItems: "flex-start", // カードを左寄せ
          },
        },
      }}
    >
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
          {/* タイムラインオポジットコンテンツ（日付） */}
          <TimelineOppositeContent
            color="text.secondary"
            sx={{
              flexDirection: "row",
              padding: isMobile ? "0 8px" : "0 16px", // モバイル時に余白を調整
              order: isMobile ? 2 : 0, // モバイル時は order を使って subtitle の後に表示
            }}
          >
            <Typography variant="body2">{item.date}</Typography>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot sx={{ width: "10px", height: "10px" }} />
            {index < AboutList.length - 1}
          </TimelineSeparator>

          {/* タイムラインコンテンツ（タイトルとサブタイトル） */}
          <TimelineContent
            sx={{
              padding: isMobile ? "0" : "0 16px", // モバイル時は余白をなくす
              width: "100%", // カードを広げる
            }}
          >
            <Card
              style={{
                ...cardStyle,
                opacity: visibleItems[index] ? 1 : 0,
                transform: visibleItems[index]
                  ? "translateY(0)"
                  : "translateY(20px)",
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
