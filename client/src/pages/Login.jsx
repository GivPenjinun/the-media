import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const { loginWriter } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //await axios.post("http://localhost:8800/auth/loginWriter", inputs);
      await loginWriter(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className="bg-gradient-to-b from-cyan-500 to-blue-500 w-screen h-screen flex flex-col gap-3 justify-center items-center">
      <h2 className="text-headLine3">Login</h2>
      <form className="bg-white/60 w-[400px] rounded-xl px-8 py-10  flex flex-col gap-7 ">
        <input
          className="text-body1 rounded-md p-2 focus:outline-none"
          required
          placeholder="email"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <input
          className="text-body1 rounded-md p-2 focus:outline-none"
          required
          placeholder="password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full py-2 px-4 text-headLine4 bg-gradient-to-r rounded-full drop-shadow-md from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 "
        >
          Log in
        </button>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <span className="">
          Don't you have an account?{" "}
          <Link className="underline underline-offset-2 italic" to="/register">
            Register
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
