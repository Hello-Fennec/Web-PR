import React from "react";
import { motion } from "framer-motion";

export default function FilterBadge({ team, cardFilter, setCardFilter }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => {
        //filter
        cardFilter.includes(team.name)
          ? setCardFilter(cardFilter.filter((item) => item !== team.name))
          : setCardFilter([...cardFilter, team.name]);
      }}
      style={{
        // cancel out the default button style
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          backgroundColor:
            cardFilter.length === 0
              ? "gray"
              : cardFilter.includes(team.name)
              ? team.color
              : "gray",
        }}
        className=" text-white drop-shadow-md py-[5px] px-4 text-sm rounded-full whitespace-nowrap mr-2 mb-2 mt-1"
      >
        {team.name}
      </div>
    </motion.button>
  );
}
