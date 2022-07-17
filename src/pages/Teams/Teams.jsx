import TeamSelector from "./components/TeamSelectors";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import RegisterBtn from "./components/RegisterBtn";
import styled from "styled-components";
import PageContainer from "../../components/PageContainer";

function Teams({ pageIndex, pageOnScreen }) {
  const [selectedTeam, setselectedTeam] = useState(0);

  useEffect(() => {
    const PageContainer = document.getElementById("PageContainer");
    setTimeout(() => {
      pageIndex === pageOnScreen && (PageContainer.classList.add("active"));
    }, 500);
    return () => {
      PageContainer.classList.remove("active");
    }
  }, [pageOnScreen]);

  return (
    <>
    <PageContainer id="PageContainer" className="flex flex-col justify-center items-center lg:flex-row lg:items-center">
      <Content
        selectedTeam={selectedTeam}
        pageIndex={pageIndex}
        pageOnScreen={pageOnScreen}
      />
      <TeamSelector
        selectedTeam={selectedTeam}
        setselectedTeam={setselectedTeam}
      />
    </PageContainer>
    <RegisterBtn />
    </>
  );
}

export default Teams;

