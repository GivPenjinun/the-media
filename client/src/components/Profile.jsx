import React, { useEffect, useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = () => {
  const [errors, setErrors] = useState({});
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <div className="flex justify-center relative items-center my-14 w-[220px] h-[220px] rounded-full bg-slate-200">
        <img
          className="object-cover w-[220px] h-[220px] rounded-full"
          src=""
          alt="Profile Avatar"
        />

        <label
          htmlFor="upload"
          className="cursor-pointer w-[60px] h-[60px] text-white rounded-full bg-primaryBlue2 absolute bottom-[10px] right-0 flex justify-center items-center"
        >
          <FontAwesomeIcon icon={faPlus} />
          <input
            id="upload"
            name="avatar"
            type="file"
            //onChange={handleFileChange}
            hidden
          />
        </label>
      </div>
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
          //value={introduction}
          //onChange={(event) => setintroduction(event.target.value)}
          className="invalid:border-red-500 border-primaryGray5 border-2 rounded-lg w-full  mt-2 text-primaryGray2 p-2 focus:outline-none focus:border-primaryBlue2"
        />

        {errors.idNumber && (
          <p className="mt-2 text-sm text-red-600">{errors.idNumber}</p>
        )}
      </div>

      <div className="flex justify-end items-center ">
        <button
          type="submit"
          className=" h-[50px] px-5 py-1 bg-primaryBlue1 rounded-full active:bg-primaryBlue2 text-white hover:bg-primaryBlue2 disabled:bg-primaryGray4 disabled:text-primaryGray3"
        >
          Update Profile
        </button>
      </div>
    </form>
  );
};

export default Profile;
