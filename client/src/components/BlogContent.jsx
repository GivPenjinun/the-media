import React from "react";
import dog from "../assets/dog-bobo.jpg";
import Suggest from "./Suggest";

const BlogContent = () => {
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
          asperiores laboriosam voluptatibus assumenda repellat. Repellendus,
          dolor nulla? Soluta error rem quos cumque nisi repellendus, atque
          officiis expedita laudantium corrupti quidem! Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Natus asperiores laboriosam
          voluptatibus assumenda repellat. Repellendus, dolor nulla? Soluta
          error rem quos cumque nisi repellendus, atque officiis expedita
          laudantium corrupti quidem! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Natus asperiores laboriosam voluptatibus assumenda
          repellat. Repellendus, dolor nulla? Soluta error rem quos cumque nisi
          repellendus, atque officiis expedita laudantium corrupti quidem!
        </p>
      </div>
      <div className="w-1/5 ">
        <Suggest />
      </div>
    </main>
  );
};

export default BlogContent;
