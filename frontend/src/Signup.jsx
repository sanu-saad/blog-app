import { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput(() => {
      return { ...input, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = input;
    if (!name || !email || !password) {
      alert("All fields are required");
    } else {
      const data = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const res = await data.json();
      // console.log(res.status);
      if (res.status === 201) {
        alert("user register");
        setInput({ ...input, name: "", email: "", password: "" });
        navigate("/login");
      }
    }
  };

  return (
    <div className="center">
      <h2 className="heading">Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        <br />
        <input
          type={showPass ? "text" : "password"}
          placeholder="Password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
        <span onClick={() => setShowPass(!showPass)}>👀</span>
        <br />

        <button type="submit">Signup</button>
      </form>
      Already register? <Link to="/login">Login</Link>
    </div>
  );
};

export default Signup;
