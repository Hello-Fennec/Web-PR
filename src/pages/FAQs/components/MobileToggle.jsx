import { useEffect, useState } from "react";
import styled from "styled-components";
import StoneStick from "../../../assets/images/FAQs/StoneStick.png";

function MobileToggle(props) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(props.index === props.current);
  }, [props.current]);
  return (
    <div className="flex sm:w-11/12 flex-col items-center">
      <button
        onClick={() => {
          visible ? props.setCurrent(-1) : props.setCurrent(props.index);
        }}
        className={
          (visible ? "toggleBar active" : "toggleBar") +
          " p-4 w-72  sm:mb-0  md:w-52 sm:w-full  mb-1 duration-200 transition-all text-white text-sm z-10"
        }
      >
        {props.question}
      </button>
      <img
        src={StoneStick}
        className={
          (props.index !== props.current ? "grayscale" : "") +
          " absolute h-14 w-[95%]"
        }
      />

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
    </div>
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
    border-radius: 0.375rem 0.375rem 0 0;
    background-color: #a15d00;
  }
`;

export default MobileToggle;
