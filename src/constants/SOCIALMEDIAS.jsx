import { FaFacebook, FaInstagram } from "react-icons/fa";

const SOCIALMEDIAS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: <FaFacebook size="40" />,
    hoverColor: "hover:bg-[#1778F2]",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: <FaInstagram size="40" />,
    hoverColor: "hover:bg-gradient-to-tr hover:from-amber-400 hover:via-red-500 hover:to-purple-600",
  },
];

export default SOCIALMEDIAS;
