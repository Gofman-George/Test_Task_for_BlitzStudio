import c from "./Navigation.module.css";
import NavigationItems from "./NavigationItems/NavigationItems";

function Navigation() {
  return (
    <div className = { c.Navigation }>
        <NavigationItems />
    </div>
  );
}

export default Navigation;