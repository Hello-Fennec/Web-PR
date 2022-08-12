import React from "react";
import { motion } from "framer-motion";

const RegisterBtn = () => {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.1, delay: 0.7 } }}
      viewport={{ once: true }}
      href="#"
      className="bg-gray-500 rounded-full h-20 w-20 fixed bottom-0 right-0 mb-10 mr-10 md:mb-5 md:mr-5 sm:mb-3 sm:mr-3 flex justify-center items-center text-black  transition-all duration-200 ease-in-out"
    >
      Register Now!
    </motion.a>
  );
};

export default RegisterBtn;
