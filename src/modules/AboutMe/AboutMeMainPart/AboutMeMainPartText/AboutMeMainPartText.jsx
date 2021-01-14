import c from "./AboutMeMainPartText.module.css"

function AboutMeMainPartText() {
  return (
    <div className = { c.AboutMeMainPartText }>
        <h2 className = { c.AboutMe__header }>about me</h2>
        <p className = { c.AboutMe__description }>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <p className = { c.AboutMe__name }>Jason Wood</p>
    </div>
  );
}

export default AboutMeMainPartText;
