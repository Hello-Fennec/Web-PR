import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopBtn = ({ pageOnScreen, isMobile }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {pageOnScreen == 4 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, delay: 1.2 },
            y: "-50%",
          }}
          exit={{ opacity: 0 }}
          whileHover={{
            y: "-60%",
            transition: {
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          onClick={() => {
            window.fullpage_api.moveTo(1);
          }}
          className={
            (isMobile ? "bottom-0" : "top-1/2") +
            " right-0 mb-10 mr-10 md:mb-5 md:mr-5 sm:mb-3 sm:mr-3 absolute h-20 w-20 md:h-16 md:w-16 sm:h-14 sm:w-14 p-2 bg-black rounded-full text-white "
          }
        >
          <IoIosArrowUp size={40} className="w-full" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopBtn;
