import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [role, setRole] = useState(
    currentUser?.writer_id ? "writer" : currentUser?.reader_id ? "reader" : null
  );

  const loginWriter = async (inputs) => {
    try {
      const res = await axios.post(
        "http://localhost:8800/auth/loginWriter",
        inputs
      );
      setCurrentUser(res.data.other);
      //console.log(res);
      const jwtToken = res.data.token;
      Cookies.set(
        "authToken",
        jwtToken,
        { expires: 1 / 24 },
        { httpOnly: true }
      );
    } catch (error) {
      console.log("Response data:", error.response.data);
    }
  };

  const loginReader = async (inputs) => {
    const res = await axios.post(
      "http://localhost:8800/auth/loginReader",
      inputs
    );
    setCurrentUser(res.data.other);
    //console.log(res);
    const jwtToken = res.data.token;
    Cookies.set("authToken", jwtToken, { expires: 1 / 24 }, { httpOnly: true });
  };

  const logout = async (inputs) => {
    // await axios.post("http://localhost:8800/auth/logout");
    setCurrentUser(null);
    setRole(null);
    localStorage.removeItem("user");
    Cookies.remove("authToken");
    window.location.replace("/login");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    setRole(
      currentUser?.writer_id
        ? "writer"
        : currentUser?.reader_id
        ? "reader"
        : null
    );
    //console.log(role);
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{ currentUser, loginWriter, logout, role, loginReader }}
    >
      {children}
    </AuthContext.Provider>
  );
};
