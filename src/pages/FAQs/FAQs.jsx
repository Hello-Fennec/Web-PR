import { useState } from "react";
import FAQS from "../../Data/FAQS";

function Faqs() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="flex flex-row justify-center h-full">
      <div className="space-y-2">
        {FAQS.map((faq, index) => {
          return (
            <div key={index}>
              <button
                onClick={() => setCurrent(index)}
                className={
                  (current === index ? "bg-red-500" : "bg-gray-500") + " p-5 w-96"
                }
              >
                {faq.question}
              </button>
            </div>
          );
        })}
      </div>
      <div className="w-1/2 bg-gray-300 ml-2 flex justify-center items-center">
        {FAQS[current].answer}
      </div>
    </div>
  );
}

export default Faqs;
