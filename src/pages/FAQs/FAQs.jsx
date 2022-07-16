import { useEffect, useState } from "react";
import BREAKPOINTS from "../../Data/BREAKPOINTS";
import FAQS from "../../Data/FAQS";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import FaqsToggle from "./components/FaqsToggle";

function Faqs() {
  const [current, setCurrent] = useState(1);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setCurrent(0);
  }, []);

  const MobileFaqs = () => {
    return (
      <div className="flex flex-col items-center space-y-2">
        {FAQS.map((faq, index) => {
          return (
            <FaqsToggle
              key={index}
              index={index}
              current={current}
              setCurrent={setCurrent}
              question={faq.question}
              answer={faq.answer}
            />
          );
        })}
      </div>
    );
  };

  const DesktopFaqs = () => {
    return (
      <div className=" flex flex-row justify-center ">
        <div className="flex flex-col justify-between space-y-2">
          {/*toggle col*/}
          {FAQS.map((faq, index) => {
            return (
              <FaqsToggle
                key={index}
                index={index}
                current={current}
                setCurrent={setCurrent}
                title={faq.title}
              />
            );
          })}
        </div>
        <div className="w-1/2 bg-gray-300 ml-2 p-2 flex flex-col justify-center items-center rounded-lg ">
          <div className="text-xl">{current>-1&&FAQS[current].question}</div>
          <br />
          <div className="text-2xl font-semibold ">{current>-1?FAQS[current].answer:"Click to see"}</div>
        </div>
      </div>
    );
  };
  return width < BREAKPOINTS.mobile ? <MobileFaqs /> : <DesktopFaqs />;
}

export default Faqs;
