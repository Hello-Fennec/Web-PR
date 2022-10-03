import ScrollLabel from "./components/ScrollLabel";
import Logo from "./components/Logo";
import ImgContainer from "../../components/ImgContainer";
// import Background from "../../assets/images/Home/Background.png";
import Dunes from "../../assets/images/Home/Dunes.png";
import Floor from "../../assets/images/Home/Floor.png";
import Front_Floor from "../../assets/images/Home/Front-Floor.png";
import Sun from "../../assets/images/Home/Sun.png";
import FlyingBird from "../../assets/images/Home/FlyingBird.webp";
import Cloud from "../../assets/images/Home/Cloud.webp";
import FennecBack from "../../assets/images/Fennec_Mascot/Fennec_back.png";

import Cactus1 from "../../assets/images/Home/cactus1.png";
import Cactus2 from "../../assets/images/Home/cactus2.png";
import React from "react";
// import Cactus3 from "../../assets/images/Home/cactus3.png";
// import Cactus4 from "../../assets/images/Home/cactus4.png";

import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <ScrollLabel />
      <div className="w-screen h-screen overflow-hidden absolute top-0 left-0 -z-10 bg-gradient-to-b from-[#ffc23e] via-[#ff8b2d] to-[#ff5739]">
        <ImgContainer
          data-speed={7}
          src={Sun}
          position="bottom"
          className="scroll absolute bottom-[50vh] left-0 md:top-10 md:-left-10 w-96 h-96 md:w-60 md:h-60 2xl:scale-125"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <ImgContainer
            data-speed={6}
            src={Cloud}
            size="cover"
            position="top center"
            className="scroll absolute top-[30vh] left-0  w-full  xl:top-32 md:h-[40vw] min-h-[20rem]  2xl:scale-125"
          />
        </motion.div>
        <ImgContainer
          data-speed={8}
          src={FlyingBird}
          position="bottom"
          className="scroll absolute top-[10vh] right-[10vw] md:hidden w-24 h-24 2xl:scale-125"
        />
        <ImgContainer
          data-speed={5}
          src={Dunes}
          size="cover"
          position="bottom left"
          className="scroll absolute bottom-0 right-0 w-full h-[36vw] min-h-[28rem] max-h-[42rem]  self-end "
        />
        <ImgContainer
          data-speed={3}
          src={Floor}
          size="cover"
          position="bottom"
          className="scroll absolute bottom-0 right-0 w-full h-[30vw] min-h-[22rem] max-h-[32rem]  self-end "
        />
        <ImgContainer
          data-speed={3}
          src={Cactus2}
          position="bottom"
          className="scroll absolute bottom-[15vw] sm:bottom-32 right-[12%] w-[8vw] h-[34rem] min-w-[4rem] max-w-[8rem] 2xl:scale-125"
        />
        <ImgContainer
          data-speed={1.5}
          src={Front_Floor}
          size="cover"
          position="bottom"
          className="scroll absolute bottom-0 right-0 w-full h-[26vw] min-h-[20rem] max-h-[30rem] max-w-[117rem]  self-end "
        />
        <motion.div
          animate={{ rotate: [0, -1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute right-10 bottom-[-4rem] origin-bottom-left md:bottom-[-2rem]  md:-right-[3rem] "
        >
          <ImgContainer
            data-speed={0.5}
            src={FennecBack}
            position="right"
            className="scroll w-[50rem] h-[32vw] md:min-h-[16rem] min-h-[24rem]"
          />
        </motion.div>
        <ImgContainer
          data-speed={1.5}
          src={Cactus1}
          position="bottom"
          className="scroll absolute bottom-5 left-[8%] w-[12vw] h-[34rem] min-w-[6rem] 2xl:scale-125"
        />
      </div>

      <Logo className="-z-50" />
    </>
  );
}

export default Home;
