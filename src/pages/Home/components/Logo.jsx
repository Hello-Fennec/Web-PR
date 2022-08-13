import React from "react";
import ImgContainer from "../../../components/ImgContainer";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1,transition: { delay: .7 } }}
    >
      <ImgContainer
        src={""}
        className="h-full w-full max-w-[36rem] max-h-[18rem] bg-gray-500 absolute -translate-x-1/2 -translate-y-1/2"
      />
    </motion.div>
  );
};

export default Logo;
