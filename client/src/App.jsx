import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import WriterProfile from "./pages/WriterProfile";
import WritePost from "./pages/WritePost";
import Allworks from "./pages/Allworks";
import ReaderProfile from "./pages/ReaderProfile";
import FavPosts from "./pages/FavPosts";

function App() {
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
            <Route
              path="/writer/profile/:writerId"
              element={<WriterProfile />}
            />
            <Route path="/writer/allworks/:writerId" element={<Allworks />} />
            <Route path="/writer/writepost" element={<WritePost />} />
            <Route path="/writer/follower" element="" />
          </Route>
          <Route path="/reader">
            <Route
              path="/reader/profile/:readerId"
              element={<ReaderProfile />}
            />
            <Route path="/reader/favposts/:readerId" element={<FavPosts />} />
            <Route path="/reader/following/:readerId" element="" />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
