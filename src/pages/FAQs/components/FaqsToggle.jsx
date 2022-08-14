import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import BREAKPOINTS from "../../../constants/BREAKPOINTS";

export default function FaqsToggle({
  current,
  setCurrent,
  index,
  title,
  question,
  answer,
}) {
  const { width } = useWindowDimensions();
  return (
    <motion.div
      className="flex sm:w-11/12 flex-col items-center"
      exit={{ opacity: 0 }}
    >
      <button
        onClick={() => (index === current ? setCurrent(-1) : setCurrent(index))}
        className={
          (current === index ? "bg-red-500 sm:mb-0" : "bg-gray-500") +
          " p-5 w-72 md:w-52 sm:w-full h-full rounded-lg sm:text-sm mb-2  hover:md:-translate-y-0 hover:-translate-y-1 duration-200 transition-all"
        }
      >
        {title}
        {question}
      </button>
      {index === current && width < BREAKPOINTS.mobile && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "8rem" }}
          exit={{ height: 0 }}
          key={index}
          id="ansContainer"
          className="sm:block hidden w-full p-2 bg-slate-300 mb-2 duration-300"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative h-full flex justify-center items-center "
          >
            {answer}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
