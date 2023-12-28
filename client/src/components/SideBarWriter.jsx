import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  faWindowRestore,
  faUser,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBarWriter = () => {
  const navigate = useNavigate();
  const profileRef = useRef(null);
  const allworksRef = useRef(null);
  const writeRef = useRef(null);
  const writerId = JSON.parse(localStorage.getItem("user")).writer_id || null;

  const currentURL = window.location.href;
  const checkURL = () => {
    if (currentURL.includes("profile")) {
      profileRef.current.focus();
    }
    if (currentURL.includes("allworks")) {
      allworksRef.current.focus();
    }
    if (currentURL.includes("writepost")) {
      writeRef.current.focus();
    }
  };

  useEffect(() => {
    checkURL();
  }, []);
  return (
    <div className="  w-2/5 h-full flex justify-center px-11">
      <div className=" shadow-custom3 w-[300px] h-2/12 rounded-xl  ml-10 flex flex-col flex-wrap leading-[3rem]">
        <div className="text-headLine4 flex justify-start items-center py-3 pl-7 ">
          Account
        </div>
        <button
          ref={profileRef}
          onClick={() => {
            navigate(`/writer/profile/${writerId}`);
          }}
          className="text-headLine5 gap-4  flex justify-start items-center p-4 pl-7 hover:bg-primaryBlue2 active:bg-primaryBlue2 focus:bg-primaryBlue2 "
        >
          <FontAwesomeIcon icon={faUser} />
          Profile
        </button>
        <button
          ref={writeRef}
          onClick={() => {
            navigate(`/writer/writepost`);
          }}
          className="text-headLine5 gap-4  flex justify-start items-center p-4 pl-7 hover:bg-primaryBlue2 active:bg-primaryBlue2 focus:bg-primaryBlue2 "
        >
          <FontAwesomeIcon icon={faPenNib} />
          Write
        </button>
        <button
          ref={allworksRef}
          onClick={() => {
            navigate(`/writer/allworks/${writerId}`);
          }}
          className="text-headLine5 gap-4  flex justify-start items-center p-4 pl-7 hover:bg-primaryBlue2 active:bg-primaryBlue2 focus:bg-primaryBlue2 "
        >
          <FontAwesomeIcon icon={faWindowRestore} />
          All Works
        </button>
      </div>
    </div>
  );
};

export default SideBarWriter;
