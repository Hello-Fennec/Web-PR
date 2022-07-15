import AudioToggle from "../components/AudioToggle";
import SocialMedia from "../components/SocialMedia";

const BottomFixedLayout = ({ isMobile }) => {
  return (
    <div id="bottomFixedLayout">
      <SocialMedia />
      {isMobile ? null : <AudioToggle />}
    </div>
  );
};

export default BottomFixedLayout;
