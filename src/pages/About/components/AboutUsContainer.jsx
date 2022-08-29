import { motion } from "framer-motion";
import ImgContainer from "../../../components/ImgContainer";
import ABOUTUS from "../../../constants/ABOUTUS";

export default function AboutUsContainer() {
  const textFading = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.2 } },
  };
  return (
    <motion.div
      initial={{ x: "-50%", skewX: -20 }}
      whileInView={{
        x: 0,
        skewX: 0,
        transition: {
          duration: 0.9,
          type: "tween",
          ease: "easeInOut",
        },
      }}
      viewport={{ once: true }}
      className="flex flex-col justify-center items-center"
    >
      <ImgContainer
        data-speed={3}
        className="mousemove h-auto w-[95%] min-h-[24rem] max-w-[44rem] sm:px-4 p-8 pb-14 bg-[#a1a1a144] rounded-lg"
      >
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
  );
}
