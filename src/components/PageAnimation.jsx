import { motion } from "framer-motion";

const PageAnimation = (props) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.7,
      ease: "easeInOut",
      delay: 0.3,
    }}
  >
    {props.children}
  </motion.div>
);

export default PageAnimation;
