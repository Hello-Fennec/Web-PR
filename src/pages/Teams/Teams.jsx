import TeamSelector from "./components/TeamSelectors";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import RegisterBtn from "../../components/RegisterBtn";
import styled from "styled-components";
import PageAnimation from "../../components/PageAnimation";

function Teams({ pageIndex, pageOnScreen }) {
  const [selectedTeam, setselectedTeam] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row lg:items-center  sm:justify-start ">
      <Content selectedTeam={selectedTeam} />
      <TeamSelector
        selectedTeam={selectedTeam}
        setselectedTeam={setselectedTeam}
      />
    </div>
  );
}

export default Teams;
