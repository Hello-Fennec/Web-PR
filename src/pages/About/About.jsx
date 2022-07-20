import PageAnimation from "../../components/PageAnimation";
import { motion } from "framer-motion";
import { useEffect } from "react";

function About() {
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
    <PageAnimation>
      <motion.div
        initial={{
          rotate: -360,
        }}
        whileInView={{
          rotate: 0,
          x: 400,
        }}
        transition={{duration: 3 ,delay: .5 }}
        className="h-56 w-56 bg-orange-500 "
      ></motion.div>
    </PageAnimation>
  );
}

export default About;
