import BottomFixedLayout from "./components/BottomFixedLayout";
import Navbar from "./components/Navbar";

import Home from "./pages/Home/Home";

import "./App.css";
import { useEffect } from "react";

function App() {
  document.title = "Helloworld 2022";
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 0);

  useEffect(() => {
    const scrollLabel = document.getElementsByClassName("ScrollDown");
    const bottomFixedLayout = document.getElementById("bottomFixedLayout");
    const sitTag = document.getElementById("SITTag");
    const desktopNav = document.getElementById("desktop-nav");

    setTimeout(() => {
      sitTag.style.opacity = 1;
      sitTag.style.top = 0;
      desktopNav.style.opacity = 1;

      setTimeout(() => {
        bottomFixedLayout.style.opacity = 1;
        bottomFixedLayout.style.bottom = 0;
      }, 500);

      setTimeout(() => {
        scrollLabel[0].style.opacity = 1;
      }, 1300);

    }, 1500);

    return () => {};
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <BottomFixedLayout isMobile={isMobile} />
    </div>
  );
}

export default App;
