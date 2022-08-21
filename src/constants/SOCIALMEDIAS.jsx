import { FaFacebook, FaInstagram } from "react-icons/fa";

const SOCIALMEDIAS = [
  {
    name: "Facebook",
    username:"SIT HelloWorld",
    url: "https://www.facebook.com/SITHelloWorld",
    icon: <FaFacebook size="40" />,
    color: "#1778F2",
    hoverColor: "hover:bg-[#1778F2]",
  },
  {
    name: "Instagram",
    username:"sithelloworld",
    url: "https://www.instagram.com/",
    icon: <FaInstagram size="40" />,
    color:
      "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
    hoverColor:
      "hover:bg-gradient-to-tr hover:from-amber-400 hover:via-red-500 hover:to-purple-600",
  },
];

export default SOCIALMEDIAS;
