import BottomFixedLayout from "./layout/BottomFixedLayout";
import Navbar from "./layout/Navbar";
import PAGES from "./constants/PAGES";
import PageContainer from "./components/PageContainer";
import ScrollToTopBtn from "./components/ScrollToTopBtn";

import { useEffect, useMemo, useRef, useState } from "react";
import ScrollContainer from "./components/ScrollContainer";
import ref from "./constants/REFS";

function App() {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 0); // check if the device is mobile

  const { pageRefs } = ref();
  const [pageOnScreen, setPageOnScreen] = useState(0);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  useEffect(() => {
    function parallax(e) {
      document.querySelectorAll(".mousemove").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }
    function currentPageInView(e) {
      pageRefs.forEach((pageRef, index) => {
        if (scrollY >= pageRef.current.offsetTop) {
          setPageOnScreen(index);
        }
      });
    }
    document.addEventListener("mousemove", parallax);
    !isMobile && document.addEventListener("scroll", currentPageInView);
  }, []);

  return (
    <div className="App">
      <ScrollContainer isMobile={isMobile} scrollIntertia={50}>
        {PAGES.map((page, index) => {
          return (
            <>
              <PageContainer
                // src={page.background}
                style={{ background: index % 2 == 0 ? "white" : "#d8d8d8" }}
                className="section"
                key={index}
                ref={pageRefs[index]}
              >
                <div className="flex flex-col justify-center items-center text-center ">
                  <div className="w-full h-full">{page.component}</div>
                </div>
              </PageContainer>
              <div style={page.connector} />
            </>
          );
        })}
        {/* <PageContainer
          // src={page.background}
          style={{ background: 0 % 2 == 0 ? "white" : "#d8d8d8" }}
          className="section"
          ref={pageRefs[0]}
        >
          <div className="flex flex-col justify-center items-center text-center ">
            <div className="w-full h-full">{PAGES[0].component}</div>
          </div>
        </PageContainer> */}
      </ScrollContainer>
      <BottomFixedLayout />
      <Navbar
        pageRefs={pageRefs}
        scrollToRef={scrollToRef}
        pageOnScreen={pageOnScreen}
      />
      {/* <ScrollToTopBtn
        pageInViews={pageInViews}
        pageRefs={pageRefs}
        scrollToRef={scrollToRef}
        isMobile={isMobile}
      /> */}
    </div>
  );
}
export default App;
