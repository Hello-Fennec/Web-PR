import React from "react";
import PageAnimation from "../../components/PageAnimation";
import Event from "./components/Event";
import ProgressBar from "../../assets/images/Events/ProgressBar.png";
import {
  today,
  registerDay,
  announceDay,
  fennecDay,
  isPassed,
  allEvents,
  graduationDay,
} from "../../constants/EVENTS";
const onEvent = allEvents.indexOf(today.toDateString()) + 1;
const Events = () => {
  return (
    <>
      <div className="w-full  p-5 flex space-x-20 md:space-x-0 justify-center 2xl:scale-125 ">
        <div className="md:hidden w-[50vw] bg-[#a15d00] rounded-2xl" />
        <div className=" flex flex-col space-y-7 ">
          <div
            className="w-1 h-[33rem] absolute
            -z-0 ml-11 bg-gray-600"
          >
            <div
              className={`bg-[#a15d00] w-full ${
                onEvent == 4 ? `h-full` : `h-${onEvent}/${allEvents.length + 1}`
              } bg-blend-overlay blend `}
            />
          </div>
          <Event
            date={15}
            month={"ต.ค."}
            title={"เปิดรับสมัคร"}
            description={"description"}
            isPassed={isPassed(today, registerDay)}
          />
          <Event
            date={25}
            month={"ต.ค."}
            title={"ประกาศผล"}
            description={"description"}
            isPassed={isPassed(today, announceDay)}
          />
          <Event
            date={29}
            month={"ต.ค."}
            title={"Fennec day"}
            description={"description"}
            isPassed={isPassed(today, fennecDay)}
          />
          <Event
            date={25}
            month={"พ.ย."}
            title={"Graduation"}
            description={"description"}
            isPassed={isPassed(today, graduationDay)}
          />
        </div>
      </div>
    </>
  );
};

export default Events;
