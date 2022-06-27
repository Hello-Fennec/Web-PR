import { AiOutlineHome } from "react-icons/ai";
import { BsCodeSlash } from 'react-icons/bs';
import { MdQuestionAnswer, MdFormatQuote } from "react-icons/md";
import { IoLogoGameControllerA } from "react-icons/io";

const PAGES = [
    {
      name: "Home",
      link: "/",
      icon: <AiOutlineHome size={42} />,
    },
    {
      name: "About",
      link: "/about",
      icon: <MdFormatQuote size={42} />,
    },
    {
      name: "Teams",
      link: "/teams",
      icon: <BsCodeSlash size={42} />,
    },
    {
      name: "FAQs",
      link: "/faqs",
      icon: <MdQuestionAnswer size={42} />,
    },
    {
      name: "Game",
      link: "/game",
      icon: <IoLogoGameControllerA size={42} />,
    },
  ];

    export default PAGES;