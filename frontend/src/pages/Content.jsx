import React from "react";
import "../App.css";
import LeftBar from "./LeftBar";

const Content = () => {
  return (
    <div className="h-[100%] w-[100%] bg-green-300 flex items-center justify-center">
      <div className="hidden lg:flex h-[99%] w-[20%] bg-blue-700 flex-wrap justify-center items-center ">
        <LeftBar></LeftBar>
      </div>
      <div className="h-[99%] w-[99%] lg:w-[80%] xl:w-[65%] bg-pink-400">
        All Vlogs
      </div>
      <div className="hidden xl:flex h-[99%] w-[15%] bg-green-700 ">
        Top Blogs
      </div>
    </div>
  );
};

export default Content;
