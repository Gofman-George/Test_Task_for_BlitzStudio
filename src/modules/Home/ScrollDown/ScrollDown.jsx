import c from "./ScrollDown.module.css";
import Double_Arrow from "./../../../img/Double_Arrow.png"

function ScrollDown() {
  return (
    <div className = { c.ScrollDown }>
        <div className = { c.ScrollDown__text }>
          scroll down to see more
        </div>
        <div className = { c.ScrollDown__arrow }>
          <img src = { Double_Arrow }>
          </img>
        </div>
    </div>
  );
}

export default ScrollDown;