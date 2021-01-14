import c from "./Home.module.css";
import Navigation from "./Navigation/Navigation";
import ScrollDown from "./ScrollDown/ScrollDown";
import HidenNavigation from "./HidenNavigation/HidenNavigation";

function Home() {
  return (
    <div className = { c.Home }>
        <Navigation />
        <HidenNavigation />
        <ScrollDown />
    </div>
  );
}

export default Home;