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
} from "../../Data/EVENTS";

const Events = () => {
  return (
    <PageAnimation>
      <div className="w-full flex space-x-5 justify-around">
        <div className="w-11/12 max-w-[40rem] bg-gray-500"></div>
        <div className="w-[35rem]  flex flex-col space-y-5">
          <div
            className="w-1 h-[30rem] absolute
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
            title={"ประกาศผลการสมัคร"}
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
    </PageAnimation>
  );
};

export default Events;
