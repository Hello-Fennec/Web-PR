import React from "react";
import { TbEdit } from "react-icons/tb";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaCheck, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import { onEvent } from "../constants/EVENTS";

export const registerBtnVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 0.5, repeat: Infinity },
  },
  whileHover: { scale: 1.05 },
};

const RegisterBtn = () => {
  const today = new Date();
  const registerDay = new Date("2022-10-07");
  const onRegister = today >= registerDay;

  return (
    <>
      <motion.div
        variants={registerBtnVariants}
        animate={onRegister ? "animate" : ""}
        whileHover={onRegister ? "whileHover" : ""}
        className=" fixed bottom-0  right-0 flex mb-10 mr-10 md:mb-5 md:mr-5 sm:mb-3 sm:mr-3 text-white space-x-4 sm:space-x-2 z-50 origin-center"
      >
        <button
          onClick={() => {
            onEvent === 1
              ? window.open("https://forms.gle/16JsWhnKX6ecjCpTA", "_blank")
              : onEvent <= 3
              ? window.open("https://forms.gle/ubQeT8r8vRpu4RM98", "_blank")
              : window.open("../../Game-PR/index.html");
          }}
          className={
            (onRegister ? "bg-[#a15d00] hover:bg-[#ca8018]" : "bg-slate-700") +
            " text-center text-xl rounded-full flex justify-center items-center hover:shadow-md duration-200 transition-all h-20 w-44  md:h-16 md:w-16 sm:h-14 sm:w-14  2xl:scale-125 origin-bottom-right"
          }
        >
          {onEvent === 0 ? (
            <>
              <AiOutlineClockCircle size={40} className="hidden md:block" />
              <h1 className="md:hidden">รับสมัครเร็วๆนี้</h1>
            </>
          ) : onEvent === 1 ? (
            <>
              <TbEdit size={30} />
              <h1 className="md:hidden">&nbsp;Register</h1>
            </>
          ) : onEvent === 2 ? (
            <>
              <FaCheck size={20} className="" />
              <h1 className="md:hidden">&nbsp;ยืนยันสิทธิ์</h1>
            </>
          ) : (
            <>
              <FaLightbulb size={30} className="" />
              <h1 className="md:hidden">&nbsp;ผลงานน้องๆ</h1>
            </>
          )}
        </button>
      </motion.div>
    </>
  );
};

export default RegisterBtn;
