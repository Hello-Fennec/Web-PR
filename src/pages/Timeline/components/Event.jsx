import React from "react";

export default function Event({ date, month, title, description, isPassed }) {
  return (
    <div className="flex z-10">
      <div
        className={
          (isPassed ? "bg-[#a15d00]" : "bg-gray-600") +
          " w-24 h-24 flex justify-center items-center rounded-full text-white"
        }
      >
        <h1 className="text-2xl">
          <span className="font-bold text-[2rem]">{date}</span>
          <br />
          {month}
        </h1>
      </div>
      <div className="text-start ml-5 my-auto">
        <h1
          className={
            (isPassed ? "text-[#a15d00]" : "text-gray-600") +
            " text-[1.5rem] font-bold"
          }
        >
          {title}
        </h1>
        <p
          className={
            (isPassed ? "text-[#df963a]" : "text-gray-500") +
            " text-2xl "
          }
        >
          {description}
        </p>
      </div>
    </div>
  );
}
