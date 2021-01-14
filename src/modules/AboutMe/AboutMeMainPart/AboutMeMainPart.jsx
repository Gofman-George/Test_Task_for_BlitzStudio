import c from "./AboutMeMainPart.module.css"
import AboutMeMainPartText from "./AboutMeMainPartText/AboutMeMainPartText";
import AboutMeMainPartImg from "./AboutMeMainPartImg/AboutMeMainPartImg";

function AboutMeMainPart() {
  return (
    <div className = { c.AboutMeMainPart }>
        <AboutMeMainPartImg />
        <AboutMeMainPartText />
    </div>
  );
}

export default AboutMeMainPart;
