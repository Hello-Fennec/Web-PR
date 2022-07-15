import React from "react";
import { useState } from "react";
import BREAKPOINTS from "../../../constants/BREAKPOINTS";
import TEAMS from "../../../constants/TEAMS";

export default function TeamSelector() {
  const [selectedTeam, setselectedTeam] = useState(0);
  const Selector = ({ index }) => (
    <a
      onClick={() => {
        console.log({ index });
        setselectedTeam(index);
      }}
      className={
        (selectedTeam == index ? "bg-red-500" : "bg-gray-500") +
        " w-20 h-20 bg-gray-500 cursor-pointer rounded-2xl"
      }
    ></a>
  );

  return (
    <div className="selectorContainer sm:hidden flex flex-row justify-center items-end space-x-5  lg:flex-col lg:space-x-0 lg:space-y-5 lg:mr-5">
      {TEAMS.map((team, index) => {
        return <Selector key={index} index={index} />;
      })}
    </div>
  );
}
