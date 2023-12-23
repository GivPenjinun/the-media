import React from "react";
import NavBar from "../components/NavBar";
import SideBarWriter from "../components/SideBarWriter";
import Write from "../components/Write";

const WritePost = () => {
  return (
    <>
      <NavBar />
      <div className="w-screen h-auto flex flex-row justify-center ">
        <SideBarWriter />
        <div className=" w-5/6 h-auto shadow-custom4 rounded-md mr-20 mb-20 p-5">
          <Write />
        </div>
      </div>
    </>
  );
};

export default WritePost;
