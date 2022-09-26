import FrontEnd from "../assets/images/Teams/Front-end.webp";
// import GameDesign from '../assets/images/Teams/GameDesign.webp';
import GameDev from "../assets/images/Teams/GameDev.webp";
import Infra from "../assets/images/Teams/Infra.webp";
import WebDesign from "../assets/images/Teams/WebDesign.webp";

import FrontEndThumbnail from "../assets/images/Teams/Thumbnails/Front-endThumbnail.png";
import GameDevThumbnail from "../assets/images/Teams/Thumbnails/GameDevThumbnail.png";
import InfraThumbnail from "../assets/images/Teams/Thumbnails/InfraThumbnail.png";
import WebDesignThumbnail from "../assets/images/Teams/Thumbnails/WebDesignThumbnail.png";

const TEAMS = [
  {
    name: "Front-end",
    description: `น้อง ๆ เคยสงสัยกันไหมว่า Website สวย ๆ ที่เราใช้งานกันอยู่ในทุกวันนี้ถูกพัฒนาขึ้นมาอย่างไร ?
    ฝ่าย Front-End จะตอบข้อสงสัยให้กับน้อง ๆ ทุกคนเอง ! เพราะเราจะมีการปูพื้นฐาน HTML, CSS และ JavaScript เพื่อนำไปต่อยอดใน Framework ยอดนิยมอย่าง React รวมถึง Version Control อย่าง Git ที่จะทำให้น้อง ๆ ได้เรียนรู้การทำงานร่วมกันได้อย่างสะดวกสบายมากขึ้นเพื่อนำไปต่อยอดในการสร้าง Website 🖥️
    `,
    image: FrontEnd,
    thumbnail: FrontEndThumbnail,
  },
  {
    name: "Web design",
    description: `ฝ่าย Web Design จะมีการปูพื้นฐานเกี่ยวกับการออกแบบ
    การจัดองค์ประกอบสำหรับการออกแบบ การใช้งานโปรแกรมสำหรับการออกแบบ💻 
    ไม่ว่าจะเป็นเรื่องขององค์ประกอบใน website, การใช้เครื่องมือในการออกแบบต่าง ๆ อย่าง Figma, Adobe Illustrator และยังไม่หมดเพียงเท่านี้ เพราะยังมีเรื่องของ Design system 
    และรวมไปถึงเนื้อหาอื่น ๆ ที่น่าสนใจอีกมากมาย เพื่อต่อยอดไปสู่การออกแบบ Website ! 
    
`,
    image: WebDesign,
    thumbnail: WebDesignThumbnail,
  },
  {
    name: "Game development",
    description: `ในฝ่าย Game Development น้อง ๆ จะได้เรียนรู้เกี่ยวกับการสร้างเกมตั้งแต่พื้นฐาน ว่าเกมมีการออกแบบอย่างไร และเรียนรู้เครื่องมือต่าง ๆ โดยจะมีการสอนในเรื่องของ JavaScript และตัวช่วยในการสร้างเกมด้วย JavaScript อย่าง Phaser
รวมถึง Version Control อย่าง Git เพื่อที่จะทำให้น้อง ๆ ได้เรียนรู้ในการทำงานร่วมกันอย่างมีประสิทธิภาพมากขึ้น
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
ฝ่าย Infrastructure จะมีการสอนน้อง ๆ เกี่ยวกับการใช้เครื่องมือต่าง ๆ
ที่จะให้ทุกคนสามารถเข้าถึง Website ของเราได้ผ่าน Domain ไม่ว่าจะเป็น Docker, การใช้ Command Line Interface และ Version Control อย่าง Git
      `,
    image: Infra,
    thumbnail: InfraThumbnail,
  },
];

export default TEAMS;
