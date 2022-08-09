import React from "react";

const Timeline = () => {
  const date = new Date();
  const formattedDate = date.toDateString();

  return (
    <div
      className={formattedDate.includes("Aug 09 2022") && "text-red-500" }
    >
      {formattedDate}
    </div>
  );
};

export default Timeline;
