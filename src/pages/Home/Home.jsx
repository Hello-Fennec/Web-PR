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
      {/* <ImgContainer className="absolute left-0 w-10 h-10 bg-red-500 self-end" /> */}
    </>
  );
}

export default Home;
