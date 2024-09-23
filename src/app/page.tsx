import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import Introduction from "./components/organisms/Introduction";
import TabPanel from "./components/molecule/TabPanel";
import { Timeline } from "@mui/icons-material";

export default function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <TabPanel />
      <Footer />
    </>
  );
}
