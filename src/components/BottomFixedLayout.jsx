import AudioToggle from "./AudioToggle";
import SocialMedia from "./SocialMedia";

const BottomFixedLayout = ({isMobile}) => {
  return (
    <div
      id="bottomFixedLayout"
      className={
        " fixed -bottom-7 opacity-0 flex justify-between p-10 w-full sm:px-3 sm:pb-20 duration-700 transition-all ease-in-out"
      }
    >
      <SocialMedia />
      {isMobile?null:<AudioToggle />}
    </div>
  );
};

export default BottomFixedLayout;
