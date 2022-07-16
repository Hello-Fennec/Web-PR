import { BsChevronDown } from "react-icons/bs";
import { CgArrowLongDown } from "react-icons/cg";
import styled from "styled-components";
import Floating from "../../../components/Floating";
import BREAKPOINTS from "../../../Data/BREAKPOINTS";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const ScrollLabel = () => {
  const { height, width } = useWindowDimensions();

  return width > BREAKPOINTS.mobile ? (
    <ScrollDown
      onClick={() => window.fullpage_api.moveSectionDow()}
      className="ScrollDown bottom-0 my-10 text-black text-xl duration-500 transition-all"
    >
      <Floating>
        <h1>Scroll Down</h1>
        <BsChevronDown size="20" className="w-full" />
      </Floating>
    </ScrollDown>
  ) : (
    <ScrollDown className="ScrollDown top-2/3  -translate-y-1/2 duration-500 transition-all">
      <Floating>
        <CgArrowLongDown size="30" />
      </Floating>
    </ScrollDown>
  );
};

const ScrollDown = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ScrollLabel;
