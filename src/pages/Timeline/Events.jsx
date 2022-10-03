import React from "react";
import PageAnimation from "../../components/PageAnimation";
import Event from "./components/Event";
import { ListOfEvents, onEvent } from "../../constants/EVENTS";
import ImgContainer from "../../components/ImgContainer";
import FennecLaptop from "../../assets/images/Events/Fennec_laptop_animation.gif";
import FennecGrad from "../../assets/images/Events/Fennec_grad_animation.gif";
import FennecSleep from "../../assets/images/Events/Fennec_sleeping_animation.gif";
import FennecLaptop2 from "../../assets/images/Events/Fennec_laptop_2.gif";
import FennecSchool from "../../assets/images/Events/Fennec_school.gif";

const fennecsActions = [
  FennecLaptop,
  FennecLaptop2,
  FennecSchool,
  FennecGrad,
  FennecSleep,
];
const Events = () => {
  return (
    <PageAnimation>
      <div className="w-full  p-5 flex space-x-20 lg:space-x-0 justify-center 2xl:scale-110  ">
        <ImgContainer
          src={
            fennecsActions[
              onEvent - 1 < 0 ? fennecsActions.length - 1 : onEvent - 1
            ]
          }
          className="lg:hidden w-[50vw]  rounded-2xl"
        />
        <div className=" flex flex-col space-y-7 lg:scale-125 md:scale-100 origin-center">
          <div
            className="w-1 h-[33rem] absolute
            -z-0 ml-12 mt-1 bg-gray-500 rounded-full"
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
