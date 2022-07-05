import useWindowDimensions from "../hooks/useWindowDimensions";

import BREAKPOINTS from "../constants/BREAKPOINTS";
import PAGES from "../constants/PAGES";
import { useState,useEffect } from "react";
import styled from "styled-components";
import SITKMUTT_Tag from "../assets/images/SITKMUTT_Tag.png";

const Navbar = ({ pageOnScreen }) => {
  const { height, width } = useWindowDimensions();
  const [navToggle, setNavToggle] = useState(false);
  const toggleNav = () => {
    setNavToggle(!navToggle);
  };

  useEffect(() => {
    const mobileNavbar = document.getElementById("mobileNav");
    const bars = document.querySelectorAll(".bar");

    if (mobileNavbar===null) return;
    if (!navToggle) {
      mobileNavbar.classList.toggle("off");
      bars.forEach((bar) => {
        bar.classList.toggle("off");
      });
      window.fullpage_api.setAllowScrolling(true);
    } else {
      mobileNavbar.classList.toggle("on");
      bars.forEach((bar) => {
        bar.classList.toggle("on");
      });
      window.fullpage_api.setAllowScrolling(false);
    }
  }, [navToggle]);

  // const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  const MobileNavbar = () => {
    return (
      <MobileNav className="w-full ">
        <div
          id="mobileNav"
          className="-translate-y-full opacity-0 hidden transition-all duration-200 ease-in-out w-full trans fixed top-0 left-0 rounded-b-3xl backdrop-blur-md bg-white/20  z-10 p-5 shadow-sm shadow-white/30"
        >
          <ul className="flex mt-6 mb-12 flex-col space-y-12 ">
            {PAGES.map((page, index) => {
              return (
                <li className="flex justify-center items-center" key={index}>
                  <button
                    onClick={() => {
                      window.fullpage_api.moveTo(index + 1);
                      toggleNav();
                    }}
                    className={
                      (pageOnScreen == index ? "text-red-500" : "text-black") +
                      " hover:text-gray-500 text-xl font-sans w-2/3"
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
          className="flex flex-col fixed top-0 right-0  pt-3 pr-6 z-20 justify-center items-center"
          onClick={toggleNav}
        >
          <NavBurger>
            <Bar id="bar1" className="bar" />
            <Bar id="bar2" className="bar" />
            <Bar id="bar3" className="bar" />
          </NavBurger>
        </button>
      </MobileNav>
    );
  };

  const DesktopNavbar = () => {
    return (
      <nav
        id="desktop-nav"
        className="fixed top-0 duration-500 opacity-1 p-3 pr-5 container flex justify-between items-start mx-auto  "
      >
        <div></div>
        <div className="block w-auto" id="mobile-menu">
          <ul className="flex mt-4 flex-row space-x-8 md:space-x-4 md:mt-3 md:text-xs md:font-medium">
            {PAGES.map((page, index) => {
              return (
                <li className="flex items-center" key={index}>
                  <button
                    onClick={() => {
                      window.fullpage_api.moveTo(index + 1);
                    }}
                    className={
                      (pageOnScreen == index ? "text-red-500" : "text-black") +
                      " hover:text-gray-500 md:hover:text-black text-xl font-sans"
                    }
                  >
                    {page.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  };

  return (
    <div id="myMenu">
      {width < BREAKPOINTS.mobile ? <MobileNavbar /> : <DesktopNavbar />}
      <SITTag
        href="https://www.sit.kmutt.ac.th/"
        target="blank"
        id="SITTag"
        className="w-72 h-20 md:w-56 md:h-16 sm:w-44 sm:h-12 rounded-b-3xl sm:rounded-b-xl  left-10 md:left-5 shadow-md "
      />
    </div>
  );
};

const SITTag = styled.a`
  background-color: white;
  opacity: 1;
  position: fixed;
  top: 0;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: translateY(-0.25rem);
  }

  background-image: url(${SITKMUTT_Tag});
  background-size: contain;
  background-repeat: no-repeat;
`;
const Bar = styled.div`
  height: 0.25rem;
  width: 1.5rem;
  margin: 0.25rem 0;
  border-radius: 9999px;
  background-color: #303030;
  transition: all 0.3s ease-in-out;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
`;

const NavBurger = styled.div`
  #bar1.on {
    animation: bar1On 0.1s ease-in-out;
    transform: translateY(0.5rem) rotate(45deg);
  }

  #bar2.on {
    opacity: 0;
    animation: bar2On 0.1s ease-in-out;
  }

  #bar3.on {
    transform: translateY(-0.5rem) rotate(-45deg);
    animation: bar3On 0.1s ease-in-out;
  }

  #bar1.off {
    animation: bar1Off 0.1s ease-in-out;
    transform: translateY(0) rotate(0);
  }

  #bar2.off {
    opacity: 1;
    animation: bar2Off 0.1s ease-in-out;
  }

  #bar3.off {
    transform: translateY(0) rotate(0);
    animation: bar3Off 0.1s ease-in-out;
  }

  @keyframes bar1On {
    0% {
      transform: translateY(0) rotate(0);
    }

    100% {
      transform: translateY(0.5rem) rotate(45deg);
    }
  }
  @keyframes bar2On {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes bar3On {
    0% {
      transform: translateY(0) rotate(0);
    }

    100% {
      transform: translateY(-0.5rem) rotate(-45deg);
    }
  }

  @keyframes bar1Off {
    0% {
      transform: translateY(0.5rem) rotate(45deg);
    }

    100% {
      transform: translateY(0) rotate(0);
    }
  }
  @keyframes bar2Off {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes bar3Off {
    0% {
      transform: translateY(-0.5rem) rotate(-45deg);
    }

    100% {
      transform: translateY(0) rotate(0);
    }
  }
`;

const MobileNav = styled.div`
  #mobileNav.on {
    animation: FADEIN 0.4s ease-in-out;
    transform: translateY(0%);
    opacity: 1;
    display: block;
  }

  #mobileNav.off {
    animation: FADEOUT 0.4s ease-in-out;
    transform: translateY(-100%);
  }

  @keyframes FADEIN {
    0% {
      opacity: 0;
      transform: translateY(-50%);
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @keyframes FADEOUT {
    0% {
      opacity: 1;
      transform: translateY(0%);
    }
    70% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      transform: translateY(-50%);
    }
  }
`;

export default Navbar;
