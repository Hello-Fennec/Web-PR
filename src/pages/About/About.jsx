import PageAnimation from "../../components/PageAnimation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import ImgContainer from "../../components/ImgContainer";
import ABOUTUS from "../../Data/ABOUTUS";

function About() {
  const textFading = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.2 } },
  };
  return (
    <PageAnimation>
      <AnimatePresence>
        <motion.div
          initial={{ x: "-50%", skewX: 20 }}
          whileInView={{
            x: 0,
            skewX: 0,
            transition: {
              duration: 1.2,
              type: "tween",
              ease: "easeInOut",
            },
          }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center"
        >
          <ImgContainer className="h-auto w-[95%] min-h-[24rem] max-w-[44rem] sm:px-4 p-8 pb-14 bg-gray-300 rounded-lg">
            <motion.div
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true }}
              variants={textFading}
              className="text-2xl font-bold mb-5"
            >
              {ABOUTUS.title}
            </motion.div>
            <motion.div
              initial={"hidden"}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 1.5 } }}
              viewport={{ once: true }}
              variants={textFading}
              className="text-left text-xl whitespace-pre-wrap"
            >
              {ABOUTUS.content}
            </motion.div>
          </ImgContainer>
        </motion.div>
      </AnimatePresence>
    </PageAnimation>
  );
}

export default About;
