import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import BREAKPOINTS from "../../../constants/BREAKPOINTS";
import ImgContainer from "../../../components/ImgContainer";
import StoneStick from "../../../assets/images/FAQs/StoneStick.png";

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
          ` h-16 w-72 md:w-52 sm:w-full rounded-lg sm:text-sm mb-2  ${
            !isMobile &&
            "hover:md:-translate-y-0 hover:-translate-y-1 translate-y-0"
          } duration-200 transition-all text-white flex justify-center items-center`
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
        />
      </button>
    </motion.div>
  );
}
function MobileToggle(props) {
  const answerContainer = document.getElementById("ansContainer");
  return (
    <motion.div className="flex sm:w-11/12 flex-col items-center">
      <button
        onClick={() => {
          props.index === props.current
            ? props.setCurrent(-1)
            : props.setCurrent(props.index);
          answerContainer.classList.toggle("active");
        }}
        className={
          (props.current === props.index
            ? "bg-red-500 sm:mb-0"
            : "bg-gray-500") +
          " p-5 w-72 md:w-52 sm:w-full h-full rounded-lg sm:text-sm mb-2  hover:md:-translate-y-0 hover:-translate-y-1 duration-200 transition-all"
        }
      >
        {props.title}
        {props.question}
      </button>
      {props.index === props.current && (
        <motion.div
          // initial={{
          //   height: 0,
          // }}
          // animate={{
          //   height: "8rem",
          // }}
          key={props.index}
          id="ansContainer"
          className="sm:block hidden w-full p-2 bg-slate-300 mb-2 duration-300 h-32"
        >
          <motion.div
            // initial={{
            //   opacity: 0,
            //   y: 20,
            // }}
            // whileInView={{
            //   opacity: 1,
            //   y: 0,
            // }}
            // transition={{
            //   delay: 0.3,
            // }}
            className="relative h-full flex justify-center items-center "
          >
            {props.answer}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
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
