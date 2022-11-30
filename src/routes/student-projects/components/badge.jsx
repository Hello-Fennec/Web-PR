import React from "react";

export default function Badge({ name, color }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className=" text-white py-[2px] px-2 text-xs rounded-full whitespace-nowrap mr-1 mt-1"
    >
      {name}
    </div>
  );
}
