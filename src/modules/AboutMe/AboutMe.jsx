import c from "./AboutMe.module.css"
import AboutMeNavBar from "./AboutMeNavBar/AboutMeNavBar";
import AboutMeMainPart from "./AboutMeMainPart/AboutMeMainPart";
import AboutMeScrollDown from "./AboutMeScrollDown/AboutMeScrollDown";
function AboutMe() {
  return (
    <div className = { c.AboutMe }>
        <AboutMeNavBar />
        <AboutMeMainPart />
        <AboutMeScrollDown />
    </div>
  );
}

export default AboutMe;
