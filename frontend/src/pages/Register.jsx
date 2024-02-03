import { useState } from "react";
import LayOut from "../components/LayOut/LayOut";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/register",
        input
      );
      if (res.data.success) {
        alert("user register");
        navigate("/login");
      } else {
        alert("not register");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LayOut>
      <div className="form-container">
        <h2 className="heading">Register User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
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
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            value={input.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={input.address}
            onChange={handleChange}
          />
          <button>Register</button>
          <span className="auth-confirm">
            Already rgister? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </LayOut>
  );
};

export default Register;
