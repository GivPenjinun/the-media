import React from "react";
import logo from "../assets/logo.png";
import Search from "./Search";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="py-5 px-10 flex justify-between items-center">
        <img src={logo} className="w-[150px] h-[75px]" />
        <div className="">
          <Search />
        </div>
        <div className="flex gap-8">
          <Link className="link" to="/login">
            Login
          </Link>
          <Link className="link" to="/write">
            Write
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
