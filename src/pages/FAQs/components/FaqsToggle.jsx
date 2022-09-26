import React from "react";
import MobileToggle from "./MobileToggle";
import BREAKPOINTS from "../../../constants/BREAKPOINTS";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import DesktopToggle from "./DesktopToggle";

export default function FaqsToggle({
  current,
  setCurrent,
  index,
  title,
  question,
  answer,
}) {
  const { width } = useWindowDimensions();

  return (
    <>
      {width < BREAKPOINTS.mobile ? (
        <MobileToggle
          current={current}
          setCurrent={setCurrent}
          index={index}
          title={title}
          question={question}
          answer={answer}
        />
      ) : (
        <DesktopToggle
          current={current}
          setCurrent={setCurrent}
          index={index}
          title={title}
          question={question}
          answer={answer}
        />
      )}
    </>
  );
}
