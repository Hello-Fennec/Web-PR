import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Teams from "../pages/Teams/Teams";
import Faqs from "../pages/FAQs/FAQs";
import Game from "../pages/Game/Game";
import Events from "../pages/Timeline/Events";

// import HomeBG from "../assets/images/Backgrounds/Home.jpg";
// import AboutBG from "../assets/images/Backgrounds/About.jpg";
import TeamsBG from "../assets/images/Backgrounds/Teams.png";
import FaqsBG from "../assets/images/Backgrounds/Faqs.png";
import FennecPattern from "../assets/images/Backgrounds/FennecPattern.png";
// import GameBG from "../assets/images/Backgrounds/Game.jpg";
// import EventsBG from "../assets/images/Backgrounds/Game.jpg";

const oddBG = "#ffffff";
const evenBG = "#ffe394";

const PAGES = [
  {
    name: "Home",
    component: <Home />,
    // background: HomeBG,
    connector: {
      width: "100%",
      height: "7vh",
      background: `linear-gradient(to bottom, #e6a45a, ${evenBG} )`,
      position: "absolute",
    },
  },
  {
    name: "About us",
    component: <About />,
    background: FennecPattern,
    connector: {
      width: "100%",
      height: "5vh",
      clipPath: "polygon(100% 0, 0 0, 0 100%)",
      background: evenBG,
      position: "absolute",
    },
  },
  {
    name: "Teams",
    component: <Teams />,
    background: TeamsBG,
    connector: {
      width: "100%",
      height: "8vh",
      clipPath: "polygon(100% 0, 0 0%, 100% 100%)",
      background: "#fbc76a",
      position: "absolute",
    },
  },
  {
    name: "Events",
    component: <Events />,
    background: FennecPattern,
    connector: {
      width: "100%",
      height: "5vh",
      clipPath: "polygon(100% 0, 0 0%, 100% 100%)",
      background: evenBG,
      position: "absolute",
    },
  },
  {
    name: "FAQs",
    component: <Faqs />,
    background: FaqsBG,
    connector: {
      width: "100%",
      height: "5vh",
      clipPath: "polygon(100% 0, 0 0, 0 100%)",
      background: "black",
      position: "absolute",
    },
  },
  {
    name: "Game",
    component: <Game />,
    background: FennecPattern,
    // background: GameBG,
    connector: {},
  },
];

export default PAGES;
