import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Teams from "../pages/Teams/Teams";
import Faqs from "../pages/FAQs/FAQs";
import Game from "../pages/Game/Game";
import Events from "../pages/Timeline/Events";

import HomeBG from "../assets/images/Backgrounds/Home.jpg";
import AboutBG from "../assets/images/Backgrounds/About.jpg";
import TeamsBG from "../assets/images/Backgrounds/Teams.jpg";
import FaqsBG from "../assets/images/Backgrounds/Faqs.jpg";
import GameBG from "../assets/images/Backgrounds/Game.jpg";
import EventsBG from "../assets/images/Backgrounds/Game.jpg";

const oddBG = "#ffffff";
const evenBG = "#F2E2BB";

const PAGES = [
  {
    name: "Home",
    component: <Home />,
    background: HomeBG,
    connector: {
      width: "100%",
      height: "7vh",
      background: `linear-gradient(to bottom, #ffffff, ${evenBG} )`,
      position: "absolute",
    },
  },
  {
    name: "About us",
    component: <About />,
    background: AboutBG,
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
      height: "5vh",
      clipPath: "polygon(100% 0, 0 0%, 100% 100%)",
      background: oddBG,
      position: "absolute",
    },
  },
  {
    name: "Events",
    component: <Events />,
    background: EventsBG,
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
      background: oddBG,
      position: "absolute",
    },
  },
  {
    name: "Game",
    component: <Game />,
    background: GameBG,
    connector: {},
  },
];

export default PAGES;
