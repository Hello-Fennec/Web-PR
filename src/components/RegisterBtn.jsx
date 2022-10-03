import React from "react";
import { TbEdit } from "react-icons/tb";
import { AiOutlineClockCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const RegisterBtn = () => {
  const today = new Date();
  const registerDay = new Date("2022-10-07");
  const onRegister = today >= registerDay;
  const registerBtnVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: { duration: 0.5, repeat: Infinity },
    },
    whileHover: { scale: 1.05 },
  };
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
            window.open("https://forms.gle/16JsWhnKX6ecjCpTA", "_blank");
          }}
          disabled={!onRegister}
          className={
            (onRegister ? "bg-[#a15d00] hover:bg-[#ca8018]" : "bg-slate-700") +
            " text-center text-xl rounded-full flex justify-center items-center hover:shadow-md duration-200 transition-all h-20 w-44  md:h-16 md:w-16 sm:h-14 sm:w-14  2xl:scale-125 origin-bottom-right"
          }
        >
          {onRegister ? (
            <>
              <TbEdit size={30} />
              <h1 className="md:hidden">&nbsp;Register</h1>
            </>
          ) : (
            <>
              <AiOutlineClockCircle size={40} className="hidden md:block"/>

              <h1 className="md:hidden">รับสมัครเร็วๆนี้</h1>
            </>
          )}
        </button>
      </motion.div>
    </>
  );
};

export default RegisterBtn;
