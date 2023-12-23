import React from "react";
import NavBar from "../components/NavBar";
import SideBarReader from "../components/SideBarReader";
import Allposts from "../components/Allposts";
import Allfav from "../components/Allfav";
const FavPosts = () => {
  return (
    <>
      <NavBar />
      <div className="w-screen h-auto flex flex-row justify-center ">
        <SideBarReader />
        <div className=" w-5/6 h-auto shadow-custom4 rounded-md mr-20 mb-20 p-5">
          <Allfav />
        </div>
      </div>
    </>
  );
};

export default FavPosts;
