import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import BREAKPOINTS from "../../../constants/BREAKPOINTS";
import ImgContainer from "../../../components/ImgContainer";
import StoneStick from "../../../assets/images/FAQs/StoneStick.webp";
import styled from "styled-components";
import { useState } from "react";

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) ||
  (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 0); // check if the device is mobile

function DesktopToggle(props) {
  return (
    <motion.div
      className="flex sm:w-11/12 flex-col items-center"
      exit={{
        opacity: 0,
      }}
    >
      <button
        onClick={() =>
          props.index === props.current
            ? props.setCurrent(-1)
            : props.setCurrent(props.index)
        }
        className={
          // (props.current === props.index
          //   ? "bg-red-500 sm:mb-0"
          //   : "bg-gray-500") +
          ` h-16 w-72 md:w-52 sm:w-full rounded-lg sm:text-sm mb-2
            hover:md:-translate-y-0 hover:-translate-y-1 translate-y-0
           duration-200 transition-all text-white flex justify-center items-center`
        }
      >
        {props.title}
        {props.question}
        <img
          src={StoneStick}
          className={
            (props.index !== props.current && "grayscale") +
            " w-full h-full absolute -z-10 "
          }
          loading="lazy"
        />
      </button>
    </motion.div>
  );
}
function MobileToggle(props) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(props.index === props.current);
  }, [props.current]);
  return (
    <ToggleBar className="flex sm:w-11/12 flex-col items-center">
      <button
        onClick={() => {
          visible ? props.setCurrent(-1) : props.setCurrent(props.index);
        }}
        className={
          (visible ? "toggleBar active" : "toggleBar") +
          " p-4 w-72  sm:mb-0  md:w-52 sm:w-full  mb-1 duration-200 transition-all text-white text-sm"
        }
      >
        {props.question}
      </button>
      <Collapse>
        <div
          key={props.index}
          className={
            (visible ? "collapse show" : "collapse") +
            " hidden sm:block bg-[#F2E2BB] rounded-b-[0.375rem]"
          }
        >
          <div className="relative w-[90%] h-full flex items-center m-auto text-sm">
            {props.answer}
          </div>
        </div>
      </Collapse>
    </ToggleBar>
  );
}

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

const Collapse = styled.div`
  .collapse {
    height: 0;
    overflow: hidden;
    width: 100%;
    margin-bottom: 0.5rem;
    transition: height 0.5s ease;
  }

  .collapse.show {
    height: 13rem;
  }
`;

const ToggleBar = styled.div`
  .toggleBar {
    background: #585858;
    border-radius: 0.375rem;
  }
  .toggleBar.active {
    border-radius: 0.375rem 0.375rem 0 0 ;
    background-color: #a15d00;
  }
`;
