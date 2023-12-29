import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import dog from "../assets/dog-bobo.jpg";
import Suggest from "./Suggest";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";
import useAuth from "../hooks/useAuth";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostContent = () => {
  const [fav, setFav] = useState(false);
  const { role, currentUser } = useAuth();
  const [post, setPost] = useState({});
  const token = Cookies.get("authToken");
  const location = useLocation();
  const navigate = useNavigate();

  //get postId from current URL from index 2nd of array
  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/posts/${postId}`);
        setPost(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  //display content from html file
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  //
  const handleFav = async () => {
    setFav(true);
    try {
      await axios.post(`http://localhost:8800/reader/${postId}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="my-20 px-20 flex gap-12 w-full min-h-[350px]">
      <div className="w-4/5 flex flex-col gap-8">
        <div className="w-full flex justify-center">
          <img
            src={`http://localhost:8800/upload/${post.image}`}
            className="w-[650px] h-[350px] "
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="h-[80px] flex items-center gap-4">
            <img
              src={`http://localhost:8800/upload/${post.writerImg}`}
              className="h-[70px] w-[70px] rounded-full "
            />
            <div className="">
              <h4 className="text-headLine4">{post.username}</h4>
              <h4 className="text-body1">
                {new Date(post.updated_at).toLocaleDateString()}
              </h4>
            </div>
          </div>
          {role == "reader" && (
            <div
              onClick={handleFav}
              className="text-red-500 cursor-pointer group inline-block  gap-1"
            >
              <span className="group-hover:hidden">
                {fav ? (
                  <FontAwesomeIcon icon={solidHeart} />
                ) : (
                  <FontAwesomeIcon icon={faHeart} />
                )}
              </span>
              <span className="hidden group-hover:inline-block">
                <FontAwesomeIcon icon={solidHeart} />
              </span>
              Add to Favorite
            </div>
          )}
        </div>
        <h1 className="  text-headLine1">{post.title}</h1>
        <p className="  text-body1 ">{getText(post.content)}</p>
      </div>
      <div className="w-1/5 ">
        <Suggest category={post.category} />
      </div>
    </main>
  );
};

export default PostContent;
