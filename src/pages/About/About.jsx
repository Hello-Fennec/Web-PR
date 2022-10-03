import ImgContainer from "../../components/ImgContainer";
import PageAnimation from "../../components/PageAnimation";
import AboutUsContainer from "./components/AboutUsContainer";
import Fennec from "../../assets/images/About/Fennec_Lovely.gif";

const About = () => {
  return (
    <PageAnimation>
      <div className=" flex items-center justify-center lg:flex-col h-screen space-x-3  2xl:scale-125">
        <AboutUsContainer />
        <ImgContainer
          src={Fennec}
          data-speed={3}
          className="mousemove w-80 h-[80%] lg:w-72 lg:right-5 lg:mt-0 lg:absolute lg:translate-y-56 sm:hidden"
        />
      </div>
    </PageAnimation>
  );
};

export default About;
