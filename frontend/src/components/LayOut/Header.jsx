import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="menu-container">
      <nav className="container">
        <div>
          <Link to="/">
            <h2>E-SHOPPING...</h2>
          </Link>
        </div>
        <ul className="menu-item">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/category">Category</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
