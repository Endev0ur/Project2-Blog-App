import React from 'react'

const RecentTemplate = ({blog}) => {

  return (
    <div className='h-[30%] w-[80%] bg-amber-500 mt-5 m-5 rounded-2xl flex justify-around items-center flex-wrap border-3 '>
      <div className='h-[50%] w-[90%] bg-gray-500 rounded-2xl flex justify-center items-center'>image area</div>
        <div className=' h-[40%] w-[90%] flex  items-center flex-wrap'>
          <p className='xl:text-xl 2xl:text-2xl w-[100%] font-bold'>{blog.topic}</p>
          <p className='xl:text-lg 2xl:text-xl w-[100%] font-bold' >{blog.username}</p>
        </div>
    </div>
  )
}

export default RecentTemplate;