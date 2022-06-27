import SOCIALMEDIAS from "../constants/SOCIALMEDIA";

const SocialMedia = () => {
  return (
    <div className="SocialMedia flex left-0 text-white space-x-7 sm:space-x-2 ">
      {SOCIALMEDIAS.map((item, index) => {
        return (
          <a
            href={item.url}
            className="bg-black rounded-full flex justify-center items-center hover:-translate-y-1 duration-200 transition-all h-20 w-20 md:h-16 md:w-16 sm:h-14 sm:w-14"
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
