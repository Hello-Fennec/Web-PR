import ScrollLabel from "./components/ScrollLabel";
import Logo from "./components/Logo";
import PageAnimation from "../../components/PageAnimation";
import ImgContainer from "../../components/ImgContainer";
import L_Boulder from "../../assets/images/Home/L-Boulder.png";
import R_Boulder from "../../assets/images/Home/R-Boulder.png";
import Background from "../../assets/images/Home/Background.png";
import Dunes from "../../assets/images/Home/Dunes.png";
import Floor from "../../assets/images/Home/Floor.png";
import Front_Floor from "../../assets/images/Home/Front-Floor.png";
import Sun from "../../assets/images/Home/Sun.png";

function Home() {
  return (
    <>
      {/* <PageAnimation> */}
      {/* </PageAnimation> */}
      <ScrollLabel />

      <ImgContainer
        size="cover"
        position="right bottom"
        className="w-screen h-screen absolute top-0 left-0 -z-10 bg-[#F3E0B3]"
      >
        <ImgContainer
          data-speed={2}
          src={Sun}
          size="cover"
          position="bottom"
          className="scroll absolute top-0 left-0 md:hidden w-96 h-96 2xl:scale-125"
        />
        <ImgContainer
          data-speed={3}
          src={Dunes}
          size="cover"
          position="bottom"
          className="scroll absolute bottom-0 right-0 w-full h-[28rem] 2xl:h-[36rem] self-end "
        />
        <ImgContainer
          data-speed={2}
          src={Floor}
          size="cover"
          position="bottom"
          className="scroll absolute bottom-0 right-0 w-full h-[23rem] 2xl:h-[30rem] self-end "
        />
        <ImgContainer
          data-speed={1.5}
          src={Front_Floor}
          size="cover"
          position="bottom"
          className="scroll absolute bottom-0 right-0 w-full h-[23rem] 2xl:h-[28rem] self-end "
        />
        {/* <ImgContainer
          src={R_Boulder}
          position="right bottom"
          className=" absolute bottom-0 right-0 w-[34rem] h-[32rem] self-end translate-x-28 translate-y-10"
        />
        <ImgContainer
          src={L_Boulder}
          position="left bottom"
          className=" absolute bottom-0 left-0 w-[34rem] h-[32rem] self-end -translate-x-28 translate-y-10"
        /> */}
      </ImgContainer>
      <Logo className="-z-50" />
    </>
  );
}

export default Home;
