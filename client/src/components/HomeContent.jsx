import React from "react";
import dog from "../../public/dog-bobo.jpg";

const HomeContent = () => {
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
            <button className="rounded-md p-1 border-2 border-primaryBlue1 bg-primaryBlue2">
              Read More
            </button>
          </div>
          <div className=" w-1/3">
            <img src={dog} alt="" className="w-full h-[350px]" />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeContent;
