import AudioToggle from "./AudioToggle";
import SocialMedia from "./SocialMedia";

const BottomFixedLayout = () => {
  return (
    <div
      className={
        "fixed bottom-0 flex justify-between p-10 w-full sm:px-3 sm:pb-20"
      }
    >
      <SocialMedia />
      <AudioToggle />
    </div>
  );
};

export default BottomFixedLayout;
