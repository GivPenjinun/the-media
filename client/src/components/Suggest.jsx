import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import dog from "../assets/dog-bobo.jpg";

const Suggest = (props) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  //get postId from current URL from index 2nd of array
  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/posts/?category=${props.category}`
        );
        setPosts(res.data);
        console.log(props.category);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [props.category]);

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
      {posts
        .filter((post) => post.post_id != postId)
        .map((post) => {
          return (
            <div key={post.post_id} className="flex flex-col gap-1">
              <img
                src={`http://localhost:8800/upload/${post.image}`}
                alt=""
                className=""
              />
              <h2 className="text-headLine3">{post.title}</h2>
              <button
                onClick={() => {
                  navigate(`/post/${post.post_id}`);
                }}
                className="text-body3 rounded-sm px-1 border-2 border-primaryBlue1 hover:bg-primaryBlue2"
              >
                Read More
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Suggest;
