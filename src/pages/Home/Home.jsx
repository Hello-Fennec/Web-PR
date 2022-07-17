import { useEffect } from "react";
import ScrollLabel from "./components/ScrollLabel";
import Logo from "./components/Logo";
import PageAnimation from "../../components/PageAnimation";

function Home() {
  // When page is loaded
  useEffect(() => {
    const scrollLabel = document.getElementsByClassName("ScrollDown");

    setTimeout(() => {
      scrollLabel[0].style.opacity = 1;
    }, 2000); // set opacity of the scroll down label
  }, []);

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
