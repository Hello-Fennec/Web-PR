import { useState } from "react";
import FAQS from "../../Data/FAQS";
import FaqsToggle from "./components/FaqsToggle";

function Faqs() {
  const [current, setCurrent] = useState(0);

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
        <div className="w-1/2  bg-gray-300 ml-2 p-2 flex flex-col justify-center items-center rounded-lg ">
          <div className="text-xl">{FAQS[current].question}</div>
          <br />
          <div className="text-2xl font-semibold ">{FAQS[current].answer}</div>
        </div>
      </div>
    );
  };
  return <DesktopFaqs />;
}

export default Faqs;
