import React from "react";
import TEAMS from "../../../constants/TEAMS";
import { Carousel } from "@trendyol-js/react-carousel";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import BREAKPOINTS from "../../../constants/BREAKPOINTS";
import ImgContainer from "../../../components/ImgContainer";
import Floating from "../../../components/Floating";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Content({ selectedTeam }) {
  const { height, width } = useWindowDimensions();

  const MobileCourasel = () => {
    return (
      <Carousel
        show={1}
        slide={1}
        swiping={true}
        swipeOn={0.05}
        responsive={true}
        autoplaySpeed={3000}
        infinite={true}
        rightArrow={
          <IoIosArrowForward className="w-12 h-12 absolute top-1/2 right-0 -translate-y-1/2" />
        }
        leftArrow={
          <IoIosArrowBack className="w-12 h-12 absolute top-1/2 left-0 -translate-y-1/2 z-20" />
        }
        className="w-4/5 lg:w-2/3 md:w-screen "
      >
        {TEAMS.map((team, index) => {
          return (
            <div
              className="flex flex-col space-x-0 items-center space-y-5 "
              key={index}
            >
              <div className="hidden text-4xl font-bold lg:block ">
                {team.name}
              </div>
              <ImgContainer
                src={team.image}
                className="h-52 w-11/12  mr-10"
              ></ImgContainer>
              <div className="w-11/12 flex flex-col items-center text-center text-lg ">
                {team.description}
              </div>
            </div>
          );
        })}
      </Carousel>
    );
  };

  const DesktopCarousel = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.1 } }}
        className="flex justify-center items-center mb-5 lg:flex-col lg:space-x-0 lg:space-y-5 duration-500"
      >
        <div className="hidden  text-4xl font-bold lg:block mb-10">
          {TEAMS[selectedTeam].name}
        </div>
        <Floating>
          <ImgContainer
            src={TEAMS[selectedTeam].image}
            className="h-80 w-80 mr-10 bg-white rounded-xl"
          />
        </Floating>
        <div className="h-80 w-1/3 flex flex-col lg:h-36 lg:w-96 bg-white rounded-xl">
          <div className="lg:hidden h-1/4 w-full text-4xl text-left font-bold">
            {TEAMS[selectedTeam].name}
          </div>
          <div className="h-full w-full text-left lg:text-center text-lg ">
            {TEAMS[selectedTeam].description}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      {width < BREAKPOINTS.mobile ? <MobileCourasel /> : <DesktopCarousel />}
    </>
  );
}
