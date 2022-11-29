import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { registerBtnVariants } from "./RegisterBtn";

export default function ProjectLinkBtn() {
  return (
    <>
      <motion.div
      //   variants={registerBtnVariants}
        animate="animate"
        whileHover="whileHover"
        className=" fixed bottom-0  right-0 flex mb-10 mr-10 md:mb-5 md:mr-5 sm:mb-3 sm:mr-3 text-white space-x-4 sm:space-x-2 z-50 origin-center"
      >
        <button
          onClick={() => {}}
          className={
            "bg-[#a15d00] hover:bg-[#ca8018] text-center text-xl rounded-full flex justify-center items-center hover:shadow-md duration-200 transition-all h-20 w-44  md:h-16 md:w-16 sm:h-14 sm:w-14  2xl:scale-125 origin-bottom-right"
          }
        >
          <AiOutlineClockCircle size={40} className="hidden md:block" />
          <h1 className="md:hidden">ผลงานในโครงการ</h1>
        </button>
      </motion.div>
    </>
  );
}
