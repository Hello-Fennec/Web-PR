import PageAnimation from "../../components/PageAnimation";
import AboutUsContainer from "./components/AboutUsContainer";

function About() {
  return (
    <PageAnimation>
      <div className="flex items-center h-screen space-x-5">
        <AboutUsContainer />
        <div data-speed={4} className="mousemove lg:hidden w-52 h-[50%] bg-red-500" />
      </div>
    </PageAnimation>
  );
}

export default About;
