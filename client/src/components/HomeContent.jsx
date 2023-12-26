import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import dog from "../assets/dog-bobo.jpg";

const HomeContent = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  //to access currnt url param
  const search = useLocation().search;
  console.log(search);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/posts${search}`);
        setPosts(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [search]);
  return (
    <>
      <main className="my-20 px-40 flex flex-col gap-10 [&>*:nth-child(odd)]:flex-row [&>*:nth-child(even)]:flex-row-reverse">
        <div className=" flex gap-5 w-full min-h-[350px]">
          <div className="  w-2/3 min-h-[350px] flex flex-col gap-3 justify-evenly items-start">
            <h1 className="text-headLine1">Title</h1>
            <p className="text-body1">
              {/* const slicedString = originalString.slice(startIndex, endIndex); */}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium a accusamus hic ratione quas maxime perspiciatis
              dolore ad. Dicta et architecto quaerat, ipsam sapiente numquam
              officia cumque voluptates delectus quod.
            </p>
            <button className="rounded-md p-1 border-2 border-primaryBlue1 hover:bg-primaryBlue2">
              Read More
            </button>
          </div>
          <div className=" w-1/3 relative ">
            <img src={dog} alt="" className="w-full h-[350px] " />
            <div className="w-full h-[350px] bg-primaryBlue2 absolute top-4 left-4 -z-10"></div>
          </div>
        </div>
        {posts.map((post) => {
          return (
            <div
              key={post.post_id}
              className=" flex gap-5 w-full min-h-[350px]"
            >
              <div className="  w-2/3 min-h-[350px] flex flex-col gap-3 justify-evenly items-start">
                <h1 className="text-headLine1">{post.title}</h1>
                <p className="text-body1">{post.content.slice(0, 50)}</p>

                <button
                  onClick={() => {
                    navigate(`/post/${post.post_id}`);
                  }}
                  className="rounded-md p-1 border-2 border-primaryBlue1 hover:bg-primaryBlue2"
                >
                  Read More
                </button>
              </div>
              <div className=" w-1/3 relative ">
                <img src={post.image} alt="" className="w-full h-[350px] " />
                <div className="w-full h-[350px] bg-primaryBlue2 absolute top-4 left-4 -z-10"></div>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default HomeContent;
