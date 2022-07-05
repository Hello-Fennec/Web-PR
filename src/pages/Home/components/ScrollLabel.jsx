import { BsChevronDown } from "react-icons/bs";
import { CgArrowLongDown } from "react-icons/cg";
import styled from "styled-components";
import BREAKPOINTS from "../../../constants/BREAKPOINTS";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const ScrollLabel = () => {
  const { height, width } = useWindowDimensions();

  return width > BREAKPOINTS.mobile ? (
    <ScrollDown
      onClick={() => window.fullpage_api.moveSectionDow()}
      className="ScrollDown bottom-0 my-10 text-black text-xl duration-500 transition-all"
    >
      <h1>Scroll Down</h1>
      <BsChevronDown size="20" />
    </ScrollDown>
  ) : (
    <ScrollDown className="ScrollDown top-2/3  -translate-y-1/2 duration-500 transition-all">
      <CgArrowLongDown size="30" />
    </ScrollDown>
  );
};

const ScrollDown = styled.div`
  animation: float 1s infinite;
  opacity: 0;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-10px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`;

export default ScrollLabel;
