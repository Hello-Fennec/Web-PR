import PageAnimation from "../../components/PageAnimation";
import { motion } from "framer-motion";

function About() {
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
