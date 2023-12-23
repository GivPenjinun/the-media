import React from "react";

const Search = () => {
  return (
    <div className="w-full flex justify-center">
      <form className="flex items-center gap-3">
        <h4>Category:</h4>
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
        <input
          className="text-body2 rounded-md border-2 border-primaryBlue1 px-2 focus:outline-none"
          placeholder="Search for title"
          type="text"
          name="keyword"
        />
        <button className="rounded-full py-1 px-2 border-2 border-primaryBlue1 hover:bg-white bg-primaryBlue2">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
