import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    // Validate Username
    if (inputs.username.length < 6 || inputs.username.length > 20) {
      newErrors.username = "Username must be between 6 and 20 characters";
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!inputs.email.match(emailPattern)) {
      newErrors.email = "Invalid email format";
    }

    // Validate Password
    if (inputs.password.length < 6 || inputs.password.length > 20) {
      newErrors.password = "Password must be between 6 and 20 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    validateForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        if (role == "writer") {
          await axios.post("http://localhost:8800/auth/registerWriter", inputs);
          navigate("/login");
        }
        if (role == "reader") {
          await axios.post("http://localhost:8800/auth/registerReader", inputs);
          navigate("/login");
        }
        if (role == "") {
          alert("please choose role");
        }
      } catch (err) {
        err?.response?.data &&
          setErrors((prev) => ({ ...prev, err: err?.response?.data }));
        console.log(err);
      }
    }
  };
  return (
    <div className="bg-gradient-to-b from-cyan-500 to-blue-500 w-screen h-screen flex flex-col gap-3 justify-center items-center">
      <h2 className="text-headLine3">Register</h2>
      <form className="bg-white/60 w-[400px] rounded-xl px-8 py-10  flex flex-col gap-7 ">
        <input
          className="text-body1 rounded-md p-2 focus:outline-none"
          required
          placeholder="email"
          type="email"
          name="email"
          onChange={handleChange}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600">{errors.email}</p>
        )}
        <input
          className="text-body1 rounded-md p-2 focus:outline-none"
          required
          placeholder="username"
          type="username"
          name="username"
          onChange={handleChange}
        />
        {errors.username && (
          <p className="mt-2 text-sm text-red-600">{errors.username}</p>
        )}
        <input
          className="text-body1 rounded-md p-2 focus:outline-none"
          required
          placeholder="password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        {errors.password && (
          <p className="mt-2 text-sm text-red-600">{errors.password}</p>
        )}
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
        <div className="">
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full py-2 px-4 text-headLine4 bg-gradient-to-r rounded-full drop-shadow-md from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 "
          >
            Register
          </button>
          {errors.err && (
            <p className="mt-2 text-sm text-red-600">{errors.err}</p>
          )}
        </div>

        <span className="">
          You already have an account?{" "}
          <Link className="underline underline-offset-2 italic" to="/login">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
