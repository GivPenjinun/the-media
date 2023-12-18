import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-2 px-10 flex justify-between items-center bg-primaryBlue2">
      <img src={logo} alt="" className="w-[150px] h-[75px] " />
      <span>
        Made with ♥️ and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
