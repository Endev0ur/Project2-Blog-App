import React, { useEffect, useState } from 'react'
import BlogTemplate from './BlogTemplate'

import { ImCross } from "react-icons/im";
import NoBlogs from './NoBlogs';

const UserBlogs = ({username , userAllBlogs , setUserAllBlogs }) => {

  const [AllBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      let url = "http://localhost:3000/home/";
      const response = await fetch(url);
      console.log(response);
      const result = await response.json();

      const blogArr = result.Blogs;

      const realBlogArr = blogArr.filter(blogs=>blogs.username===username);

      // console.log(realBlogArr.length);

      setAllBlogs(realBlogArr);

      // console.log(result);

    };

    fetchBlog();
  }, []);


  const handleCross = () => {
    setUserAllBlogs(!userAllBlogs);
  }

  // console.log(AllBlogs.length);


  return (
    <>
      <div className="h-[90vh] w-[90vw] absolute bg-pink-400 flex justify-around items-center flex-wrap overflow-scroll scrollbar-hide p-10 rounded-2xl opacity-100">
        {AllBlogs.length!==0?(AllBlogs.map((blog)=>{
          if(blog.username===username){
            return <BlogTemplate blog={blog} key={blog._id}/>
          }
        })):(<NoBlogs />)}
        <ImCross className=' top-0 right-0 text-2xl mr-27 mt-15 fixed cursor-pointer' onClick={handleCross}/>
      </div>
      
    </>
    
  )
}

export default UserBlogs