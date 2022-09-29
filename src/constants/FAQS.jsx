const FAQS = [
  {
    title: "รูปแบบการสอน",
    question: "รูปแบบการเรียนการสอนในโครงการเป็นอย่างไร",
    answer: (
      <p>
        ในปีนี้ เราจะมีการจัดโครงการในรูปแบบ Hybrid ที่มีทั้งการเรียนในรูปแบบ
        on-site และ online โดยโครงการจะเริ่มตั้งแต่วันที่ 29 ตุลาคม 2565 จนถึง
        25 พฤศจิกายน 2565
        <br />
        <br />
        ในทุก ๆ วันพุธ เวลา 17.30 น. - 20.00 น.
        <br />
        และวันเสาร์ เวลา 13.30 น. - 16.30 น.
      </p>
    ),
  },
  {
    title: "สถานที่จัดกิจกรรม",
    question: "สถานที่จัดกิจกรรมคือที่ไหน",
    answer: (
      <p>
        การเรียนการสอนแบบ on-site จะจัดขึ้นที่ อาคาร LX (Learning Exchange
        Building) ชั้น 11
        <br />
        <br />
        และในส่วนของ online เราจะจัดการเรียนการสอนผ่านโปรแกรม Microsoft Teams
        ของโครงการ
      </p>
    ),
  },
  {
    title: "สิทธิ์เข้าร่วมโครงการ",
    question: "สมัครแล้วมีสิทธิ์เข้าร่วมโครงการทุกคนหรือไม่",
    answer: (
      <p>
        เนื่องจากโครงการ HelloWorld มีผู้ให้ความสนใจสมัครเข้ามาเป็นจำนวนมากในทุก
        ๆ ปี ทางโครงการจึงต้องมีการคัดเลือกน้อง ๆ
        ที่มีสิทธิ์เข้าร่วมโครงการในแต่ละสาขาที่เปิดรับสมัคร
      </p>
    ),
  },
  {
    title: "อุปกรณ์ที่จำเป็น",
    question: "อุปกรณ์ที่จำเป็นในการเข้าร่วมโครงการ",
    answer: (
      <p>
        อุปกรณ์ที่จำเป็นในโครงการของเราคือ “คอมพิวเตอร์” ซึ่งสามารถใช้ได้ทั้ง
        Laptop และ Desktop แต่ในการเรียนรูปแบบ on-site หากน้อง ๆ
        ไม่สะดวกที่จะนำคอมพิวเตอร์เอง ก็สามารถใช้ คอมพิวเตอร์
        ของมหาวิทยาลัยในห้องเรียนได้
        <br />
        <br />
        ในส่วนของโปรแกรมที่น้อง ๆ จะต้องติดตั้งนั้น
        ในแต่ละฝ่ายจะมีการใช้โปรแกรมประกอบการเรียนการสอนที่แตกต่างกัน โดยพี่ ๆ
        จะมีการแจ้งกับน้อง ๆ อีกครั้ง
      </p>
    ),
  },
  {
    title: "พื้นฐานก่อนเข้าร่วม",
    question: "จำเป็นต้องมีพื้นฐานก่อนที่จะเข้าร่วมโครงการหรือไม่",
    answer: (
      <p>
        ไม่จำเป็นต้องมีพื้นฐาน เพราะพี่ ๆ ทุกฝ่ายจะสอนน้อง ๆ
        ตั้งแต่ความรู้พื้นฐาน หากน้อง ๆ มีข้อสงสัยก็สามารถสอบถามพี่ ๆ
        ได้ตลอดเวลา รับรองได้เลยว่าน้อง ๆ
        จะสนุกและเต็มเปี่ยมไปด้วยความรู้อย่างแน่นอน
      </p>
    ),
  },
  {
    title: "ข้อตกลงการเข้าร่วม",
    question: "จำเป็นต้องเข้าร่วมกิจกรรมทุกวันหรือไม่",
    answer: (
      <p>
        เนื่องจากเนื้อหาในการเรียนการสอนแต่ละครั้งมีความต่อเนื่องกัน น้อง ๆ
        จึงจำเป็นที่จะต้องเข้าร่วมโครงการให้ครบทุกวัน
        เพื่อความรู้ที่อัดแน่นและต่อเนื่อง
        <br /> <br />
        แต่หากมีธุระจริง ๆ ก็สามารถแจ้งที่พี่ ๆ ประจำสาขาของน้อง ๆ ได้
        แต่มีเงื่อนไขคือ น้อง ๆ ต้องเข้าร่วมกิจกรรมในโครงการมากกว่า 60%
        เพื่อรับชั่วโมงกิจกรรม
      </p>
    ),
  },
  // {
  //   title: "การรับชั่วโมงกิจกรรม",
  //   question: "เข้าร่วมโครงการแล้วจะได้ชั่วโมงกิจกรรมหรือไม่",
  //   answer: `ทางโครงการได้เตรียมชั่วโมงกิจกรรมไว้ให้กับน้อง ๆ ที่เข้าร่วมโครงการทุกคน แต่มีเงื่อนไขคือ น้อง ๆ ต้องเข้าร่วมกิจกรรมในโครงการมากกว่า
  //  60% ของจำนวนครั้งที่เรียนทั้งหมด โดยที่จะมีพี่ ๆ แต่ละฝ่ายคอยเช็กชื่อน้อง ๆ ทุกครั้งที่มีการเรียนการสอนในแต่ละวัน`,
  // },
];

export default FAQS;
