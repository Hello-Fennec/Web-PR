import { BsChevronDown } from "react-icons/bs";
import { CgArrowLongDown } from "react-icons/cg";
import Floating from "../../../components/Floating";
import BREAKPOINTS from "../../../Data/BREAKPOINTS";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { motion } from "framer-motion";

const ScrollLabel = () => {
  const { height, width } = useWindowDimensions();
  const scrollDownStyle =
    " absolute w-full flex flex-col  items-center duration-300";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 2,
      }}
    >
      {width > BREAKPOINTS.mobile ? (
        <div
          className={
            "ScrollDown bottom-0 my-10 text-black text-xl " + scrollDownStyle
          }
        >
          <Floating>
            <button
              onClick={() => {
                window.fullpage_api.moveSectionDown();
              }}
            >
              <h1>Scroll Down</h1>
              <BsChevronDown size="20" className="w-full" />
            </button>
          </Floating>
        </div>
      ) : (
        <div
          className={"ScrollDown top-[80%] -translate-y-1/2 " + scrollDownStyle}
        >
          <Floating>
            <CgArrowLongDown size="30" />
          </Floating>
        </div>
      )}
    </motion.div>
  );
};

export default ScrollLabel;
