import React, { useEffect, useState } from "react";
faTrashCan;
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Allposts = () => {
  const [works, setWorks] = useState();
  const writerId = JSON.parse(localStorage.getItem("user")).writer_id || null;

  const handleDelete = async (postId) => {
    try {
      const res = await axios.delete(`http://localhost:8800/posts/${postId}`);
      const newWorks = works.filter((work) => work.post_id != postId);
      setWorks(newWorks);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8800/writer/allworks/${writerId}`
      );
      setWorks(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {works
        ? works.map((work) => {
            return (
              <div
                key={work.post_id}
                className="border-2 w-full h-2/12 my-5 p-5 rounded-2xl flex flex-col border-secondaryBlue1 hover:border-primaryBlue2"
              >
                <div className="flex flex-row justify-between gap-5 p-2">
                  <div className="flex flex-col justify-center w-2/3 h-full">
                    <h1 className="text-headLine3">{work.title}</h1>
                    <h1 className="text-body1">By {work.username}</h1>
                  </div>
                  <div className="w-1/6 h-full flex flex-col justify-center items-start pr-5">
                    <div className="text-secondaryGreen1 cursor-pointer">
                      <FontAwesomeIcon icon={faPenToSquare} /> Update
                    </div>
                    <button
                      onClick={() => handleDelete(work.post_id)}
                      className="text-red-500 cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faTrashCan} /> Delete
                    </button>
                  </div>
                </div>
                <hr />
                <div className="date-section p-3 py-5 flex justify-between">
                  <div className="flex-1 ">
                    <div className="text-primaryGray3">Category:</div>
                    <div className="flex justify-start">
                      <span>{work.category}</span>
                    </div>
                  </div>
                  <div className="flex-1 ">
                    <div className="text-primaryGray3">Status:</div>
                    <div className="flex justify-start">
                      <span>{work.status}</span>
                    </div>
                  </div>
                  <div className="border-l-2 pl-8 basis-1/4">
                    <div className="text-primaryGray3">Created at:</div>
                    <div className="">
                      {new Date(work.created_at).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="border-l-2 pl-8 basis-1/4">
                    <div className="text-primaryGray3">Updated at:</div>
                    <div className="">
                      {new Date(work.updated_at).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                {/* 
      <div
        className={
          booking.status_booking == "Success"
            ? "status-section text-secondaryGreen1 w-full h-[80px] bg-secondaryGreen2 rounded-lg px-5 flex justify-between items-center"
            : booking.status_booking == "Canceled"
            ? "status-section text-red-500 w-full h-[80px] bg-red-100 rounded-lg px-5 flex justify-between items-center"
            : "status-section text-primaryGray3 w-full h-[80px] bg-primaryGray6 rounded-lg px-5 flex justify-between items-center"
        }
      >
        {booking.status_booking == "Success" ? (
          <p>
            published date: {formatDate(booking.endTime)} |{" "}
            {formatTime(booking.endTime)}
          </p>
        ) : booking.status_booking == "In service" ? (
          <p>Your pet is already in Pet Sitter care!</p>
        ) : booking.status_booking == "Waiting for confirm" ? (
          <p>Waiting Pet Sitter for confirm booking </p>
        ) : booking.status_booking == "Waiting for service" ? (
          <p>Pet Sitter is waiting to service </p>
        ) : booking.status_booking == "Canceled" ? (
          <p>Service was canceled </p>
        ) : null}
      </div>
      */}
              </div>
            );
          })
        : null}
    </>
  );
};

export default Allposts;
