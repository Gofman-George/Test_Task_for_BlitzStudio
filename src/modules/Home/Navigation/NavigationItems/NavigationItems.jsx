import c from "./NavigationItems.module.css";

function NavigationItems() {
  return (
    <div className = { c.NavigationItems }>
        <a href="f">home</a>
        <a href="f">about me</a>
        <a href="f">portfolio</a>
        <a href="f">contacts</a>
    </div>
  );
}

export default NavigationItems;