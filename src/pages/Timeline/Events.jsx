import React from "react";
import PageAnimation from "../../components/PageAnimation";
import Event from "./components/Event";
import { ListOfEvents, onEvent } from "../../constants/EVENTS";
const Events = () => {

  return (
    <PageAnimation>
      <div className="w-full  p-5 flex space-x-20 lg:space-x-0 justify-center 2xl:scale-110  ">
        <div className="lg:hidden w-[50vw] bg-[#a15d00] rounded-2xl" />
        <div className=" flex flex-col space-y-7 lg:scale-125 md:scale-100 origin-center">
          <div
            className="w-1 h-[33rem] absolute
            -z-0 ml-12 mt-1 bg-gray-500"
          >
            <div
              className={
                (onEvent === 1
                  ? "h-1/5"
                  : onEvent === 2
                  ? "h-2/5"
                  : onEvent === 3
                  ? "h-3/5"
                  : onEvent === 4
                  ? "h-full"
                  : "h-0") + ` bg-[#a15d00] w-full bg-blend-overlay blend `
              }
            />
          </div>

          {ListOfEvents.map((event, index) => {
            return (
              <Event
                key={index}
                title={event.title}
                date={event.date.getDate()}
                month={event.thaiMonth}
                description={event.description}
                descriptionLine2={event.descriptionLine2}
                isPassed={event.isPassed}
              />
            );
          })}
        </div>
      </div>
    </PageAnimation>
  );
};

export default Events;
