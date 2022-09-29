import React from "react";
// import ImgContainer from "../../../components/ImgContainer";
import TEAMS from "../../../constants/TEAMS";
import { motion } from "framer-motion";

// const Thumbnail = React.memo(function Thumbnail({ size, src, className }) {
//   return <ImgContainer src={src} size={size} className={className} />;
// });

const Thumbnail = React.memo(function Image({ src }) {
  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
      }}
      className="bg-cover bg-center bg-no-repeat w-full h-full"
    />
  );
});

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
      <Thumbnail
        size="cover"
        src={TEAMS[index].thumbnail}
        className="w-full h-full m-auto rounded-xl"
      />
      <h1
        className={
          (selectedTeam === index && "text-[#a15d00]") +
          " font-bold mt-2 text-sm lg:hidden"
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
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.3 } }}
      // viewport={{ once: true }}
      className=" flex flex-row justify-center items-end mt-8 space-x-5 
      lg:absolute lg:-translate-y-20 lg:right-4 lg:flex-col lg:space-x-0 lg:space-y-5 lg:mt-0 
      sm:flex-col sm:right-2 sm:-translate-y-10 sm:space-y-3 
      2xl:space-x-10"
    >
      {TEAMS.map((team, index) => {
        return <Selector key={team} index={index} />;
      })}
    </motion.div>
  );
}
