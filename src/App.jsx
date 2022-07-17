import BottomFixedLayout from "./layout/BottomFixedLayout";
import Navbar from "./layout/Navbar";
import ReactFullpage from "@fullpage/react-fullpage";
import { useEffect, useState } from "react";

import PAGES from "./Data/PAGES";
import Background from "./components/Background";

function App() {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 0); // check if the device is mobile

  const [pageOnScreen, setPageOnScreen] = useState(0); // 0 = home, 1 = about, 2 = teams, 3 = faqs, 4 = game

  // When page is loaded
  useEffect(() => {
    document.title = "Helloworld 2022"; // set title of the page

    const bottomFixedLayout = document.getElementById("bottomFixedLayout");
    setTimeout(() => {
      bottomFixedLayout.style.opacity = 1;
    }, 1200); // set opacity of the bottom fixed layout

    return () => {};
  }, []);

  

  return (
    <div className="App">
      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        onLeave={(origin, destination) => {
          setPageOnScreen(destination.index);
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {PAGES.map((page, index) => {
                return (
                  <Background
                    src={page.background}
                    className="section"
                    key={index}
                  >
                    {/* <div className="-z-0 absolute top-0 w-full h-10 bg-gradient-to-b from-black to-transparent" /> */}
                    <div className="flex flex-col justify-center items-center text-center ">
                      <div className="w-full h-full"><page.component pageIndex={index} pageOnScreen={pageOnScreen}/></div>
                      {/* render the page */}
                    </div>
                    {/* <div className="-z-0 absolute bottom-0 w-full h-10 bg-gradient-to-t from-black to-transparent" /> */}
                  </Background>
                );
              })}
            </ReactFullpage.Wrapper> // fullpage wrapper
          );
        }}
      />{" "}
      // fullpage react component
      <BottomFixedLayout isMobile={isMobile} /> // render the bottom fixed
      layout
      <Navbar pageOnScreen={pageOnScreen} /> // render the navbar
    </div>
  );
}
export default App;
