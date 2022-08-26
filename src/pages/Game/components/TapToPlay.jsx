import React from "react";
import { motion } from "framer-motion";
import PageAnimation from "../../../components/PageAnimation";

export default function TapToPlay() {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 0);

  const Playable = () => (
    <div className="flex flex-col justify-center items-center">
      <motion.a
        whileHover={{
          scale: [1, 1.05],
          rotate: [0, 1, -1],
          transition: {
            duration: 0.3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        href="#"
        className="w-[36rem] h-80 bg-gray-500 2xl:scale-125"
      ></motion.a>
    </div>
  );

  const Unplayable = () => (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="w-[90%] max-w-[50rem] h-[32rem]  bg-gray-500  2xl:scale-125"></div>
    </div>
  );
  return isMobile ? (
      <Unplayable />
  ) : (
    <PageAnimation>
      <Playable />
    </PageAnimation>
  );
}