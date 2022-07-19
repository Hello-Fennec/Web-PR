import { BsChevronDown } from "react-icons/bs";
import { CgArrowLongDown } from "react-icons/cg";
import Floating from "../../../components/Floating";
import BREAKPOINTS from "../../../Data/BREAKPOINTS";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const ScrollLabel = () => {
  const { height, width } = useWindowDimensions();
  const scrollDownStyle =
    "opacity-0 absolute w-full flex flex-col justify-center items-center duration-300";
  return width > BREAKPOINTS.mobile ? (
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
    <div className={"ScrollDown top-2/3 -translate-y-1/2 " + scrollDownStyle}>
      <Floating>
        <CgArrowLongDown size="30" />
      </Floating>
    </div>
  );
};

export default ScrollLabel;
