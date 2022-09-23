import React from "react";
import TEAMS from "../../../constants/TEAMS";
import ImgContainer from "../../../components/ImgContainer";
import Floating from "../../../components/Floating";
import { motion } from "framer-motion";

export default function Content({ selectedTeam }) {
  const Contents = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.1 } }}
        className="flex justify-center items-center mb-5 lg:flex-col lg:space-x-0 lg:space-y-5
          duration-500 m-auto "
      >
        <div className="hidden text-4xl font-bold lg:block  sm:mb-0 sm:text-3xl text-[#a15d00]">
          {TEAMS[selectedTeam].name}
        </div>
        <Floating>
          <ImgContainer
            src={TEAMS[selectedTeam].image}
            className="h-80 w-80 rounded-xl md:mt-10 sm:mr-0 sm:h-[13rem] sm:w-[13rem]  mr-5 2xl:scale-110 origin-bottom-right"
          />
        </Floating>
        <div className="h-80 w-[55%] max-w-5xl flex flex-col lg:h-36 lg:w-[70%] md:w-[95%] sm:max-w-[30rem] 2xl:scale-125 origin-bottom-left">
          <div className="lg:hidden h-1/4 w-full text-4xl text-left font-bold text-[#a15d00] ">
            {TEAMS[selectedTeam].name}
          </div>
          <div
            className="h-full w-full bg-[#ffffff50] lg:mt-10 px-7 py-5 rounded-2xl text-left text-lg 
          lg:h-auto lg:text-center lg:px-5 lg:py-8
          sm:text-sm sm:px-4 sm:py-6 sm:rounded-md"
          >
            {TEAMS[selectedTeam].description}
          </div>
        </div>
      </motion.div>
    );
  };

  return <Contents />;
}
