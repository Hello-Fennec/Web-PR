import BottomFixedLayout from "./layout/BottomFixedLayout";
import Navbar from "./layout/Navbar";
import ReactFullpage from "@fullpage/react-fullpage";
import PAGES from "./constants/PAGES";
import PageContainer from "./components/PageContainer";
import ScrollToTopBtn from "./components/ScrollToTopBtn";

import { useEffect, useRef, useState } from "react";
import ScrollContainer from "./components/ScrollContainer";

function App() {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 0); // check if the device is mobile

  const [pageOnScreen, setPageOnScreen] = useState(0); // 0 = home, 1 = about, 2 = teams, 3 = faqs, 4 = game
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const teamsRef = useRef(null);
  const eventsRef = useRef(null);
  const faqsRef = useRef(null);
  const gameRef = useRef(null);

  const pageRefs = [homeRef, aboutRef, teamsRef, eventsRef, faqsRef, gameRef];
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  // When page is loaded
  useEffect(() => {
    const watermarks = document.querySelectorAll(".fp-watermark");
    watermarks.forEach((watermark) => {
      watermark.style.display = "none";
    }); // hide watermarks
    function parallax(e) {
      document.querySelectorAll(".mousemove").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }
    document.addEventListener("mousemove", parallax);
  }, []);

  return (
    <div className="App">
      <ScrollContainer isMobile={isMobile} scrollIntertia={70}>
        {PAGES.map((page, index) => {
          return (
            <PageContainer
              // src={page.background}
              className="section"
              key={index}
              ref={pageRefs[index]}
            >
              <div className="flex flex-col justify-center items-center text-center ">
                <div className="w-full h-full">{page.component}</div>
              </div>
            </PageContainer>
          );
        })}
      </ScrollContainer>
      <BottomFixedLayout isMobile={isMobile} />
      <Navbar
        // pageOnScreen={pageOnScreen}
        pageRefs={pageRefs}
        scrollToRef={scrollToRef}
      />
      {/* <ScrollToTopBtn
        // pageOnScreen={pageOnScreen}
        pageRefs={pageRefs}
        scrollToRef={scrollToRef}
        isMobile={isMobile}
      /> */}
    </div>
  );
}
export default App;
