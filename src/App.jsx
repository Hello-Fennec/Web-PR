// components
import BottomFixedLayout from "./components/BottomFixedLayout";
import Navbar from "./components/Navbar";
// pages
import Home from "./pages/Home/Home";
// css
import "./App.css";
// libs
import ReactFullpage from "@fullpage/react-fullpage";
// hooks
import { useEffect } from "react";

import PAGES from "./constants/PAGES";
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
    const desktopNav = document.getElementById("desktop-nav");
    // const sitTag = document.getElementById("SITTag");

    setTimeout(() => {
      desktopNav == null ? null : (desktopNav.style.opacity = 1);
      // sitTag.style.opacity = 1;
      // sitTag.style.top = 0;

      setTimeout(() => {
        bottomFixedLayout.style.opacity = 1;
        //   bottomFixedLayout.style.bottom = 0;
      }, 500);

      setTimeout(() => {
        scrollLabel[0].style.opacity = 1;
      }, 1300);
    }, 700);

    // fullpage.js init

    return () => {};
  }, []);

  useEffect(() => {
    // 'fullpage_api' is not defined.
    // It works in codesandbox but my vscode.
    fullpage_api.setAllowScrolling(false);

    // It works both in codesandbox and my vscode.
    window.fullpage_api.setAllowScrolling(false);
  }, []);

  return (
    <div className="App">
      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        // anchors={PAGES.map((page) => page.name)}

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {PAGES.map((page, index) => {
                return (
                  <div className="section" key={index}>
                    <div className="flex flex-col justify-center items-center text-center">
                      <div className="w-full">
                        <button onClick={() => fullpageApi.moveSectionUp()}>
                          Move Up
                        </button>
                        <h1>{page.name}</h1>
                        <button
                          onClick={() => {
                            fullpageApi.moveTo(index + 2);
                          }}
                        >
                          Move Down
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <Home />
      <Navbar />
      <BottomFixedLayout isMobile={isMobile} />
    </div>
  );
}
export default App;
