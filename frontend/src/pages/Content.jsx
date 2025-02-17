import React, { useEffect, useState } from "react";
import "../App.css";
import LeftBar from "./LeftBar";

import BlogTemplate from "./BlogTemplate";
import NoBlogs from "./NoBlogs";

const Content = () => {

  const [AllBlogs , setAllBlogs] = useState([]);


  useEffect(() => {

    const fetchBlog = async () => {
      let url = "http://localhost:3000/home/";
      const response = await fetch(url);
      console.log(response);
      const result = await response.json();
      setAllBlogs(result.Blogs);

    }

    fetchBlog();
  }, [])
  
  console.log(AllBlogs);
  return (
    <div className="h-[100%] w-[100%] bg-green-300 flex items-center justify-center">
      <div className="hidden lg:flex h-[99%] w-[20%] bg-blue-700 flex-wrap justify-center items-center ">
        <LeftBar></LeftBar>
      </div>
      <div className="h-[99%] w-[99%] lg:w-[80%] xl:w-[65%] bg-pink-400 flex flex-wrap justify-between overflow-y-scroll">
        {AllBlogs.length!=0 ? AllBlogs.map((blog , index)=>{
          return <BlogTemplate blog={blog}/>
        }) : <NoBlogs />}
      </div>
      <div className="hidden xl:flex h-[99%] w-[15%] bg-green-700 ">
        Top Blogs
      </div>
    </div>
  );
};

export default Content;
