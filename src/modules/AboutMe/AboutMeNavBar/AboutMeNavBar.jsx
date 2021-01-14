import c from "./AboutMeNavBar.module.css"
import AboutMeNavBarItems from "./AboutMeNavBarItems/AboutMeNavBarItems"

function AboutMeNavBar() {
  return (
    <div className = { c.AboutMeNavBar }>
        <AboutMeNavBarItems />
    </div>
  );
}

export default AboutMeNavBar;