import React from "react";
import { motion } from "framer-motion";

const LinkBtn = ({ img, link, bgcolor }) => {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          console.log("GH");
          e.stopPropagation();
          window.open(link);
        }}
        className={(bgcolor || "bg-slate-400") + " rounded-full w-8 h-8"}
      >
        {img}
      </motion.button>
    </>
  );
};

const Card = ({ groupNum, name, link, img, github, figma }) => {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          console.log("Project");
          window.open(link);
        }}
        className="w-full h-52 bg-blue-300 rounded-3xl flex"
      >
        <div className="w-full bg-white opacity-80 rounded-b-3xl place-self-end flex items-center justify-between pt-2 pb-4 px-3">
          <div className="w-full flex-col">
            <div className="text-xs w-full text-left mb-1">
              Group {groupNum}
            </div>
            <div className="flex flex-row justify-between">
              <div className="font-bold text-left leading-5">{name}</div>
              <div className="flex space-x-2">
                <LinkBtn img={img} link={github} bgcolor={"bg-black"} />
                <LinkBtn img={img} link={figma} />
              </div>
            </div>
          </div>
        </div>
      </motion.button>
    </>
  );
};

export default Card;
