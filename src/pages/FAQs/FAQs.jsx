import { useState } from "react";
import FAQS from "../../Data/FAQS";
import FaqsToggle from "./components/FaqsToggle";

function Faqs() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="flex flex-row justify-center h-full">
      <div className="flex flex-col space-y-2">
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
      <div className="w-1/2 bg-gray-300 ml-2 p-2 flex flex-col justify-center items-center rounded-lg">
        <div className="text-xl">{FAQS[current].question}</div>
        <br />
        <div className="text-2xl font-semibold">{FAQS[current].answer}</div>
      </div>
    </div>
  );
}

export default Faqs;
