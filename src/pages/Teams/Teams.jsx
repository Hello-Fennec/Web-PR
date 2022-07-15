import TeamSelector from "./components/TeamSelectors";
import Content from "./components/Content";
import { useState } from "react";
import RegisterBtn from "./components/RegisterBtn";

function Teams() {
  const [selectedTeam, setselectedTeam] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row lg:items-center ">
      <Content selectedTeam={selectedTeam} setselectedTeam={setselectedTeam} />
      <TeamSelector
        selectedTeam={selectedTeam}
        setselectedTeam={setselectedTeam}
      />
      <RegisterBtn/> 
    </div>
  );
}

export default Teams;
