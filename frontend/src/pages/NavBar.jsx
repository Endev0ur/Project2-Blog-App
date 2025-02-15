import React from 'react'
import { Link } from 'react-router-dom'
import { FaList } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className='h-[100%] w-[100%] bg-red-400 flex justify-around items-center '>
      <span className='mr-[40%] text-3xl font-bold'>Logo</span>
      
      <div className={`hidden xl:flex justify-between items-center w-[30%] bg-blue-500 text-xl font-bold`}>
      <Link to={'/home'}>Home</Link>
      <Link>About</Link>
      <Link>Blogs</Link>
      <Link>MyBlogs</Link>
      <Link>Create</Link>
      </div>
      <button className={` lg:h-[50px] lg:w-[50px] bg-transparent lg:bg-blue-500  rounded-[50%]`}>
        
      <FaList  className="lg:hidden"/>
      </button>
    </div>
  )
}

export default NavBar