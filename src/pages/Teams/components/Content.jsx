import React from "react";
import TEAMS from "../../../constants/TEAMS";
import ImgContainer from "../../../components/ImgContainer";
import Floating from "../../../components/Floating";
import { motion } from "framer-motion";

export default function Content({ selectedTeam }) {

  const DesktopContents = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.1 } }}
        className="flex justify-center items-center mb-5 lg:flex-col lg:space-x-0 lg:space-y-5
        sm:left-3 sm:w-[70vw] sm:absolute duration-500 m-auto "
      >
        <div className="hidden text-4xl font-bold lg:block mb-10 sm:mb-0 sm:text-3xl text-[#a15d00]">
          {TEAMS[selectedTeam].name}
        </div>
        <Floating>
          <ImgContainer
            src={TEAMS[selectedTeam].image}
            className="h-80 w-80 rounded-xl sm:h-64 sm:w-64 mr-5 2xl:scale-125 origin-bottom-right"
          />
        </Floating>
        <div className="h-80 w-[55%] max-w-5xl flex flex-col lg:h-36 lg:w-96 sm:w-full 2xl:scale-125 origin-bottom-left">
          <div className="lg:hidden h-1/4 w-full text-4xl text-left font-bold text-[#a15d00]">
            {TEAMS[selectedTeam].name}
          </div>
          <div className="h-full w-full bg-[#ffffff50] px-7 py-5 rounded-2xl text-left lg:h-auto lg:text-center text-lg sm:text-sm ">
            {TEAMS[selectedTeam].description}
          </div>
        </div>
      </motion.div>
    );
  };

  return <DesktopContents />;
}
