import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageAnimation from "../../components/PageAnimation";
import BREAKPOINTS from "../../constants/BREAKPOINTS";
import FAQS from "../../constants/FAQS";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import FaqsToggle from "./components/FaqsToggle";
import SOCIALMEDIAS from "../../constants/SOCIALMEDIAS";

function Faqs() {
  const [current, setCurrent] = useState(0);
  const { width } = useWindowDimensions();

  const MobileFaqs = () => {
    return (
      <div className="flex flex-col w-screen items-center ">
        <AnimatePresence exitBeforeEnter>
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
        </AnimatePresence>
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
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl"
          >
            {current > -1 && FAQS[current].question}
          </motion.div>
          <br />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-semibold"
          >
            {current > -1 ? (
              FAQS[current].answer
            ) : (
              <div className="flex flex-col space-y-3">
                <h1>หากมีข้อสงสัยเพิ่มเติม สอบถามได้ที่</h1>
                {SOCIALMEDIAS.map((item, index) => {
                  return (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(item.url, "_blank");
                      }}
                      className={
                        "p-2 bg-white rounded-full text-white hover:shadow-lg hover:-translate-y-1 duration-200 flex"
                      }
                    >
                      <div
                        className="rounded-full p-2 w-14"
                        style={{
                          background: item.color,
                        }}
                      >
                        {item.icon}
                      </div>
                      <h1 className="text-black my-auto ml-5">{item.username}</h1>
                    </button>
                  );
                })}
                <h1 className="text-base">
                  กดปุ่มทางซ้ายเพื่ออ่านรายละเอียดโครงการ
                </h1>
              </div>
            )}
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
