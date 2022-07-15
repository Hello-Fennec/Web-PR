import SOCIALMEDIAS from "../Data/SOCIALMEDIAS";

const SocialMedia = () => {
  return (
    <div className="SocialMedia fixed bottom-0 left-0 flex mb-10 ml-10 md:mb-5 md:ml-5 sm:mb-3 sm:ml-3 text-white space-x-7 sm:space-x-2 ">
      {SOCIALMEDIAS.map((item, index) => {
        return (
          <a
            key={index}
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
