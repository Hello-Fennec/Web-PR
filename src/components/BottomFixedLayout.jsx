import AudioToggle from "./AudioToggle";
import SocialMedia from "./SocialMedia";

const BottomFixedLayout = ({isMobile}) => {
  return (
    <div
      className={
        "fixed bottom-0 flex justify-between p-10 w-full sm:px-3 sm:pb-20"
      }
    >
      <SocialMedia />
      {isMobile?null:<AudioToggle />}
    </div>
  );
};

export default BottomFixedLayout;
