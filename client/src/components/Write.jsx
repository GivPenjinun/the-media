import React from "react";

const Write = () => {
  return (
    <div className="flex flex-col gap-5">
      <input
        id="title"
        name="title"
        type="text"
        placeholder="title"
        //onChange={handleFileChange}
        className="border-primaryGray5 border-2 rounded-lg w-full  mt-2 text-primaryGray2 p-2 focus:outline-none focus:border-primaryBlue2"
      />
      <input
        id="upload"
        name="photo"
        type="file"
        //onChange={handleFileChange}
      />
      <form className="flex items-center gap-3">
        <h4 className="text-headLine4">Category:</h4>
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
      <textarea
        rows={10}
        type="text"
        id="content"
        name="content"
        placeholder="write content"
        className="border-primaryGray5 border-2 rounded-lg w-full  mt-2 text-primaryGray2 p-2 focus:outline-none focus:border-primaryBlue2"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-headLine3">Publish</h2>

        <p>
          <span className="text-headLine4">Status:</span> Draft
        </p>
        <p>
          <span className="text-headLine4">Visibility:</span> Public
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
