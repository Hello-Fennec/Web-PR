import { motion } from "framer-motion";
import PageAnimation from "../../components/PageAnimation";

function Game() {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 0);

  const Playable = () => (
    <div className="flex flex-col justify-center items-center">
      <motion.a
        whileHover={{
          scale: [1, 1.3, 1.1],
          transition: { duration: 0.5, ease: "easeInOut" },
          rotate: [0, -20, 15, 0],
        }}
        href="#"
        className="w-[36rem] h-80 bg-gray-500"
      ></motion.a>
    </div>
  );

  const Unplayable = () => (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[90%] h-96  bg-gray-500"></div>
    </div>
  );
  return (
    <PageAnimation>{isMobile ? <Unplayable /> : <Playable />}</PageAnimation>
  );
}

export default Game;
