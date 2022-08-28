import { BsChevronDown } from "react-icons/bs";
import { CgArrowLongDown } from "react-icons/cg";
import Floating from "../../../components/Floating";
import BREAKPOINTS from "../../../constants/BREAKPOINTS";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { motion } from "framer-motion";

const ScrollLabel = () => {
  const { width } = useWindowDimensions();
  const scrollDownStyle =
    " absolute flex flex-col items-center duration-300 left-1/2 -translate-x-1/2";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 2,
      }}
      className="w-screen h-screen absolute top-0 left-0"
    >
      {width > BREAKPOINTS.mobile ? (
        <div
          className={
            "ScrollDown bottom-10 text-black text-xl 2xl:scale-150 origin-bottom " +
            scrollDownStyle
          }
        >
          <Floating>
            <div>
              <h1>Scroll Down</h1>
              <BsChevronDown size="20" className="w-full" />
            </div>
          </Floating>
        </div>
      ) : (
        <div className={"ScrollDown bottom-24 " + scrollDownStyle}>
          <Floating>
            <BsChevronDown size="30" />
          </Floating>
        </div>
      )}
    </motion.div>
  );
};

export default ScrollLabel;
