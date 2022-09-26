import { motion } from "framer-motion";
import StoneStick from "../../../assets/images/FAQs/StoneStick.webp";

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

export default DesktopToggle;