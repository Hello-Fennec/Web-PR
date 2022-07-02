import useWindowDimensions from "../hooks/useWindowDimensions";

import BREAKPOINTS from "../constants/BREAKPOINTS";
import PAGES from "../constants/PAGES";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";

const Navbar = ({ pageOnScreen }) => {
  const { height, width } = useWindowDimensions();
  const [navToggle, setNavToggle] = useState(false);
  const toggleNav = () => {
    setNavToggle(!navToggle);
  };

  useEffect(() => {
    console.log(navToggle);
  }, [navToggle]);

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  const SITTag = () => {
    return (
      <a
        href="https://www.sit.kmutt.ac.th/"
        target="blank"
        id="SITTag"
        className="SITTag bg-white opacity-1 w-72 h-20 md:w-56 md:h-16 sm:w-44 sm:h-12 sm:rounded-b-xl fixed top-0 left-10 md:left-5 shadow-md rounded-b-3xl hover:-translate-y-1 duration-200"
      ></a>
    );
  };

  const MobileNavbar = () => {
    return (
      <div className="w-full">
        <div
          className={
            `${navToggle ? "block" : "hidden"}` +
            " w-full fixed top-0 left-0 rounded-b-3xl backdrop-blur-md bg-white/20 opacity-90 z-10 p-5 shadow-sm shadow-white/30"
          }
        >
          <ul className="flex mt-6 mb-12 flex-col space-y-12">
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
                      " hover:text-gray-500 text-xl font-sans"
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
          className="flex flex-col fixed top-0 right-0  pt-3 pr-6 z-20 justify-center items-center group"
          onClick={toggleNav}
        >
          <div
            className={`${genericHamburgerLine} ${
              navToggle
                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              navToggle ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              navToggle
                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </button>
      </div>
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
                      " hover:text-gray-500 text-xl font-sans"
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
      <SITTag />
    </div>
  );
};

export default Navbar;
