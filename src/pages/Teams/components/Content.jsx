import React from "react";
import TEAMS from "../../../constants/TEAMS";
import { Carousel } from "@trendyol-js/react-carousel";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import BREAKPOINTS from "../../../constants/BREAKPOINTS";

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
        className="w-4/5 lg:w-2/3 md:w-screen cursor-grab"
      >
        {TEAMS.map((team, index) => {
          return (
            <div
              className="flex justify-center mb-16 lg:flex-col lg:space-x-0 lg:items-center lg:space-y-5 cursor-grab"
              key={index}
            >
              <div className="hidden text-4xl font-bold lg:block mb-10">
                {team.name}
              </div>
              <div className="h-80 w-96 bg-gray-500 rounded-3xl mr-10"></div>
              <div className="h-80 w-1/3 flex flex-col lg:h-36 lg:w-96">
                <div className="lg:hidden h-1/4 w-full text-4xl text-left font-bold">
                  {team.name}
                </div>
                <div className="h-full w-full text-left lg:text-center text-lg">
                  {team.description}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    );
  };

  const DesktopCarousel = () => {
    return (
      <div className="flex justify-center mb-16 lg:flex-col lg:space-x-0 lg:space-y-5">
        <div className="hidden  text-4xl font-bold lg:block mb-10">
          {TEAMS[selectedTeam].name}
        </div>
        <div className="h-80 w-96 bg-gray-500 rounded-3xl mr-10"></div>
        <div className="h-80 w-1/3 flex flex-col lg:h-36 lg:w-96">
          <div className="lg:hidden h-1/4 w-full text-4xl text-left font-bold">
            {TEAMS[selectedTeam].name}
          </div>
          <div className="h-full w-full text-left lg:text-center text-lg">
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
