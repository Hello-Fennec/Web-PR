import React from "react";
import ImgContainer from "../../../components/ImgContainer";
import TEAMS from "../../../constants/TEAMS";
import { motion } from "framer-motion";

export default function TeamSelector({ selectedTeam, setselectedTeam }) {
  const Selector = ({ index }) => (
    <button
      onClick={() => {
        setselectedTeam(index);
      }}
      className={
        (selectedTeam !== index && "grayscale") +
        " w-24 h-24 sm:w-16 sm:h-16 bg-[#F2E2BB] cursor-pointer rounded-xl shadow-xl hover:-translate-y-1 duration-300 2xl:scale-125 origin-top"
      }
    >
      <ImgContainer
        style={{
          backgroundSize: "cover",
        }}
        src={TEAMS[index].thumbnail}
        className="w-full h-full m-auto rounded-xl"
      />
      <h1
        className={
          (index === selectedTeam && "text-[#a15d00]") + " font-bold mt-2 text-sm lg:hidden"
        }
      >
        {TEAMS[index].name === "Game development"
          ? "Game dev"
          : TEAMS[index].name}
      </h1>
    </button>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.3 } }}
      viewport={{ once: true }}
      className="selectorContainer flex flex-row justify-center items-end mt-8 space-x-5 
      lg:absolute lg:right-0 lg:flex-col lg:space-x-0 lg:space-y-5 lg:mr-5 lg:mt-0 
      sm:flex-col sm:space-y-3 2xl:space-x-10"
    >
      {TEAMS.map((team, index) => {
        return <Selector key={index} index={index} />;
      })}
    </motion.div>
  );
}
