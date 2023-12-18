import React from "react";
import NavBar from "../components/NavBar";
import SideBarWriter from "../components/SideBarWriter";

const WriterProfile = () => {
  return (
    <div className="w-screen h-auto flex flex-row justify-center ">
      <SideBarWriter />
      <div className=" w-5/6 h-auto flex flex-col items-center ">
        <NavBar />
        <div className="min-h-[90%] w-full px-14 flex flex-col pt-4 pb-14 bg-[#F6F6F9]"></div>
      </div>
    </div>
  );
};

export default WriterProfile;
