import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="bg-gray-800 py-5 text-white">
        <div className="container flex items-center justify-between">
          <div>
            <h1 className="title">Write Something...</h1>
          </div>
          <div>
            <ul className="flex items-center gap-4">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <Link to="/signin">
                  <button className="btn">SignIn</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
