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
      className="w-[36rem] h-80 bg-gray-500"
    ></motion.a>
  );

  const Unplayable = () => <div className="w-[90%] h-96  bg-gray-500"></div>;
  return (
    <PageAnimation>
      <div className="flex flex-col justify-center items-center">
        {isMobile ? <Unplayable /> : <Playable />}
      </div>
    </PageAnimation>
  );
}
