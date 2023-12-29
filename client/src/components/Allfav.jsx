import React, { useEffect, useState } from "react";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Allfav = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/reader`);
        setPosts(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleUnfav = async (favpostId) => {
    try {
      await axios.delete(`http://localhost:8800/reader/${favpostId}`);
      const newPosts = posts.filter((post) => post.fav_posts_id != favpostId);
      setPosts(newPosts);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="">
        {posts?.map((post) => {
          return (
            <div
              key={post.post_id}
              className="border-2 w-full h-2/12 my-5 p-5 rounded-2xl flex flex-col border-secondaryBlue1 hover:border-primaryBlue2"
            >
              <div className="flex flex-row justify-between gap-5 p-2">
                <div className="flex flex-col justify-center w-2/3 h-full">
                  <h1 className="text-headLine3">{post.title}</h1>
                  <h1 className="text-body1">By {post.writerUsername}</h1>
                </div>
                <div className="w-1/6 h-full flex flex-col justify-center items-start pr-5">
                  <div
                    onClick={() => {
                      handleUnfav(post.fav_posts_id);
                    }}
                    className="text-red-500 cursor-pointer group inline-block  gap-1"
                  >
                    <span className="group-hover:hidden">
                      <FontAwesomeIcon icon={solidHeart} />
                    </span>
                    <span className="hidden group-hover:inline-block">
                      <FontAwesomeIcon icon={faHeart} />
                    </span>
                    Unfavorite
                  </div>
                </div>
              </div>
              <hr />
              <div className="date-section p-3 py-5 flex justify-between">
                <div className="flex-1 ">
                  <div className="text-primaryGray3">Category:</div>
                  <div className="flex justify-start">
                    <span>{post.category}</span>
                  </div>
                </div>
                <div className="border-l-2 pl-8 basis-1/4">
                  <div className="text-primaryGray3">Created at:</div>
                  <div className="">
                    {new Date(post.created_at).toDateString()}
                  </div>
                </div>
                <div className="border-l-2 pl-8 basis-1/4">
                  <div className="text-primaryGray3">Updated at:</div>
                  <div className="">
                    {new Date(post.updated_at).toDateString}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Allfav;
