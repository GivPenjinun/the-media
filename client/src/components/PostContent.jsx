import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import dog from "../assets/dog-bobo.jpg";
import Suggest from "./Suggest";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";

const PostContent = () => {
  const [post, setPost] = useState({});
  const token = Cookies.get("authToken");
  const location = useLocation();
  const navigate = useNavigate();

  //get postId from current URL from index 2nd of array
  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

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

  //edit ย้ายไปdashboard
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  //edit อย่าลืมaccess post
  return (
    <main className="my-20 px-20 flex gap-12 w-full min-h-[350px]">
      <div className="w-4/5 flex flex-col gap-8">
        <div className="w-full flex justify-center">
          <img src={dog} className="w-[650px] h-[350px] " />
        </div>

        <div className="h-[80px] flex items-center gap-4">
          <img src={dog} className="h-[70px] w-[70px] rounded-full " />
          <div className="">
            <h4 className="text-headLine4">name</h4>
            <h4 className="text-body1">date</h4>
          </div>
        </div>
        <h1 className="  text-headLine1">title</h1>
        <p className="  text-body1 ">
          {getText(post.content)} Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Natus asperiores laboriosam voluptatibus assumenda
          repellat. Repellendus, dolor nulla? Soluta error rem quos cumque nisi
          repellendus, atque officiis expedita laudantium corrupti quidem! Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Natus asperiores
          laboriosam voluptatibus assumenda repellat. Repellendus, dolor nulla?
          Soluta error rem quos cumque nisi repellendus, atque officiis expedita
          laudantium corrupti quidem! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Natus asperiores laboriosam voluptatibus assumenda
          repellat. Repellendus, dolor nulla? Soluta error rem quos cumque nisi
          repellendus, atque officiis expedita laudantium corrupti quidem!
        </p>
        <button onClick={handleDelete}>delete</button>
      </div>
      <div className="w-1/5 ">
        <Suggest category={post.category} />
      </div>
    </main>
  );
};

export default PostContent;
