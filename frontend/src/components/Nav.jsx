import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div>
          <h2>E-COMM</h2>
        </div>
        <ul className="menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/signup">
              <button>Signup</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
