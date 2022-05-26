import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import "./App.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navLogo">LOGO</div>
      <div className="navItems">
        <div className="navItem">item 1</div>
        <div className="navItem">item 2</div>
        <div className="navItem">item 3</div>
      </div>
      <div className="navMenu">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}
