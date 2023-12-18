import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  //<FontAwesomeIcon icon={faMusic} />
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:blogId" element={<BlogPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Home />} />
          <Route path="/writer">
            <Route path="/writer/profile/:writerId" element="" />
            <Route path="/writer/allworks/:writerId" element="" />
            <Route path="/writer/write" element="" />
            <Route path="/writer/follower" element="" />
          </Route>
          <Route path="/reader">
            <Route path="/reader/profile/:readerId" element="" />
            <Route path="/reader/favpost/:readerId" element="" />
            <Route path="/reader/following/:readerId" element="" />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
