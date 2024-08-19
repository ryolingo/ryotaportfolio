import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <p>こんにちは</p>
      </main>
      <Box>
        <Footer />
      </Box>
    </>
  );
}
