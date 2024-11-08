"use client";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import Introduction from "./components/organisms/Introduction";
import TabPanel from "./components/molecule/TabPanel";
import { useEffect, useState } from "react";
import IntroAnimation from "./components/molecule/Animation";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro ? (
        <IntroAnimation />
      ) : (
        <>
          <Header />
          <Introduction />
          <TabPanel />
          <Footer />
        </>
      )}
    </>
  );
}
