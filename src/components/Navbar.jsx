import useWindowDimensions from "../hooks/useWindowDimensions";

import BREAKPOINTS from "../constants/BREAKPOINTS";
import PAGES from "../constants/PAGES";

const Navbar = () => {
  const { height, width } = useWindowDimensions();

  const SITTag = () => {
    return (
      <a
        href="https://www.sit.kmutt.ac.th/"
        target="blank"
        id="SITTag"
        className="SITTag opacity-0 w-72 h-20 md:w-56 md:h-16 sm:w-44 sm:h-12 sm:rounded-b-xl absolute -top-5 left-10 md:left-5 shadow-md rounded-b-3xl hover:-translate-y-1 duration-200"
      ></a>
    );
  };

  const MobileNavbar = () => {
    return (
      <div className="w-full">
        <section
          id="bottom-navigation"
          className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
        >
          <div id="tabs" className="flex justify-between rounded-t-3xl ">
            {PAGES.map((page, index) => {
              return (
                <a
                  href="#"
                  className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center py-3 "
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 42 42"
                    className="inline-block mb-1"
                  >
                    {page.icon}
                  </svg>
                  <span className="tab tab-home block text-xs">
                    {page.name}
                  </span>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    );
  };

  const DesktopNavbar = () => {
    return (
        <nav id="desktop-nav" className="duration-500 opacity-0 p-3 pr-5 container flex justify-between items-start mx-auto  ">
          <div></div>
          <div className="block w-auto" id="mobile-menu">
            <ul className="flex mt-4 flex-row space-x-8 md:space-x-4 md:mt-3 md:text-xs md:font-medium">
              {PAGES.map((page, index) => {
                return (
                  <li className="flex items-center" key={page.index}>
                    <a
                      href="#"
                      className="text-black hover:text-gray-500 text-xl font-sans"
                    >
                      {page.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
    );
  };

  return (
    <>
      <SITTag />
      {width < BREAKPOINTS.mobile ? <MobileNavbar /> : <DesktopNavbar />}
    </>
  );
};

export default Navbar;
