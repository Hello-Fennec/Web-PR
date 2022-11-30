import React from "react";
import { motion } from "framer-motion";
import githubIcon from "../assets/imgs/GitHub.png";
import figmaIcon from "../assets/imgs/Figma.png";
import Badge from "./badge";

const LinkBtn = ({ img, link, bgcolor, alt }) => {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          console.log("GH");
          e.stopPropagation();
          window.open(link);
        }}
        className={(bgcolor || "bg-slate-400") + " rounded-full w-8 h-8"}
      >
        <img src={img} alt={alt} />
      </motion.button>
    </>
  );
};

const Card = ({
  index,
  groupNum,
  name,
  link,
  img,
  github,
  figma,
  categories,
  cardHovered,
  setCardHovered,
}) => {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          console.log("Project");
          window.open(link);
        }}
        onMouseEnter={() => {
          setCardHovered(index);
        }}
        onMouseLeave={() => {
          setCardHovered(-1);
        }}
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={
          // (cardHovered !== -1 && cardHovered !== index && "grayscale") +
          " w-full h-60 rounded-3xl flex flex-col justify-end "
        }
      >
        <div className="p-[6px] flex flex-wrap ">
          {categories?.map(({ name, color },index) => {
            return <Badge key={index} name={name} color={color} />;
          })}
        </div>
        <div className="w-full bg-[#ffffffb2] text-black backdrop-blur-sm rounded-b-3xl flex items-center justify-between pt-2 pb-4 px-3">
          <div className="w-full flex-col">
            <div className="text-xs w-full text-left mb-1">
              Group {groupNum}
            </div>
            <div className="flex flex-row justify-between">
              <div className="font-bold text-left leading-5 mr-3">{name}</div>
              <div className="flex space-x-2">
                <LinkBtn
                  img={githubIcon}
                  link={github}
                  bgcolor={"bg-white"}
                  alt="GitHub repo"
                />
                {figma ? (
                  <LinkBtn img={figmaIcon} link={figma} alt="Figma design" />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </motion.button>
    </>
  );
};

export default Card;
