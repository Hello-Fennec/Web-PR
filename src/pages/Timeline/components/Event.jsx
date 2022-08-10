import React from "react";

export default function Event({ date, month, title, description, isPassed }) {
  return (
    <div className="flex">
      <div
        className={
          (isPassed ? "bg-red-500" : "bg-gray-500") +
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
        <h1 className="text-[1.7rem] font-bold">{title}</h1>
        <p className="text-2xl text-gray-500">{description}</p>
      </div>
    </div>
  );
}
