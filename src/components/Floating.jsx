import { motion } from "framer-motion";

const Floating = (props) => (
  <motion.div
    animate={{ y: -10 }}
    transition={{ duration: .7,repeat: Infinity,repeatType: "reverse" }}
  >
    {props.children}
  </motion.div>
);

export default Floating;
