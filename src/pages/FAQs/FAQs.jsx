import { useState } from "react";
import { motion } from "framer-motion";
import PageAnimation from "../../components/PageAnimation";
import BREAKPOINTS from "../../constants/BREAKPOINTS";
import FAQS from "../../constants/FAQS";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import FaqsToggle from "./components/FaqsToggle";

function Faqs() {
  const [current, setCurrent] = useState(0);
  const { height, width } = useWindowDimensions();

  const MobileFaqs = () => {
    return (
      <div className="flex flex-col w-screen items-center ">
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
        <div className="flex flex-col justify-between">
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
        <div className="w-[42rem] lg:w-[28rem]  md:w-96 bg-gray-300 ml-2 p-5 flex flex-col justify-center items-center rounded-lg ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl"
          >
            {current > -1 && FAQS[current].question}
          </motion.div>
          <br />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-semibold"
          >
            {current > -1 ? FAQS[current].answer : "Click to see"}
          </motion.div>
        </div>
      </div>
    );
  };
  return (
    <PageAnimation>
      {width < BREAKPOINTS.mobile ? <MobileFaqs /> : <DesktopFaqs />}
    </PageAnimation>
  );
}

export default Faqs;
