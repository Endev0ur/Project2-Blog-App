import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogTemplate = ({blog}) => {

  const navigateTo = useNavigate();

  const time = blog.createdAt;
  console.log(time);
  const date = new Date(time);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
  const day = date.getDate().toString().padStart(2, '0');


  const handleReadmebtn = () => {
    navigateTo("/readme" , {state : blog})
  }


  return (
    <div className='h-[400px] max-w-[80%] md:h-[400px] md:w-[40%] lg:w-[45%] lg:h-[400px] 2xl:h-[400px] 2xl:w-[30%] border-t-1 shadow-xl shadow-black mt-10 m-5 2xl:m-3 rounded-2xl flex justify-around items-center flex-wrap opacity-100 bg-gradient-to-b from-green-400 to-yellow-500'>
      <div className='h-[50%] w-[90%] rounded-2xl flex justify-center items-center'>image area</div>
        <div className=' h-[40%] w-[90%] flex  items-center flex-wrap'>
          <p className='text-2xl w-[100%] font-bold text-black'>{blog.topic}</p>
          <p className='text-xl w-[100%] text-gray-900'>Created by : {blog.username}</p>
          <p className='w-[100%] text-gray-700'>{`${year}-${month}-${day}`}</p>
          <p className='w-[100%] text-gray-700'>Category : <span className='font-bold'>{blog.category}</span></p>
          <div className='w-[100%] flex justify-around '>
            <button className='bg-blue-800 text-white p-1 rounded-xl w-[85%] flex justify-around items-center cursor-pointer font-bold ' onClick={handleReadmebtn}>
              Read me
            </button>
          </div>
        </div>
    </div>
  )
}

export default BlogTemplate;