import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

import Introduction from "./components/organisms/Introduction";
import Tabpanel from "./components/organisms/Tabpanel";

export default function Home() {
  return (
    <>
      <Header />

      <Introduction />
      <Tabpanel />
      <Footer />
    </>
  );
}
