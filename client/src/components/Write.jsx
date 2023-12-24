import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-5">
      <input
        id="title"
        name="title"
        type="text"
        placeholder="title"
        //onChange={handleFileChange}
        className="border-primaryGray5 border-2 rounded-lg w-full  mt-2 text-primaryGray2 p-2 focus:outline-none "
      />

      <form className="flex items-center gap-3">
        <h4 className="font-bold">Category:</h4>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            id="art"
            name="category"
            value="art"
            className=""
          />
          <label htmlFor="art">Art</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            id="entertain"
            name="category"
            value="entertain"
            className=""
          />
          <label htmlFor="entertain">Entertain</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            id="design"
            name="category"
            value="design"
            className=""
          />
          <label htmlFor="design">Design</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            id="food"
            name="category"
            value="food"
            className=""
          />
          <label htmlFor="food">Food</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            id="science"
            name="category"
            value="science"
            className=""
          />
          <label htmlFor="science">Science</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            id="technology"
            name="category"
            value="technology"
            className=""
          />
          <label htmlFor="technology">Technology</label>
        </div>
      </form>
      <div className="w-full min-h-[350px] ">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
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

          //onChange={handleFileChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-headLine3">Publish</h2>

        <p>
          <span className="font-bold">Status:</span> Draft
        </p>
        <p>
          <span className="font-bold">Visibility:</span> Public
        </p>
        <div className="flex gap-4">
          <button className="py-1 px-2 border-2 border-primaryBlue1 hover:bg-primaryBlue2 bg-white">
            Save as draft
          </button>
          <button className="py-1 px-2 border-2 border-primaryBlue1 hover:bg-primaryBlue2 bg-white">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Write;
