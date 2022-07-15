import React from "react";
import TEAMS from "../../../constants/TEAMS";

export default function Content({ selectedTeam, setselectedTeam }) {
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
}
