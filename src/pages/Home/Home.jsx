import ScrollLabel from "./components/ScrollLabel";
import Logo from "./components/Logo";
import ImgContainer from "../../components/ImgContainer";
// import Background from "../../assets/images/Home/Background.png";
import Dunes from "../../assets/images/Home/Dunes.webp";
import Floor from "../../assets/images/Home/Floor.webp";
import Front_Floor from "../../assets/images/Home/Front-Floor.webp";
import Sun from "../../assets/images/Home/Sun.png";
import FlyingBird from "../../assets/images/Home/FlyingBird.webp";
import Cloud from "../../assets/images/Home/Cloud.webp";

function Home() {
  return (
    <>
      <ScrollLabel />
      <div className="w-screen h-screen absolute top-0 left-0 -z-10 bg-gradient-to-b from-[#ffc956] via-[#ffa459] to-[#ff7525]">
        <ImgContainer
          data-speed={7}
          src={Sun}
          size="contain"
          position="bottom"
          className="scroll absolute top-0 left-0 md:top-10 md:-left-10 w-96 h-96 md:w-60 md:h-60 2xl:scale-125"
        />
        <ImgContainer
          data-speed={6}
          src={Cloud}
          size="cover"
          position="bottom "
          className="scroll absolute top-10 left-0  w-full h-80 md:top-32 md:h-[40vw] min-h-[20rem] max-h-[42rem] 2xl:scale-125"
        />
        <ImgContainer
          data-speed={8}
          src={FlyingBird}
          size="contain"
          position="bottom"
          className="scroll absolute top-[10vh] right-[10vw] md:hidden w-24 h-24 2xl:scale-125"
        />
        <ImgContainer
          data-speed={5}
          src={Dunes}
          size="cover"
          position="bottom left"
          className="scroll absolute bottom-0 right-0 w-full h-[36vw] min-h-[28rem] max-h-[42rem]  self-end "
        />
        <ImgContainer
          data-speed={3}
          src={Floor}
          size="cover"
          position="bottom"
          className="scroll absolute bottom-0 right-0 w-full h-[30vw] min-h-[22rem] max-h-[32rem]  self-end "
        />
        <ImgContainer
          data-speed={1.5}
          src={Front_Floor}
          size="cover"
          position="bottom"
          className=" absolute bottom-0 right-0 w-full h-[35vw] min-h-[26rem] max-h-[37rem] max-w-[117rem]  self-end "
        />
      </div>

      <Logo className="-z-50" />

    </>
  );
}

export default Home;
