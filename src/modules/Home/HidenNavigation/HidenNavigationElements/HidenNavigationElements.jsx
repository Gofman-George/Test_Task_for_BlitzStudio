import './HidenNavigationElements.css';

function HidenNavigationElements( { Elements, active, setActive } ) {
  return (
    <ul className = { active ? "HidenNavigationElementsList active" : "HidenNavigationElementsList"}>
        {Elements.map( Element => 
            <li>
                <a href="Element.href">{Element.value}</a>
            </li>
        )}
    </ul>
  );
}

export default HidenNavigationElements;