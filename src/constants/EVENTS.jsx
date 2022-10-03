const today = new Date();
const registerDay = new Date("2022-10-07");
const announceDay = new Date("2022-10-25");
const fennecDay = new Date("2022-10-29");
const graduationDay = new Date("2022-11-26");
function isPassed(date1, date2) {
  return date1 >= date2;
}

export const ListOfEvents = [
  {
    title: "เปิดรับสมัคร",
    date: registerDay,
    thaiMonth: "ต.ค.",
    description: "เฟ้นหาเฟนเนคตัวน้อย",
    descriptionLine2: "เข้าสู่โรงเรียน HelloWorld !",
    isPassed: isPassed(today, registerDay),
  },
  {
    title: "ประกาศผล",
    date: announceDay,
    thaiMonth: "ต.ค.",
    description: "ประกาศรายชื่อเหล่าเฟนเนค",
    descriptionLine2: "ที่ได้รับคัดเลือก !",
    isPassed: isPassed(today, announceDay),
  },
  {
    title: "Fennec day",
    date: fennecDay,
    thaiMonth: "ต.ค.",
    description: "โรงเรียนเปิดแล้ว",
    descriptionLine2: " ได้เวลาฝึกฝนทักษะ !",
    isPassed: isPassed(today, fennecDay),
  },
  {
    title: "Graduation",
    date: graduationDay,
    thaiMonth: "พ.ย.",
    description: "จบการศึกษาแล้ว ! ไชโย",
    descriptionLine2: "",
    isPassed: isPassed(today, graduationDay),
  },
];

const allEvents = Array.from(ListOfEvents.map((event) => event.date));

export const onEvent =
  allEvents.filter((event) => isPassed(today, event)).length ;
