import React, { useEffect, useState } from "react";
import "../App.css";
import LeftBar from "./LeftBar";
import { FaPlus } from "react-icons/fa";
import Footer from "./Footer";

import BlogTemplate from "./BlogTemplate";
import NoBlogs from "./NoBlogs";
import RecentTemplate from "./RecentTemplate";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const [AllBlogs, setAllBlogs] = useState([]);
  const [recentBlogs , setRecentBlogs] = useState([]);

  let [catfilter ,setCatFilter] = useState([]);

  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      let url = "http://192.168.29.193:3000/home/";
      const response = await fetch(url);
      console.log(response);
      const result = await response.json();
      setAllBlogs(result.Blogs);


      const blogArr = result.Blogs;
      const reverseArray =  blogArr.reverse();
      let recentBlogArr = reverseArray.slice(0 , 5);
      setRecentBlogs(recentBlogArr);

    };

    fetchBlog();
  }, []);

  const handleCreateShortcut = () => {
    let ans = localStorage.getItem("loggedInUser");
    if(ans){
      navigateTo("/create");
    }else{
      navigateTo("/home");
    }
    
  }

  console.log("hello");
  console.log(catfilter);
  console.log(catfilter.length);

  return (
    <div className="h-[100%] w-[100%] bg-green-300 flex items-center justify-center flex-wrap">
      <div className="hidden lg:flex h-[99%] w-[20%] bg-gray-300 flex-wrap justify-center items-center ">
        <LeftBar catfilter={catfilter} setCatFilter={setCatFilter}></LeftBar>
      </div>
      <div className="h-[99%] w-[99%] lg:w-[80%] xl:w-[65%] pt-10 bg-red-500 flex flex-wrap lg:justify-start lg:items-start md:items-center justify-center items-center overflow-y-scroll scrollbar-hide relative">
        {catfilter.length===0 ? (AllBlogs.length != 0 ? (
          AllBlogs.map((blog) => {
            return <BlogTemplate blog={blog} />;
          })
        ) : (
          <NoBlogs />
        )):(
          (() => {
            const filteredBlogs = AllBlogs.filter((blog) => catfilter.includes(blog.category));
            return filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => <BlogTemplate key={index} blog={blog} />)
            ) : (
              <NoBlogs />
            );
          })()
        )}
      </div>
      <div className="hidden xl:flex h-[99%] w-[15%] bg-gray-500 flex-wrap overflow-y-scroll justify-center scrollbar-hide">
        <h1 className="text-xl font-bold mt-5 text-white">Recent Blogs : </h1>
        { recentBlogs.length != 0 ? (
          recentBlogs.map((blog) => {
            return <RecentTemplate blog={blog} />;
          })
        ) : (
          <NoBlogs />
        )}
      </div>
      <button
        className="h-[100px] w-[100px] bg-black absolute bottom-[10%] right-[20%] flex justify-center items-center rounded-full border-4 cursor-pointer shadow-lg"
        onClick={handleCreateShortcut}
      >
        <FaPlus className="text-5xl text-white" />
      </button>

      <div className="h-[40%] w-[100%] bg-red-500"><Footer></Footer></div>
    </div>
  );
};

export default Content;
