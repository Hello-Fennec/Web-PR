import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDropupCircle } from "react-icons/io";

const ScrollToTopBtn = ({ pageOnScreen, isMobile }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {pageOnScreen == 4 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: "-50%",
            transition: { duration: 0.5, delay: 1 },
          }}
          exit={{ opacity: 0 }}
          whileHover={{
            y: "-35%",
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
            (isMobile ? "bottom-3" : "top-1/2") +
            " right-5 absolute h-auto w-auto bg-white rounded-full"
          }
        >
          <IoIosArrowDropupCircle size={70} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopBtn;
