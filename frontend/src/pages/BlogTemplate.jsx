import React from 'react'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const BlogTemplate = ({blog}) => {

  const time = blog.createdAt;
  console.log(time);
  const date = new Date(time);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
  const day = date.getDate().toString().padStart(2, '0');


  const handleLikesCount = () => {

  }

  const handleDislikeCount = () => {
    
  }

  return (
    <div className='h-[45%] w-[30%] bg-amber-500 mt-10 m-5 rounded-2xl flex justify-around items-center flex-wrap'>
      <div className='h-[50%] w-[90%] bg-gray-500 rounded-2xl flex justify-center items-center'>image area</div>
        <div className=' h-[40%] w-[90%] flex  items-center flex-wrap'>
          <p className='text-xl w-[100%] font-bold'>{blog.topic}</p>
          <p className='text-xl w-[100%]'>created BY : {blog.username}</p>
          <p className='w-[100%]'>{`${year}-${month}-${day}`}</p>
          <p className='w-[100%]'>category : {blog.category}</p>
          <div className='w-[100%] flex justify-around bg-red-300'>
            <button className='bg-blue-500 p-1 rounded-xl w-[45%] flex justify-around items-center cursor-pointer' onClick={handleLikesCount}>
              <BiLike className='inline'/> : <span>{blog.likesCount}</span>
            </button>
            <button className='bg-red-500 p-1 rounded-xl w-[45%] flex justify-around items-center cursor-pointer' onClick={handleDislikeCount}>
              <BiDislike></BiDislike> : <span>{blog.dislikeCount}</span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default BlogTemplate;