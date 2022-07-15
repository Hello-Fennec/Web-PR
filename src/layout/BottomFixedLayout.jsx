import AudioToggle from "../components/AudioToggle";
import SocialMedia from "../components/SocialMedia";

const BottomFixedLayout = ({ isMobile }) => {
  return (
    <div id="bottomFixedLayout" className="opacity-0 duration-500 ">
      <SocialMedia />
      {isMobile ? null : <AudioToggle />}
    </div>
  );
};

export default BottomFixedLayout;
