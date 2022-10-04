import React from "react";
import ImgContainer from "../../../components/ImgContainer";
import { motion } from "framer-motion";
import HelloFennecLogo from "../../../assets/images/HelloFennec-logo.png";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.7 } }}
    >
      <ImgContainer
        src={HelloFennecLogo}
        className=" h-full w-full md:w-[90%] max-w-[32rem] max-h-[18rem] absolute -translate-x-1/2 -translate-y-1/2 2xl:scale-150"
      />
      <div
        className="w-[80vw] absolute -translate-x-1/2 translate-y-[8rem] sm:translate-y-[6rem] text-xl font-bold
      sm:text-base 2xl:translate-y-[10rem] 2xl:text-2xl"
      >
        <span className="inline-block">Break your limits,</span>
        <span className="inline-block">&nbsp;practice your skills</span>
      </div>
    </motion.div>
  );
};

export default Logo;
