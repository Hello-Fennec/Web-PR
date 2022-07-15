import React from "react";
import { useState } from "react";
import TEAMS from "../../../constants/TEAMS";

export default function TeamSelector({ selectedTeam, setselectedTeam }) {
  const Selector = ({ index }) => (
    <button
      onClick={() => {
        setselectedTeam(index);
      }}
      className={
        (selectedTeam == index ? "bg-red-500" : "bg-gray-500") +
        " w-16 h-16 bg-gray-500 cursor-pointer rounded-2xl drop-shadow-lg"
      }
    ></button>
  );

  return (
    <div className="selectorContainer sm:hidden flex flex-row justify-center items-end space-x-5 lg:absolute lg:right-0 lg:flex-col lg:space-x-0 lg:space-y-5 lg:mr-5">
      {TEAMS.map((team, index) => {
        return <Selector key={index} index={index} />;
      })}
    </div>
  );
}
