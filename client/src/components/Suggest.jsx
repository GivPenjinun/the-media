import React from "react";
import dog from "../assets/dog-bobo.jpg";

const Suggest = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-headLine4">Other posts you may like</h3>
      <div className="flex flex-col gap-1">
        <img src={dog} alt="" className="" />
        <h2 className="text-headLine3">lo</h2>
        <button className="text-body3 rounded-sm px-1 border-2 border-primaryBlue1 hover:bg-primaryBlue2">
          Read More
        </button>
      </div>
      {/*
    {posts.map(post)=>(<div key={post.id} className="flex flex-col gap-1">
        <img src={post.image} alt="" className="" />
        <h2 className="text-headLine3">{post.title}</h2>
        <button className="text-body3 rounded-sm px-1 border-2 border-primaryBlue1 hover:bg-primaryBlue2">
          Read More
        </button>
      </div>)}
    */}
    </div>
  );
};

export default Suggest;
