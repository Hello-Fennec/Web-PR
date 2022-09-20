import useWindowDimensions from "../hooks/useWindowDimensions";

import BREAKPOINTS from "../constants/BREAKPOINTS";
import PAGES from "../constants/PAGES";
import styled from "styled-components";
import SITKMUTT_Tag from "../assets/images/SITKMUTT_Tag.png";
import { AnimatePresence, motion } from "framer-motion";
import HelloFennecTag from "../assets/images/HelloFennec-logo_shadowed.png";
import ImgContainer from "../components/ImgContainer";
import NavStone from "../assets/images/NavStone.png";

const Navbar = ({ pageRefs, scrollToRef, pageOnScreen }) => {
  const { width } = useWindowDimensions();
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 0); // check if the device is mobile

  const toggleMobileNav = () => {
    const mobileNavbar = document.getElementById("mobileNav");
    const bars = document.querySelectorAll(".bar");
    const navBackground = document.getElementById("navBackground");

    mobileNavbar.classList.toggle("on");
    navBackground.classList.toggle("on");
    bars.forEach((bar) => {
      bar.classList.toggle("on");
    });
  };

  // const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  const MobileNavbar = () => {
    return (
      <MobileNav>
        <div
          id="mobileNav"
          className="-translate-y-full z-50 opacity-0  transition-all duration-500 ease-in-out w-full trans fixed top-0 left-0 rounded-b-3xl backdrop-blur-md bg-white/50  p-5 shadow-sm shadow-white/30"
        >
          <ul className="flex mt-6 mb-12 flex-col space-y-12 ">
            {PAGES.map((page, index) => {
              return (
                <li className="flex justify-center items-center" key={index}>
                  <button
                    onClick={() => {
                      scrollToRef(pageRefs[index]);
                      toggleMobileNav();
                    }}
                    className={
                      (pageOnScreen === index
                        ? "text-[#df963a] "
                        : "text-black") +
                      ` hover:text-[${
                        !isMobile && "#a15d00"
                      }] md:hover:text-black text-xl  duration-200`
                    }
                  >
                    {page.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          className="flex flex-col fixed top-0 right-0 z-[51] pt-3 pr-6  justify-center items-center"
          onClick={toggleMobileNav}
        >
          <NavBurger>
            <Bar id="bar1" className="bar" />
            <Bar id="bar2" className="bar" />
            <Bar id="bar3" className="bar" />
          </NavBurger>
        </button>
        <button
          onClick={toggleMobileNav}
          id="navBackground"
          className="bg-black opacity-0 w-full h-full fixed top-0 left-0  duration-500 ease-in-out hidden"
        />
      </MobileNav>
    );
  };

  const DesktopNavbar = () => {
    return (
      <nav
        id="desktop-nav"
        className="fixed top-0 duration-500 opacity-1 p-3 pr-5 right-0 items-start z-50 2xl:scale-125 origin-top-right "
      >
        <div className="block">
          <ul className="flex mt-4 flex-row space-x-4 md:space-x-4 md:mt-3 md:text-xs md:font-medium">
            {PAGES.map((page, index) => {
              return (
                index !== 0 && (
                  <li className="flex items-center" key={index}>
                    <button
                      onClick={() => {
                        scrollToRef(pageRefs[index]);
                      }}
                      className={
                        (pageOnScreen === index
                          ? "text-[#df963a] "
                          : pageOnScreen === 4
                          ? "text-white"
                          : "text-black") +
                        " hover:text-[#a15d00] md:hover:text-black text-xl font-bold duration-200"
                      }
                    >
                      <h1 className="drop-shadow-md">{page.name}</h1>

                      <ImgContainer
                        src={NavStone}
                        className={
                          (pageOnScreen === index && `opacity-100`) +
                          ` w-20 h-6 md:w-16 opacity-0 m-auto`
                        }
                      />
                    </button>
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </nav>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      id="myMenu"
    >
      {width < BREAKPOINTS.mobile ? <MobileNavbar /> : <DesktopNavbar />}

      <AnimatePresence exitBeforeEnter>
        {pageOnScreen === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <Tag
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.sit.kmutt.ac.th/", "_blank");
              }}
              id="SITTag"
              src={SITKMUTT_Tag}
              size={"contain"}
              color="white"
              className="w-56 h-[4.5rem] md:w-44 md:h-16 rounded-b-3xl md:rounded-b-2xl sm:rounded-b-xl left-10 md:left-5 shadow-md hover:-translate-y-1 2xl:scale-150 origin-top-left"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence exitBeforeEnter>
        {pageOnScreen !== 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <Tag
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              src={HelloFennecTag}
              id="SITTag"
              size={"60%"}
              className="w-72 h-20 md:w-56 md:h-16 sm:w-44 sm:h-12 left-10 md:left-5 2xl:scale-150 origin-top-left"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Tag = styled.button`
  background-color: ${(props) => props.color};
  opacity: 1;
  position: fixed;
  top: 0;
  transition: all 0.2s ease-in-out;
  z-index: 49;
  text-shadow: 0 0 20px #000000;

  background-image: url(${(props) => props.src});
  background-size: ${(props) => props.size};
  background-position: left center;
  background-repeat: no-repeat;
`;

const Bar = styled.div`
  height: 0.25rem;
  width: 1.5rem;
  margin: 0.25rem 0;
  border-radius: 9999px;
  background-color: #303030;
  transition: all 0.1s ease-in-out;

  -webkit-transition: 0.1s;
  -moz-transition: 0.1s;
  -o-transition: 0.1s;
`;

const NavBurger = styled.div`
  #bar1.on {
    transform: translateY(0.5rem) rotate(45deg);
  }

  #bar2.on {
    opacity: 0;
  }

  #bar3.on {
    transform: translateY(-0.5rem) rotate(-45deg);
  }
`;

const MobileNav = styled.div`
  #mobileNav.on {
    transform: translateY(0%);
    opacity: 1;
  }

  #navBackground.on {
    display: block;
  }
`;

export default Navbar;
