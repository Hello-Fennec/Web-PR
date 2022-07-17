import { motion } from "framer-motion";

const Floating = (props) => (
  <motion.div
    animate={{ y: -10 }}
    transition={{ duration: .7,yoyo: Infinity}}
  >
    {props.children}
  </motion.div>
);

export default Floating;
