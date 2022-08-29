import FrontEnd from "../assets/images/Teams/Front-end.png";
// import GameDesign from '../assets/images/Teams/GameDesign.png';
import GameDev from "../assets/images/Teams/GameDev.png";
import Infra from "../assets/images/Teams/Infra.png";
import WebDesign from "../assets/images/Teams/WebDesign.png";

import FrontEndThumbnail from "../assets/images/Teams/Front-endThumbnail.png";
import GameDevThumbnail from "../assets/images/Teams/GameDevThumbnail.png";
import InfraThumbnail from "../assets/images/Teams/InfraThumbnail.png";
import WebDesignThumbnail from "../assets/images/Teams/WebDesignThumbnail.png";

const TEAMS = [
  {
    name: "Front-end",
    description:
      "Front-end is the term used to describe the part of a website that is responsible for the visual presentation of the content. It includes the HTML, CSS, and JavaScript code that is used to display the content on the screen.",
    image: FrontEnd,
    thumbnail: FrontEndThumbnail,
  },
  {
    name: "Web design",
    description: `ฝ่าย Web Design จะมีการปูพื้นฐานเกี่ยวกับการออกแบบ
การจัดองค์ประกอบสำหรับการออกแบบ การใช้งานโปรแกรมสำหรับการออกแบบ💻
และรวมไปถึงเนื้อหาอื่น ๆ ที่น่าสนใจอีกมากมาย เพื่อต่อยอดไปสู่การออกแบบ Website
(แอบกระซิบว่า จะมีการทำ Project ที่น้อง ๆ จะได้ทำร่วมกับเพื่อน ๆ ฝ่ายอื่น ๆ อีกด้วยนะ)
`,
    image: WebDesign,
    thumbnail: WebDesignThumbnail,
  },
  {
    name: "Game development",
    description: `ในฝ่าย Game Development น้อง ๆ จะได้เรียนรู้เกี่ยวกับกระบวนการสร้างเกม
    ตั้งแต่พื้นฐาน ว่าเกมมีการออกแบบอย่างไร และเรียนรู้เครื่องมือต่าง ๆ โดยจะมีการสอนในเรื่องของ JavaScript และตัวช่วยในการสร้างเกมด้วย JavaScript อย่าง Phaser
    รวมถึง Version Control อย่าง Git เพื่อที่จะทำให้น้อง ๆ ได้เรียนรู้ในการทำงานร่วมกันอย่างมีประสิทธิภาพมากขึ้น โดยหลังจากที่เรียนจบแล้ว จะมี Project ให้น้อง ๆ ได้ลองสร้างเกมขึ้นมาร่วมกับเพื่อนในทีมฝ่ายต่าง ๆ ผ่านโจทย์จากพี่ ๆ เพื่อมานำเสนอให้พี่ ๆ และเพื่อนในทีมอื่น ในวันสุดท้ายของโครงการด้วยนะ    
      `,
    image: GameDev,
    thumbnail: GameDevThumbnail,
  },
  // {
  //   name: "Game design",
  //   description:
  //     "Game design is the process of creating a game that is visually appealing and easy to use. It is the process of creating a website that is visually appealing and easy to use.",
  //   image: GameDesign,
  // },
  {
    name: "Infrastructure",
    description: `น้อง ๆ เคยสงสัยกันไหมว่าหลังจากที่เราสร้าง Website เสร็จแล้ว
      เราจะทำให้คนอื่น ๆ เข้ามาเยี่ยมชมเว็บไซต์ของเราได้อย่างไร ?
      โดยในฝ่าย Infrastructure เราจะมีการสอนน้อง ๆ เกี่ยวกับการใช้เครื่องมือต่าง ๆ
      ที่จะให้ทุกคนสามารถเข้าถึง Website ของเราได้ผ่าน Domain
      เพื่อที่น้องจะได้นำความรู้ต่าง ๆ ไปต่อยอดในการทำ Project ร่วมกับเพื่อน ๆ ในทีม
      `,
    image: Infra,
    thumbnail: InfraThumbnail,
  },
];

export default TEAMS;
