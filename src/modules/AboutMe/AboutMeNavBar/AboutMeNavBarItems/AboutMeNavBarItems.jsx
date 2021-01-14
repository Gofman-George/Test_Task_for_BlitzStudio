import c from "./AboutMeNavBarItems.module.css"

function AboutMeNavBarItems() {
  return (
    <div className = { c.AboutMeNavBarItems }>
        <a href="f">home</a>
        <a href="f">about me</a>
        <a href="f">portfolio</a>
        <a href="f">contacts</a>
    </div>
  );
}

export default AboutMeNavBarItems;