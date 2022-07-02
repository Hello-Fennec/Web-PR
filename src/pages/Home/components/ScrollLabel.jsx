import { BsChevronDown } from "react-icons/bs";
import { CgArrowLongDown } from "react-icons/cg";
import styled from "styled-components";
import BREAKPOINTS from "../../../constants/BREAKPOINTS";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const ScrollLabel = () => {
  const { height, width } = useWindowDimensions();

  // const ScrollLabel = styled.div`

  // `;

  return width > BREAKPOINTS.mobile ? (
    <div className="ScrollDown opacity-0 fixed bottom-0 w-full my-10 text-black text-xl flex flex-col items-center duration-500 transition-all">
      <h1>Scroll Down</h1>
      <BsChevronDown size="20" />
    </div>
  ) : (
    <div className="ScrollDown opacity-0 fixed top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-500 transition-all">
      <CgArrowLongDown size="30" />
    </div>
  );
};

export default ScrollLabel;
