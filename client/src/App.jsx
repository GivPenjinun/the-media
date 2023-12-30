import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import Register from "./pages/Register";
import Login from "./pages/Login";
import WriterProfile from "./pages/WriterProfile";
import WritePost from "./pages/WritePost";
import Allworks from "./pages/Allworks";
import ReaderProfile from "./pages/ReaderProfile";
import FavPosts from "./pages/FavPosts";
import Layout from "./components/LayOut";
import RequireAuth from "./components/RequiredAuth";

function App() {
  return (
    <>
      <Routes path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Home />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* protected routes */}
        <Route path="post/:postId" element={<SinglePost />} />

        {/* protected writer routes */}

        <Route element={<RequireAuth allowedRoles={["writer"]} />}>
          <Route path="writer/profile/:writerId" element={<WriterProfile />} />
          <Route path="writer/allworks/:writerId" element={<Allworks />} />
          <Route path="writer/writepost" element={<WritePost />} />
        </Route>

        {/* protected reader routes */}
        <Route element={<RequireAuth allowedRoles={["reader"]} />}>
          <Route path="reader/favposts/:readerId" element={<FavPosts />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
