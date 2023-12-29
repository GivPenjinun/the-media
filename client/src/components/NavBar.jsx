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
  //console.log(currentUser);
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
          {currentUser?.writer_id ? (
            <Link
              className="link"
              to={`/writer/profile/${currentUser.writer_id}`}
            >
              Write
            </Link>
          ) : currentUser?.reader_id ? (
            <Link
              className="link"
              to={`/reader/profile/${currentUser.reader_id}`}
            >
              Read
            </Link>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
