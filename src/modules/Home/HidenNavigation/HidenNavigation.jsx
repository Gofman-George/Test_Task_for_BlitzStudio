import { useState } from 'react';
import c from './HidenNavigation.module.css';
import HidenNavigationElements from "./HidenNavigationElements/HidenNavigationElements";

function HidenNavigation() {

  const Elements = [{value:"HOME", href: "f",},{value:"ABOUT ME", href: "f",},{value:"PORTFOLIO", href: "f",},{value:"CONTACTS", href: "f",},]

  const [menuActive, setMenuActive] = useState(false)

  return (
    <div>
      <div className= { c.HidenNavigationButton} onClick={() => setMenuActive(!menuActive)}>Menu </div>
      <HidenNavigationElements active={menuActive} setActive={setMenuActive} Elements = {Elements} />
    </div>
  );
}

export default HidenNavigation;