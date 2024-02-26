import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header>
      <nav className="bg-gray-800 py-5 text-white">
        <div className="container flex items-center justify-between">
          <div>
            <h1 className="title">Write Something...</h1>
          </div>
          <div>
            <ul className="relative flex items-center gap-4">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                {currentUser ? (
                  <div
                    onClick={() => setShow(!show)}
                    className="bg-gray-700 cursor-pointer rounded-full p-2"
                  >
                    {currentUser.name}
                  </div>
                ) : (
                  <Link to="/signin">
                    <button className="btn">SignIn</button>
                  </Link>
                )}
              </li>
            </ul>
            {show ? (
              <div className="absolute top-20 right-14 bg-gray-800 text-white rounded p-2">
                <p className="test-sm truncate">{currentUser.email}</p>
                <Link to="/dashbord?tab=profile" className="block">
                  Dashbord
                </Link>
                <Link>Logout</Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
