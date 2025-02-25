import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecentTemplate = ({blog}) => {

  const navigateTo = useNavigate();

  const handleReadmebtn = () => {
    navigateTo("/readme" , {state : blog})
  }

  return (
    <div className='h-[300px] w-[80%] bg-gradient-to-b from-green-400 to-yellow-500 mt-5 m-5 rounded-2xl flex justify-around items-center flex-wrap shadow-lg shadow-black'>
      <div className='h-[50%] w-[90%]  rounded-2xl flex justify-center items-center'>image area</div>
        <div className=' h-[40%] w-[90%] flex  items-center flex-wrap'>
          <p className='xl:text-xl 2xl:text-2xl w-[100%] font-bold'>{blog.topic}</p>
          <p className='xl:text-lg 2xl:text-xl w-[100%] font-bold text-gray-600' >{blog.username}</p>
          <button className='bg-blue-900 text-white p-1 rounded-xl w-[100%] flex justify-around items-center cursor-pointer font-bold ' onClick={handleReadmebtn}>
              Read me
            </button>
        </div>
    </div>
  )
}

export default RecentTemplate;