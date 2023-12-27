import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const [errors, setErrors] = useState({});
  const state = useLocation().state;
  const [content, setContent] = useState(state?.content || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState(state?.category || "");

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    // Validate Title
    if (!title) {
      newErrors.title = "Please write title";
    }

    // Validate Content
    if (!content) {
      newErrors.content = "Please write content";
    }

    //Validate Category
    if (!category) {
      newErrors.category = "Choose one category";
    }

    //Validate Image
    if (!file) {
      newErrors.image = "Choose one image";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

  //sending request by call upload first
  const handlePublish = async (e) => {
    e.preventDefault();

    const validate = validateForm();
    if (validate) {
      const imgUrl = await upload();
      try {
        state
          ? await axios.put(`http://localhost:8800/posts/${state.id}`, {
              title,
              content,
              category,
              image: file ? imgUrl : "",
              updated_at: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            })
          : await axios.post(`http://localhost:8800/posts/`, {
              title,
              content,
              category,
              image: file ? imgUrl : "",
              created_at: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
              updated_at: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
              status: "publish",
            });
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  //for save draft
  const handleDraft = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      await axios.post(`http://localhost:8800/posts/`, {
        title,
        content,
        category,
        image: file ? imgUrl : "",
        created_at: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        updated_at: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        status: "draft",
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="">
        <input
          required
          id="title"
          name="title"
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          className="border-primaryGray5 border-2 rounded-lg w-full  mt-2 text-primaryGray2 p-2 focus:outline-none "
        />
      </div>

      <div className="flex items-center gap-3">
        <h4 className="font-bold">Category:</h4>
        <div className="flex items-center gap-1">
          <input
            required
            type="radio"
            id="art"
            name="category"
            value="art"
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="art">Art</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            id="entertain"
            name="category"
            value="entertain"
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="entertain">Entertain</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            id="design"
            name="category"
            value="design"
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="design">Design</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            id="food"
            name="category"
            value="food"
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="food">Food</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            id="science"
            name="category"
            value="science"
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="science">Science</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            id="technology"
            name="category"
            value="technology"
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="technology">Technology</label>
        </div>
      </div>

      <div className="w-full min-h-[350px] ">
        <ReactQuill
          required
          theme="snow"
          value={content}
          onChange={setContent}
          className="editor"
        />
      </div>

      <div className="flex gap-5">
        <label htmlFor="file" className="font-bold">
          Upload Image
        </label>
        <input
          id="file"
          name="photo"
          type="file"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <span className="text-red-500">
          optimum image size: width 650px height 350px
        </span>
      </div>
      <div className="">
        {file ? (
          <img
            className="image-preview w-[650px] h-[350px]"
            src={URL.createObjectURL(file)}
          />
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <div className="">
          {Object.keys(errors).length
            ? Object.keys(errors).map((key, id) => {
                return (
                  <p key={id} className="mt-2 text-sm text-red-600">
                    {errors[key]}
                  </p>
                );
              })
            : null}
        </div>
        <h2 className="text-headLine4">Save Draft or Publish?</h2>
        {/* <p>
          <span className="font-bold">Status:</span> Draft
        </p>
        <p>
          <span className="font-bold">Visibility:</span> Public
        </p>
        */}

        <div className="flex gap-4">
          <button
            onClick={handleDraft}
            className="py-1 px-2 border-2 border-primaryBlue1 hover:bg-primaryBlue2 bg-white"
          >
            Save as draft
          </button>
          <button
            onClick={handlePublish}
            className="py-1 px-2 border-2 border-primaryBlue1 hover:bg-primaryBlue2 bg-white"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Write;
