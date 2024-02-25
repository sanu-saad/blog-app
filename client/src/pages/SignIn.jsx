import { useState } from "react";
import { Link, useNavigate, useDispatch, useSelector } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

const SignIn = () => {
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !input.email ||
      !input.password ||
      input.email === "" ||
      input.password === ""
    ) {
      return dispatch(signInFailure("Please fill all fields"));
    }
    try {
      // setLoading(true);
      // setError(null);
      dispatch(signInStart);
      const res = await fetch("http://localhost:8000/api/v1/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      // setLoading(false);

      const data = await res.json();
      if (data.success === false) {
        // return setError(data.message);
        dispatch(signInFailure(data.message));
      }
      // setLoading(false);
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      // setError(error);
      // setLoading(false);
      dispatch(signInFailure);
    }
  };
  return (
    <div className="flex flex-col items-center h-[535px] bg-teal-800">
      <div className="mt-4">
        <h1 className="title">Sign In</h1>
        {error && (
          <div className=" border-2 border-red-400 text-red-200 rounded p-1">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            className="input"
            name="email"
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            className="input"
            name="password"
            onChange={handleChange}
          />
          <button className="btn mt-3" disabled={loading}>
            {loading ? "loading..." : "Signup"}
          </button>
        </form>
        <span>Not register ?</span>
        <Link to="/signup">
          <span className="text-yellow-300 ml-3 underline underline-offset-2">
            signup
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
