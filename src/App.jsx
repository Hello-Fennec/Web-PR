import BottomFixedLayout from "./components/BottomFixedLayout";
import Navbar from "./components/Navbar";
import ScrollLabel from "./pages/Home/components/ScrollLabel";

import "./App.css";
import { useEffect } from "react";
import Home from "./pages/Home/Home";

function App() {
  document.title = "Helloworld 2022";
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 0);

  useEffect(() => {
    const scrollLabel = document.getElementsByClassName("ScrollDown");
    setTimeout(() => {
      scrollLabel[0].style.opacity = 1;
    }, 2000);
    return () => {};
  }, []);


  return (
    <div className="App">
      <Navbar />
      <Home/>
      <BottomFixedLayout />
    </div>
  );
}

export default App;
