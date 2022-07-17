import React, { useEffect } from "react";
import TEAMS from "../../../Data/TEAMS";
import { Carousel } from "@trendyol-js/react-carousel";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import BREAKPOINTS from "../../../Data/BREAKPOINTS";
import ImgContainer from "../../../components/ImgContainer";
import Floating from "../../../components/Floating";

export default function Content({ selectedTeam, pageIndex, pageOnScreen }) {
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    const carousel = document.getElementById("carousel");
    carousel && (carousel.style.opacity = "1");

  }, [width, height,selectedTeam]);

  const MobileCourasel = () => {
    return (
      <Carousel
        show={1}
        slide={1}
        swiping={true}
        swipeOn={0.05}
        responsive={true}
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
      <div
        id="carousel"
        className="flex justify-center items-center opacity-0 mb-5 lg:flex-col lg:space-x-0 lg:space-y-5 duration-500"
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
      </div>
    );
  };

  return (
    <>{width < BREAKPOINTS.mobile ? <MobileCourasel /> : <DesktopCarousel />}</>
  );
}
