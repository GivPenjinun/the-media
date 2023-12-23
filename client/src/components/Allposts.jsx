import React, { useEffect, useState } from "react";
faTrashCan;
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Allposts = () => {
  const [booking, setbooking] = useState(null);
  return (
    <div className="border-2 w-full h-2/12 my-5 p-5 rounded-2xl flex flex-col border-secondaryBlue1 hover:border-primaryBlue2">
      <div className="flex flex-row justify-between gap-5 p-2">
        <div className="flex flex-col justify-center w-2/3 h-full">
          <h1 className="text-headLine3">Title</h1>
          <h1 className="text-body1">By Writer</h1>
        </div>
        <div className="w-1/6 h-full flex flex-col justify-center items-start pr-5">
          <div className="text-secondaryGreen1 cursor-pointer">
            <FontAwesomeIcon icon={faPenToSquare} /> Update
          </div>
          <div className="text-red-500 cursor-pointer">
            <FontAwesomeIcon icon={faTrashCan} /> Delete
          </div>
        </div>
      </div>
      <hr />
      <div className="date-section p-3 py-5 flex justify-between">
        <div className="flex-1 ">
          <div className="text-primaryGray3">Category:</div>
          <div className="flex justify-start">
            <span>Art</span>
          </div>
        </div>
        <div className="border-l-2 pl-8 basis-1/4">
          <div className="text-primaryGray3">Created at:</div>
          <div className="">x</div>
        </div>
        <div className="border-l-2 pl-8 basis-1/4">
          <div className="text-primaryGray3">Updated at:</div>
          <div className="">x</div>
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
};

export default Allposts;
