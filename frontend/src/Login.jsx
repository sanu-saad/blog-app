import { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput(() => {
      return { ...input, [name]: value };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = input;
  };

  return (
    <div className="center">
      <h2 className="heading">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <br />
        <input
          type={showPass ? "text" : "password"}
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <span onClick={() => setShowPass(!showPass)}>👀</span>
        <br />

        <button type="submit">Login</button>
      </form>
      Not register ? <Link to="/signup">register</Link>
    </div>
  );
};

export default Login;
