import { motion } from "framer-motion";
import ABOUTUS from "../../../constants/ABOUTUS";
import Textbox from "../../../assets/images/About/StoneSlab.png";

export default function AboutUsContainer() {
  const textFading = {
    hiddeni: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.2 } },
  };
  return (
    <motion.div
      viewport={{ once: true }}
      className="flex flex-col justify-center items-center "
    >
      <div
        data-speed={3}
        className="mousemove text-white h-auto w-[95%] min-h-[24rem] max-w-[44rem] sm:px-8 sm:pt-14 sm:pb-24 p-12 pb-14 translate-x-0"
      >
        <motion.div
          // initial={"hidden"}
          // whileInView={"visible"}
          // viewport={{ once: true }}
          // variants={textFading}
          className="text-2xl font-bold mb-5"
        >
          {ABOUTUS.title}
        </motion.div>
        <motion.div
          // initial={"hidden"}
          // whileInView={{ opacity: 1, y: 0, transition: { delay: 1.5 } }}
          // viewport={{ once: true }}
          // variants={textFading}
          className="text-left whitespace-pre-wrap "
        >
          {ABOUTUS.content}
        </motion.div>
        <motion.img
          src={Textbox}
          className=" w-full h-full absolute -z-10 top-0 left-0"
        />
      </div>
    </motion.div>
  );
}
