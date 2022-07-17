import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Teams from "../pages/Teams/Teams";
import Faqs from "../pages/FAQs/FAQs";
import Game from "../pages/Game/Game";

import HomeBG from "../assets/images/Backgrounds/Home.jpg";
import AboutBG from "../assets/images/Backgrounds/About.jpg";
import TeamsBG from "../assets/images/Backgrounds/Teams.jpg";
import FaqsBG from "../assets/images/Backgrounds/Faqs.jpg";
import GameBG from "../assets/images/Backgrounds/Game.jpg";


const PAGES = [ 
    {
      name: "Home",
      component: Home ,
      background: HomeBG,
    },
    {
      name: "About",
      component: About ,
      background: AboutBG,
    },
    {
      name: "Teams",
      component: Teams ,
      background: TeamsBG,
    },
    {
      name: "FAQs",
      component: Faqs ,
      background: FaqsBG,
    },
    {
      name: "Game",
      component: Game ,
      background: GameBG,
    }, 
  ]; 

    export default PAGES;