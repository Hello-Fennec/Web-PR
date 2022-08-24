import ScrollLabel from "./components/ScrollLabel";
import Logo from "./components/Logo";
import PageAnimation from "../../components/PageAnimation";
import ImgContainer from "../../components/ImgContainer";

function Home() {
  return (
    <>
      {/* <PageAnimation> */}
      {/* </PageAnimation> */}
      <ScrollLabel />
      <ImgContainer className="w-screen h-screen absolute top-0 left-0 -z-10">
        <ImgContainer
          data-speed={3}
          className="scroll absolute bottom-0 right-0 w-full h-[30rem] bg-gray-400 self-end"
        />
        <ImgContainer
          data-speed={1}
          className="scroll absolute bottom-0 right-0 w-full h-48 bg-gray-500 self-end"
        />
        <ImgContainer
          data-speed={-2}
          className="mousemove absolute bottom-0 right-0 w-96 h-72 bg-gray-600 self-end"
        />
        <ImgContainer
          data-speed={-2}
          className="mousemove absolute bottom-0 left-0 w-96 h-72 bg-gray-600 self-end"
        />
      </ImgContainer>
      <Logo className="-z-50" />
    </>
  );
}

export default Home;
