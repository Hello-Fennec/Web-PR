import ScrollLabel from "./components/ScrollLabel";
import Logo from "./components/Logo";
import PageAnimation from "../../components/PageAnimation";
import ImgContainer from "../../components/ImgContainer";

function Home() {
  return (
    <>
      {/* <PageAnimation> */}
      <Logo />
      {/* </PageAnimation> */}
      <ScrollLabel />
      <ImgContainer className="w-screen h-screen absolute top-0 left-0">
        <ImgContainer className="absolute bottom-0 right-0 w-96 h-72 bg-red-500 self-end" />
        <ImgContainer className="absolute bottom-0 left-0 w-96 h-72 bg-red-500 self-end" />
      </ImgContainer>
    </>
  );
}

export default Home;
