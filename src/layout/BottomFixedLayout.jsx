// import AudioToggle from "../components/AudioToggle";
import SocialMedia from "../components/SocialMedia";
import { motion } from "framer-motion";
import RegisterBtn from "../components/RegisterBtn";

const BottomFixedLayout = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <SocialMedia />
      {/* {isMobile ? null : <AudioToggle />} */}
      <RegisterBtn/>
    </motion.div>
  );
};

export default BottomFixedLayout;
