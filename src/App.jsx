import BottomFixedLayout from "./layout/BottomFixedLayout";
import Navbar from "./layout/Navbar";
import PAGES from "./constants/PAGES";
import PageContainer from "./components/PageContainer";
import ScrollToTopBtn from "./components/ScrollToTopBtn";

import { useEffect, useState } from "react";
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
    function mousemoveParallax(e) {
      document.querySelectorAll(".mousemove").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${
          y > -100 ? y : -100
        }px)`;
      });
    }
    function scrollParallax(e) {
      document.querySelectorAll(".scroll").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const value = window.scrollY * speed;
        // const matrix = window
        //   .getComputedStyle(layer)
        //   .transform.match(/matrix.*\((.+)\)/)[1]
        //   .split(", ");
        // const x = parseFloat(matrix[4]);
        // const y = parseFloat(matrix[5]);

        layer.style.transform = `translateY(${value}px)`;
        // layer.style.transform = `translateX(${x}px)`;
      });
    }
    function currentPageInView(e) {
      pageRefs.forEach((pageRef, index) => {
        if (scrollY >= pageRef.current.offsetTop) {
          setPageOnScreen(index);
        }
      });
    }
    !isMobile && document.addEventListener("mousemove", mousemoveParallax);
    // {!isMobile && }
    document.addEventListener("scroll", currentPageInView);
    document.addEventListener("scroll", scrollParallax);
  }, []);

  return (
    <div className="App">
      <ScrollContainer isMobile={isMobile} scrollIntertia={50}>
        {PAGES.map((page, index) => {
          return (
            <>
              <PageContainer
                // src={page.background}
                style={{ background: index % 2 == 0 ? "" : "#F2E2BB" }}
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
      </ScrollContainer>
      <BottomFixedLayout />
      <Navbar
        pageRefs={pageRefs}
        scrollToRef={scrollToRef}
        pageOnScreen={pageOnScreen}
      />
    </div>
  );
}
export default App;
