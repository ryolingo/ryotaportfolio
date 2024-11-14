"use client";

import { motion } from "framer-motion";

export default function IntroAnimation() {
  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000", // 背景色を黒に設定
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          position: "relative",
          fontSize: "3rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "#fff",
          textShadow: "0 0 10px rgba(255, 255, 255, 0.7)",
          zIndex: 1,
        }}
      >
        Welcome To My Portfolio
      </motion.div>

      {/* Background Sparkles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(30px)",
          zIndex: 0,
        }}
      />
    </div>
  );
}
