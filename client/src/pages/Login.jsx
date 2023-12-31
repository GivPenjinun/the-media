import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [role, setRole] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  //const [error, setError] = useState(null);
  //const { loginReader } = useAuth();
  const { loginWriter, loginReader, error } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (role == "writer") {
        await loginWriter(inputs);
      }
      if (role == "reader") {
        await loginReader(inputs);
      }
      if (role == "") {
        alert("please choose role");
      }
    } catch (err) {
      if (err?.response?.data) {
        setError(err?.response?.data);
      }
      console.log(err);
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
        <div className="flex  gap-3">
          <h1>Role:</h1>
          <div className="flex items-center gap-1">
            <input
              id="writer"
              type="radio"
              name="role"
              value="writer"
              onClick={(e) => {
                setRole(e.target.value);
              }}
              className="form-checkbox h-4 w-4"
            />
            <label htmlFor="writer">Writer</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              id="reder"
              type="radio"
              name="role"
              value="reader"
              onClick={(e) => {
                setRole(e.target.value);
              }}
              className="form-checkbox h-4 w-4"
            />
            <label htmlFor="reder">Reader</label>
          </div>
        </div>

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
