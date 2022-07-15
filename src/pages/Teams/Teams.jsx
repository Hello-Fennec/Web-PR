import TeamSelector from "./components/TeamSelectors";
import Content from "./components/Content";
import { useState } from "react";

function Teams() {
  const [selectedTeam, setselectedTeam] = useState(0);
  return (
    <div className="flex flex-col justify-center  lg:flex-row lg:items-center ">
      <Content selectedTeam={selectedTeam} setselectedTeam={setselectedTeam} />
      <TeamSelector
        selectedTeam={selectedTeam}
        setselectedTeam={setselectedTeam}
      />
    </div>
  );
}

export default Teams;
