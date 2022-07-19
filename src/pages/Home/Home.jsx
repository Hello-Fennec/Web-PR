import { useEffect } from "react";
import ScrollLabel from "./components/ScrollLabel";
import Logo from "./components/Logo";
import PageAnimation from "../../components/PageAnimation";

function Home() {
  return (
    <>
      <PageAnimation>
        <Logo />
      </PageAnimation>
      <ScrollLabel />
    </>
  );
}

export default Home;
