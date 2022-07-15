import AudioToggle from "../components/AudioToggle";
import SocialMedia from "../components/SocialMedia";

const BottomFixedLayout = ({isMobile}) => {
  return (
    <div
      id="bottomFixedLayout"
      className={
        " fixed bottom-0 opacity-0 flex justify-between p-10 pt-0 w-full sm:px-3 sm:py-3  duration-700 transition-all ease-in-out"
      }
    >
      <SocialMedia />
      {isMobile?null:<AudioToggle />}
    </div>
  );
};

export default BottomFixedLayout;
