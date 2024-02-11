import { Link, useNavigate } from "react-router-dom";
import LayOut from "../components/LayOut/LayOut";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/auth";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [auth, setAuth] = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        input
      );
      if (res.data.success) {
        alert(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LayOut>
      <div className="form-container">
        <h2 className="heading">Login User</h2>
        <form onSubmit={handleSubmit}>
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
