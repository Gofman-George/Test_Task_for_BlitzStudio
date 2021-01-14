import c from "./AboutMeScrollDown.module.css"
import Double_Arrow_AboutMe from "./../../../img/Double_Arrow_AboutMe.png"

function AboutMeScrollDown() {
  return (
    <div className = { c.AboutMeScrollDown }>
        <div className = { c.AboutMeScrollDown__text }>
            keep scrolling, there is still more to come
        </div>
        <div className = { c.AboutMeScrollDown__arrow }>
          <img src = { Double_Arrow_AboutMe }>
          </img>
        </div>
    </div>
  );
}

export default AboutMeScrollDown;
