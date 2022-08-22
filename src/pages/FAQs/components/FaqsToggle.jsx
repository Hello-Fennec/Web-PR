import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import BREAKPOINTS from "../../../constants/BREAKPOINTS";

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
          (props.current === props.index
            ? "bg-red-500 sm:mb-0"
            : "bg-gray-500") +
          " p-5 w-72 md:w-52 sm:w-full h-full rounded-lg sm:text-sm mb-2  hover:md:-translate-y-0 hover:-translate-y-1 duration-200 transition-all text-white"
        }
      >
        {props.title}
        {props.question}
      </button>
      {props.index === props.current && (
        <motion.div
          initial={{
            height: "8rem",
          }}
          animate={{
            height: "8rem",
          }}
          key={props.index}
          id="ansContainer"
          className="sm:block hidden w-full p-2 bg-slate-300 mb-2 duration-300"
        >
          <motion.div
            // initial={{
            //   opacity: 0,
            //   y: 20,
            // }}
            // animate={{
            //   opacity: 1,
            //   y: 0,
            // }}
            initial={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
            className="relative h-full flex justify-center items-center "
          >
            {props.answer}
          </motion.div>
        </motion.div>
      )}
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
          initial={{
            height: 0,
          }}
          animate={{
            height: "8rem",
          }}
          key={props.index}
          id="ansContainer"
          className="sm:block hidden w-full p-2 bg-slate-300 mb-2 duration-300"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
            }}
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
