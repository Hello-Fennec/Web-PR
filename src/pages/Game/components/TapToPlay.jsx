import React from "react";
import { motion } from "framer-motion";
import PageAnimation from "../../../components/PageAnimation";
import ImgContainer from "../../../components/ImgContainer";
import TapToPlayBtn from "../../../assets/images/Game/TapToPlayBtn.webp";
import Fennec1 from "../../../assets/images/Game/IMG_5392.webp";
import Fennec2 from "../../../assets/images/Game/IMG_5391.webp";
import WoodenPlank from "../../../assets/images/Game/WoodenPlank.webp";

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
        href="https://helloworldfennec-game.vercel.app/"
        // target="_blank"
        className="w-[50rem] h-[30rem]  "
      >
        <ImgContainer src={TapToPlayBtn} className="w-full h-full" />
      </motion.a>
    </div>
  );
  const Unplayable = () => (
    <div className="w-screen flex flex-col justify-center items-center">
      <img
        src={WoodenPlank}
        className="w-[90%] max-w-[50rem] h-[28rem] absolute -rotate-3"
      />
      <div className="w-[90%] max-w-[50rem] h-[28rem]">
        <ImgContainer
          src={Fennec1}
          className="w-[10rem] h-[10rem] absolute left-[75vw] md:left-auto md:right-0  translate-y-80 "
        />
        <ImgContainer
          src={Fennec2}
          className="w-[10rem] h-[10rem] absolute left-15 md:left-5 -translate-y-16"
        />

        <div className="w-full h-full flex flex-col p-10 items-center justify-center text-white">
          <h1 className="text-2xl font-bold mb-5 z-10">
            แจ้งข่าวเกี่ยวกับเกมของเว็บไซต์ค่าย
          </h1>
          <p className="z-10">
            เกมนี้สามารถเล่นได้ในเครื่องคอมพิวเตอร์ หรือโน้ตบุ๊คเท่านั้น
          </p>
          <br />
          <p className="z-10">ขออภัยในความไม่สะดวกน้าาา</p>
        </div>
      </div>
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
