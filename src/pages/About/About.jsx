import ImgContainer from "../../components/ImgContainer";
import PageAnimation from "../../components/PageAnimation";
import AboutUsContainer from "./components/AboutUsContainer";
import Fennec from "../../assets/images/Fennec_Mascot/Fennec_curious.png";

function About() {
  return (
    <PageAnimation>
      <div className="flex items-center h-screen space-x-3  2xl:scale-150">
        <AboutUsContainer />
        <ImgContainer
          src={Fennec}
          data-speed={7}
          className="mousemove lg:hidden w-80 h-[80%] mt-20"
        />
      </div>
    </PageAnimation>
  );
}

export default About;
