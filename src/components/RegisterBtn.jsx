import React from "react";
import { TbEdit } from "react-icons/tb";

const RegisterBtn = () => {
  return (
    <div className="SocialMedia fixed bottom-0 right-0 flex mb-10 mr-10 md:mb-5 md:mr-5 sm:mb-3 sm:mr-3 text-white space-x-4 sm:space-x-2 z-50">
      <a
        href="#"
        target="_blank"
        className="bg-[#a15d00] text-center text-xl rounded-full flex justify-center items-center 
        hover:-translate-y-1 hover:bg-red-500 duration-200 transition-all 
        h-20 w-44  md:h-16 md:w-16 sm:h-14 sm:w-14 "
      >
        <TbEdit size={30} />
        <h1 className="md:hidden">&nbsp;Register</h1>
      </a>
    </div>
  );
};

export default RegisterBtn;
