import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FaqsToggle({
  current,
  setCurrent,
  index,
  title,
  question,
  answer,
}) {
  return (
    <div className=" flex sm:w-11/12 flex-col items-center">
      <button
        onClick={() => (index === current ? setCurrent(-1) : setCurrent(index))}
        className={
          (current === index ? "bg-red-500 sm:mb-0" : "bg-gray-500") +
          " p-5 w-72 sm:w-full h-full rounded-lg sm:text-sm mb-2 z-10 hover:-translate-y-1 duration-200 transition-all"
        }
      >
        {title}
        {question}
      </button>
        {index === current && (
          <div
            id="ansContainer"
            className="sm:flex w-full h-32 hidden bg-slate-300 p-2 flex-col justify-center items-center mb-2 duration-300"
          >
            {answer}
          </div>
        )}
    </div>
  );
}
