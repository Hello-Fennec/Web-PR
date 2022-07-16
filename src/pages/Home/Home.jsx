import { useEffect } from "react";
import ScrollLabel from "./components/ScrollLabel";
import Logo from "./components/Logo";

function Home() {

    // When page is loaded
  useEffect(() => {
    const scrollLabel = document.getElementsByClassName("ScrollDown");
    
    setTimeout(() => {
      scrollLabel[0].style.opacity = 1;
    }, 2000); // set opacity of the scroll down label 
  }, []);

  return (
    <div src={""} className="w-screen h-full absolute top-0 left-0 overflow-hidden bg-red-300">
      <Logo/>
      <ScrollLabel />
    </div>
  );
}

export default Home;
