import { Link } from "react-router-dom";
import LayOut from "../components/LayOut/LayOut";
import { useState } from "react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  return (
    <LayOut>
      <div className="form-container">
        <h2 className="heading">Login User</h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
          <button>Login</button>
          <span className="auth-confirm">
            Dont have account? <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
    </LayOut>
  );
};

export default Login;
