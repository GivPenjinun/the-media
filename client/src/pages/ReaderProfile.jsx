import React from "react";
import NavBar from "../components/NavBar";
import Writer from "../components/Writer";
import SideBarReader from "../components/SideBarReader";
const ReaderProfile = () => {
  return (
    <>
      <NavBar />
      <div className="w-screen h-auto flex flex-row justify-center ">
        <SideBarReader />
        <div className=" w-5/6 h-auto shadow-custom4 rounded-md mr-20 mb-20 p-5">
          <Writer />
        </div>
      </div>
    </>
  );
};

export default ReaderProfile;
