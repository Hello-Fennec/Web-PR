import React from "react";
import TEAMS from "../../../constants/TEAMS";
import { Carousel } from "@trendyol-js/react-carousel";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import BREAKPOINTS from "../../../constants/BREAKPOINTS";
import styled from "styled-components";

export default function Content({ selectedTeam, setselectedTeam }) {
  const { height, width } = useWindowDimensions();

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
              <div className="h-52 w-11/12 bg-gray-500 rounded-xl mr-10"></div>
              <div className="w-11/12 flex flex-col items-center text-center text-lg">
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
      <Floating className="flex justify-center items-center mb-5 lg:flex-col lg:space-x-0 lg:space-y-5">
        <div className="hidden  text-4xl font-bold lg:block mb-10">
          {TEAMS[selectedTeam].name}
        </div>
        <div className="h-80 w-80 bg-gray-500 rounded-3xl mr-10"></div>
        <div className="h-80 w-1/3 flex flex-col lg:h-36 lg:w-96">
          <div className="lg:hidden h-1/4 w-full text-4xl text-left font-bold">
            {TEAMS[selectedTeam].name}
          </div>
          <div className="h-full w-full text-left lg:text-center text-lg">
            {TEAMS[selectedTeam].description}
          </div>
        </div>
      </Floating>
    );
  };

  return (
    <>{width < BREAKPOINTS.mobile ? <MobileCourasel /> : <DesktopCarousel />}</>
  );
}

const Floating = styled.div`
  animation: floating 2s ease-in-out infinite;

  @keyframes floating {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
