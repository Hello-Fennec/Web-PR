import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopBtn = ({ pageRefs, scrollToRef, isMobile }) => {
  const animation = {
    hidden: {
      opacity: 0,
    },
    desktop: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 1.2 },
      y: "-50%",
    },
    mobile: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 1.2 },
    },
    exit: {
      opacity: 0,
      scale: 0.0001,
      transition: { ease: "easeInOut" },
    },
    // hover: {
    //   y: "-60%",
    //   transition: {
    //     duration: 0.5,
    //     repeat: Infinity,
    //     repeatType: "reverse",
    //   },
    // },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {true && (
        <motion.button
          variants={animation}
          initial={"hidden"}
          animate={isMobile ? "mobile" : "desktop"}
          exit={"exit"}
          whileHover={"hover"}
          onClick={() => {
            scrollToRef(pageRefs[0]);
          }}
          className={
            (isMobile ? "bottom-0" : "top-1/2") +
            " right-0 mb-10 mr-10 md:mb-5 md:mr-5 sm:mb-3 sm:mr-3 fixed h-20 w-20 md:h-16 md:w-16 sm:h-14 sm:w-14 p-2 bg-black rounded-full text-white "
          }
        >
          <IoIosArrowUp size={40} className="w-full" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopBtn;
