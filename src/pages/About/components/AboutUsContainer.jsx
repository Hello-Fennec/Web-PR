import { motion } from "framer-motion";
import ABOUTUS from "../../../constants/ABOUTUS";
import Textbox from "../../../assets/images/About/StoneSlab.webp";

// const textFading = {
//   hiddeni: { opacity: 0, y: 10 },
//   visible: { opacity: 1, y: 0, transition: { delay: 1.2 } },
// };

export default function AboutUsContainer() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div
        data-speed={1}
        className="mousemove text-white h-auto w-[95%] min-h-[24rem] max-w-[44rem] sm:px-8 sm:pt-14 sm:pb-24 p-12 pb-14 translate-x-0"
      >
        <h1
          className="text-2xl font-bold mb-5"
        >
          {ABOUTUS.title}
        </h1>
        <div
          className="text-left "
        >
          {ABOUTUS.content}
        </div>
        <img
          src={Textbox}
          className=" w-full h-full absolute -z-10 top-0 left-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}
