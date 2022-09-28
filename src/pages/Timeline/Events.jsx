import React from "react";
import PageAnimation from "../../components/PageAnimation";
import Event from "./components/Event";
import {
  today,
  registerDay,
  announceDay,
  fennecDay,
  isPassed,
  allEvents,
  graduationDay,
} from "../../constants/EVENTS";
const Events = () => {
  return (
    <PageAnimation>
      <div className="w-full  p-5 flex space-x-20 lg:space-x-0 justify-center 2xl:scale-110  ">
        <div className="lg:hidden w-[50vw] bg-[#a15d00] rounded-2xl" />
        <div className=" flex flex-col space-y-7 lg:scale-125 md:scale-100 origin-center">
          <div
            className="w-[1.5px] h-[33rem] absolute
            -z-0 ml-12 mt-1 bg-gray-500"
          ></div>
          <Event
            date={7}
            month={"ต.ค."}
            title={"เปิดรับสมัคร"}
            description={"เฟ้นหาเฟนเนคตัวน้อย"}
            descriptionLine2={"เข้าสู่โรงเรียน HelloWorld !"}
            isPassed={isPassed(today, registerDay)}
          />
          <Event
            date={25}
            month={"ต.ค."}
            title={"ประกาศผล"}
            description={"ประกาศรายชื่อเหล่าเฟนเนค"}
            descriptionLine2={"ที่ได้รับคัดเลือก !"}
            isPassed={isPassed(today, announceDay)}
          />
          <Event
            date={29}
            month={"ต.ค."}
            title={"Fennec day"}
            description={"โรงเรียนเปิดแล้ว"}
            descriptionLine2={" ได้เวลาฝึกฝนทักษะ !"}
            isPassed={isPassed(today, fennecDay)}
          />
          <Event
            date={25}
            month={"พ.ย."}
            title={"Graduation"}
            description={"จบการศึกษาแล้ว ! ไชโย"}
            isPassed={isPassed(today, graduationDay)}
          />
        </div>
      </div>
    </PageAnimation>
  );
};

export default Events;
