import React from "react";
import PageAnimation from "../../components/PageAnimation";
import Event from "./components/Event";
import {
  today,
  registerDay,
  announceDay,
  firstMeetDay,
  fennecDay,
  isPassed,
} from "../../constants/EVENTS";

const Events = () => {
  return (
    <>
      <div className="w-full p-5 flex space-x-5 justify-around">
        <div className="lg:hidden w-[35rem] bg-gray-500 rounded-2xl" />
        <div className="w-full  flex flex-col space-y-7">
          <div
            className="w-1 h-[33rem] absolute
            -z-10 ml-11"
            style={{
              background:
                "linear-gradient(0deg, rgba(107,114,128,0) 0%, rgba(107,114,128,1) 5%, rgba(107,114,128,1) 95%, rgba(107,114,128,0) 100%)",
            }}
          />
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
            title={"First meet"}
            description={"description"}
            isPassed={isPassed(today, firstMeetDay)}
          />
          <Event
            date={2}
            month={"พ.ย."}
            title={"Fennec day"}
            description={"description"}
            isPassed={isPassed(today, fennecDay)}
          />
        </div>
      </div>
    </>
  );
};

export default Events;
