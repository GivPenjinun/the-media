import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Cookies from "js-cookie";

const NavBar = () => {
  const [hasToken, setHasToken] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const navigate = useNavigate();
  const { currentUser, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <nav className="py-5 px-10 flex justify-between items-center">
        <Link className="link" to="/">
          <img src={logo} className="w-[150px] h-[75px]" />
        </Link>

        <div className="flex gap-8">
          {currentUser ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <Link className="link" to={`/writer/profile/:writerId`}>
            Write
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
