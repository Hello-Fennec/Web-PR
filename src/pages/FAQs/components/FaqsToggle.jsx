import React from "react";

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
          " p-5 w-72 sm:w-full h-full rounded-lg sm:text-sm mb-2"
        }
      >
        {title}
        {question}
      </button>
      <div
        id="ansContainer"
        className={
          (index === current ? "sm:flex " : "") +
          " h-32 w-full hidden opacity-1 bg-slate-300 -z-10 p-2 flex-col justify-center items-center mb-2 duration-300"
        }
      >
        {answer}
      </div>
    </div>
  );
}
