import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Teams from "../pages/Teams/Teams";
import Faqs from "../pages/FAQs/FAQs";
import Game from "../pages/Game/Game";

const PAGES = [ 
    {
      name: "Home",
      component: <Home />,
    },
    {
      name: "About",
      component: <About />,
    },
    {
      name: "Teams",
      component: <Teams />,
    },
    {
      name: "FAQs",
      component: <Faqs />,
    },
    {
      name: "Game",
      component: <Game />,
    }, 
  ]; 

    export default PAGES;