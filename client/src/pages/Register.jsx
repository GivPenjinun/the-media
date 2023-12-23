import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Validate Name
    if (username.length < 6 || username.length > 20) {
      newErrors.username = "Username must be between 6 and 20 characters";
      let input = document.getElementById(`userName`);
      input.classList.add("border-red-500");
    } else {
      let input = document.getElementById(`userName`);
      input.classList.remove("border-red-500");
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      newErrors.email = "Invalid email format";
      let input = document.getElementById(`email`);
      input.classList.add("border-red-500");
    } else {
      let input = document.getElementById(`email`);
      input.classList.remove("border-red-500");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
        />
        <input
          className="text-body1 rounded-md p-2 focus:outline-none"
          required
          placeholder="username"
          type="username"
          name="username"
        />
        <input
          className="text-body1 rounded-md p-2 focus:outline-none"
          required
          placeholder="password"
          type="password"
          name="password"
        />
        <input type="file" />
        <button
          type="submit"
          className="w-full py-2 px-4 text-headLine4 bg-gradient-to-r rounded-full drop-shadow-md from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 "
        >
          Register
        </button>
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
