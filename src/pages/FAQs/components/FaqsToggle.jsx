import React from "react";
import BREAKPOINTS from "../../../Data/BREAKPOINTS";

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
        onClick={() => index === current ? setCurrent(-1): setCurrent(index)}
        className={
          (current === index ? "bg-red-500" : "bg-gray-500") +
          " p-5 w-72 sm:w-full h-full rounded-lg sm:text-sm"
        }
      >
        {title}
        {question}
      </button>
      <div
        className={
          (index === current && "sm:flex") +
          " w-full h-32 hidden bg-slate-300 -z-10 p-2 flex-col justify-center items-center"
        }
      >
        {answer}
      </div>
    </div>
  );
}
