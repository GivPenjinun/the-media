import React, { useEffect, useState, useContext, useRef } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import profile from "../assets/user-profile.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Writer = () => {
  const location = useLocation();
  const [file, setFile] = useState(null);
  const [writer, setWriter] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const [errors, setErrors] = useState(null);
  const writerId = JSON.parse(localStorage.getItem("user")).writer_id || null;

  const currentURL = window.location.href;
  const checkURL = () => {
    if (currentURL.includes("writer")) {
    }
    if (currentURL.includes("reader")) {
    }
  };

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("image", file);
      const res = await axios.post(
        "http://localhost:8800/uploadImage",
        formData
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  /*
  const handleUpdate = async () => {
    const imgUrl = await upload();
    console.log(imgUrl);
  };*/

  const handleUpdate = async () => {
    if (file) {
      const imgUrl = await upload();
      try {
        await axios.put(`http://localhost:8800/writer/${writerId}`, {
          image: imgUrl,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      setErrors("Insert one image");
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/writer/${writerId}`);
      setWriter(res.data);
      //console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center relative items-center my-14 w-[220px] h-[220px] rounded-full bg-slate-200">
        {file ? (
          <img
            className="object-cover w-[220px] h-[220px] rounded-full"
            src={URL.createObjectURL(file)}
          />
        ) : (
          <img
            className="object-cover w-[220px] h-[220px] rounded-full"
            src={`http://localhost:8800/upload/${writer?.image}`}
          />
        )}

        <label
          htmlFor="upload"
          className="cursor-pointer w-[60px] h-[60px] text-white rounded-full bg-primaryBlue2 absolute bottom-[10px] right-0 flex justify-center items-center"
        >
          <FontAwesomeIcon icon={faPlus} />
          <input
            id="upload"
            name="avatar"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            hidden
          />
        </label>
      </div>
      {/*
      //For changing Username and Email
      <div className="flex flex-col gap-1">
        <label htmlFor="userName">Your username*</label>
        <input
          id="userName"
          name="userName"
          type="userName"
          //value={username}
          //onChange={(event) => setUsername(event.target.value)}
          placeholder="your username "
          required
          className="invalid:border-red-500 border-primaryGray5 border-2 rounded-lg w-full h-[45px] mt-2 text-primaryGray2 pl-3 focus:outline-none focus:border-primaryBlue2"
        />
        {errors.username && (
          <p className="mt-2 text-sm text-red-600">{errors.username}</p>
        )}
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <label htmlFor="email">Email*</label>
        <input
          id="email"
          name="email"
          type="email"
          //value={email}
          //onChange={(event) => setEmail(event.target.value)}
          placeholder="example@email.com"
          required
          className="invalid:border-red-500 border-primaryGray5 border-2 rounded-lg w-full h-[45px] mt-2 text-primaryGray2 pl-3 focus:outline-none focus:border-primaryBlue2"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600">{errors.email}</p>
        )}
      </div>
      
 <div className="flex flex-col gap-1 ">
        <label htmlFor="introduction">Introduction</label>
        <textarea
          rows={10}
          type="text"
          id="introduction"
          name="introduction"
          placeholder="Introduce Yourself"
          className="invalid:border-red-500 border-primaryGray5 border-2 rounded-lg w-full  mt-2 text-primaryGray2 p-2 focus:outline-none focus:border-primaryBlue2"
        />
      </div>
*/}

      <div className="flex justify-end items-center gap-3">
        <button
          onClick={handleUpdate}
          className=" h-[50px] px-5 py-1 bg-primaryBlue1 rounded-full active:bg-primaryBlue2 text-white hover:bg-primaryBlue2 disabled:bg-primaryGray4 disabled:text-primaryGray3"
        >
          Upload Profile Image
        </button>
        <button
          onClick={() => {
            setFile(null);
          }}
          className=" h-[50px] px-5 py-1 bg-primaryBlue1 rounded-full active:bg-primaryBlue2 text-white hover:bg-primaryBlue2 disabled:bg-primaryGray4 disabled:text-primaryGray3"
        >
          Cancel
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-headLine4">Your username:</h1>
        <h2 className="text-body1">{writer?.username}</h2>
      </div>
      <h1 className="text-red-500">{errors}</h1>
    </div>
  );
};

export default Writer;
