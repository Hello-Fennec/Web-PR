import BottomFixedLayout from "./layout/BottomFixedLayout";
import Navbar from "./layout/Navbar";
import PAGES from "./constants/PAGES";
import PageContainer from "./components/PageContainer";
// import ScrollToTopBtn from "./components/ScrollToTopBtn";

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

    function currentPageInView(e) {
      pageRefs.forEach((pageRef, index) => {
        if (scrollY >= pageRef.current.offsetTop) {
          setPageOnScreen(index);
        }
      });
    }
    !isMobile && document.addEventListener("mousemove", mousemoveParallax);
    document.addEventListener("scroll", currentPageInView);
  });

  useEffect(() => {
    function scrollParallax(e) {
      document.querySelectorAll(".scroll").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const value = (window.scrollY * speed) / 10;
        layer.style.transform = `translateY(${value}px)`;
      });
    }
    document.addEventListener("scroll", scrollParallax);
    return () => {
      document.removeEventListener("scroll", scrollParallax);
    };
  }, [pageOnScreen]);

  return (
    <div className="App">
      <ScrollContainer isMobile={isMobile} scrollIntertia={50}>
        {PAGES.map((page, index) => {
          return (
            <>
              <PageContainer
                src={page.background}
                position={page.name === "Teams" && "right"}
                className="section"
                key={index}
                ref={pageRefs[index]}
              >
                <div className="flex flex-col justify-center items-center text-center ">
                  <div className="w-full h-full">{page.component}</div>
                </div>
              </PageContainer>
              <div style={page.connector} className="-translate-y-[1px]" />
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
