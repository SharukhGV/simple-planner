import { NavLink } from "react-router-dom";
import brainHeart from "./brainHeart.png";
import { Link } from "react-router-dom";
function Nav({ toggleTheme, theme, setTheme }) {


  let activeStyle = {
    textDecoration: "none",
    color: "beige",
  };

  let nonactiveStyle = {
    textDecoration: "none",

    color: "white",
  };

  return (
    <span>

      <nav className="navBar">
        <ul className="no-bullets">


          <li style={{ top: "5px", left: "5px" }}><Link to="/"><img className="brain"
            style={{
              maxWidth: "35px"
            }}
            src={brainHeart}
            alt="home logo button"
          /></Link></li>

          <li>
            <NavLink
              className="links"
              to="/receipts"
              exact="true"
              style={({ isActive }) => (isActive.isActive ? activeStyle : nonactiveStyle)}
            >
              All Info
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink
              className="links"
              to="/receipts/new"
              exact="true"
              style={({ isActive }) => (isActive.isActive ? activeStyle : nonactiveStyle)}
            >
              New Form
            </NavLink>
          </li>
{/* 
          <li>
            <NavLink
              className="links"
              to="/goals"
              exact="true"
              style={({ isActive }) => (isActive.isActive ? activeStyle : nonactiveStyle)}
            >
              All Goals
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink
              className="links"
              to="/receipts/new"
              exact="true"
              style={({ isActive }) => (isActive.isActive ? activeStyle : nonactiveStyle)}
            >
              New Goals Form
            </NavLink>
          </li>
     */}
        </ul>
      </nav></span>
  );
}

export default Nav;
