import { useEffect } from "react";
import ScrollLabel from "./components/ScrollLabel";
import Logo from "./components/Logo";
import PageAnimation from "../../components/PageAnimation";

function Home() {
  useEffect(() => {
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
      this.querySelectorAll(".mousemove").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }
  }, []);
  return (
    <>
      <PageAnimation>
        <div className="flex justify-center items-center">
          <Logo />
        </div>
      </PageAnimation>
      <ScrollLabel />
    </>
  );
}

export default Home;
