import React from "react";

export default function FaqsToggle({ current, setCurrent, index, title }) {
  return (
    <button
      onClick={() => setCurrent(index)}
      className={
        (current === index ? "bg-red-500" : "bg-gray-500") +
        " p-5 w-72 h-full rounded-lg"
      }
    >
      {title}
    </button>
  );
}
