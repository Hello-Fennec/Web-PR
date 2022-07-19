import React from "react";
import { motion } from "framer-motion";

const RegisterBtn = () => {
  return (
    <motion.a
      initial={{ x: "-50%", opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.1, delay: 0.7 } }}
      whileHover={{
        scale: [1, 1.1],
        transition: {
          duration: 0.3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
      href="#"
      className="absolute bottom-0  p-4 w-1/3 mb-10 
      sm:w-2/5 sm:mb-3 
        md:mb-5 md:mr-3 md:right-0 md:-translate-x-0
        rounded-md bg-gray-500 
         duration-500"
    >
      Register Now!
    </motion.a>
  );
};

export default RegisterBtn;
