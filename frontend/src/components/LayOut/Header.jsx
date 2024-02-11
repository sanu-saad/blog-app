import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useState } from "react";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
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
          {!auth.user ? (
            <>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </>
          ) : (
            <>
              <li onClick={() => setShowDropdown(!showDropdown)}>
                <Link>{auth?.user?.name}</Link>
              </li>
              {showDropdown ? (
                <div className="dropdown">
                  <li>
                    <NavLink to="/dashbord">Dashbord</NavLink>
                  </li>
                  <li>
                    <Link to="/login" onClick={handleLogout}>
                      Logout
                    </Link>
                  </li>
                </div>
              ) : (
                ""
              )}
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
