import SOCIALMEDIAS from "../constants/SOCIALMEDIAS";

const SocialMedia = () => {
  return (
    <div className=" z-50 fixed bottom-0 left-0 flex mb-10 ml-10 md:mb-5 md:ml-5 sm:mb-3 sm:ml-3 text-white space-x-4 sm:space-x-2 2xl:scale-125 origin-bottom-left">
      {SOCIALMEDIAS.map((item, index) => {
        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            className={
              "bg-[#a15d00] rounded-full hover:-translate-y-1 hover:shadow-md duration-200 flex  justify-center items-center transition-all h-20 w-20 md:h-16 md:w-16 sm:h-14 sm:w-14 "
            }
          >
            {item.icon}

            <div
              className={
                "opacity-0 hover:opacity-100 h-20 w-20 absolute top-0 flex justify-center items-center rounded-full duration-200 transition-all md:h-16 md:w-16 sm:h-14 sm:w-14 " +
                item.hoverColor
              }
            >
              {item.icon}
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
