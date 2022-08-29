import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageAnimation from "../../components/PageAnimation";
import BREAKPOINTS from "../../constants/BREAKPOINTS";
import FAQS from "../../constants/FAQS";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import FaqsToggle from "./components/FaqsToggle";
import SOCIALMEDIAS from "../../constants/SOCIALMEDIAS";
import StoneSlap from "../../assets/images/FAQs/StoneSlap.png";

function Faqs() {
  const [current, setCurrent] = useState(0);
  const { width } = useWindowDimensions();
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 0); // check if the device is mobile

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
      <div className=" flex flex-row justify-center  2xl:scale-150 text-white">
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
        <div className="w-[42rem] lg:w-[28rem]  md:w-96 ml-2 px-16 lg:px-12 flex flex-col justify-center items-center rounded-lg translate-y-0">
          <motion.div
            initial={!isMobile && { opacity: 0, y: 20 }}
            whileInView={!isMobile && { opacity: 1, y: 0 }}
            viewport={!isMobile && { once: true }}
            className="text-base lg:text-sm"
          >
            {current > -1 && FAQS[current].question}
          </motion.div>
          <br />
          <motion.div
            initial={!isMobile && { opacity: 0, y: 20 }}
            whileInView={!isMobile && { opacity: 1, y: 0 }}
            viewport={!isMobile && { once: true }}
            transition={!isMobile && { delay: 0.1 }}
            delay={"0.1s"}
            className="text-xl lg:text-base font-medium translate-y-0"
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
                      <h1 className="text-black my-auto ml-5">
                        {item.username}
                      </h1>
                    </button>
                  );
                })}
                <h1 className="text-base">
                  กดปุ่มทางซ้ายเพื่ออ่านรายละเอียดโครงการ
                </h1>
              </div>
            )}
          </motion.div>
          <img
            src={StoneSlap}
            className={
              (current === -1 && "grayscale") +
              " w-full h-full absolute -z-10 top-0 left-0"
            }
          />
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
