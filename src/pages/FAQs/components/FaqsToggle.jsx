import React, { useEffect } from "react";
import styled from "styled-components";
import BREAKPOINTS from "../../../Data/BREAKPOINTS";

export default function FaqsToggle({
  current,
  setCurrent,
  index,
  title,
  question,
  answer,
}) {
  useEffect(() => {
    const ansContainer = document.getElementById(`ansContainer`);
    ansContainer.classList.toggle("active");
  }, [current]);
  return (
    <div className=" flex sm:w-11/12 flex-col items-center">
      <button
        onClick={() => (index === current ? setCurrent(-1) : setCurrent(index))}
        className={
          (current === index ? "bg-red-500 sm:mb-0" : "bg-gray-500") +
          " p-5 w-72 sm:w-full h-full rounded-lg sm:text-sm mb-2"
        }
      >
        {title}
        {question}
      </button>
      <AnsContainer
        id="ansContainer"
        className={
          (index === current ? "sm:flex" : "") +
          " h-32 w-full hidden bg-slate-300 -z-10 p-2 flex-col justify-center items-center mb-2"
        }
      >
        {answer}
      </AnsContainer>
    </div>
  );
}

const AnsContainer = styled.div`
  &.active {
    height: 8rem;
  }
`;
