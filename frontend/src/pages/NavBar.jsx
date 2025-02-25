import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaList } from "react-icons/fa";
import ProileDropdown from './ProileDropdown';

const NavBar = () => {

  const [profileMode , setProfileMode] = useState(false);

  const handleProfileMode = () => {
    setProfileMode(!profileMode);
  }

  
  

  return (
    <div className='h-[100%] w-[100%] bg-gray-900 flex justify-around items-center relative z-50 '>
      <span className='mr-[40%] text-3xl font-bold text-white'>Logo</span>
      
      <div className={`hidden xl:flex justify-between items-center w-[30%] text-xl font-bold`}>
      <Link to={'/home'} className='text-white'>Home</Link>
      <Link className='text-white'>About</Link>
      <Link to={'/home'} className='text-white'>Blogs</Link>
      <Link className='text-white'>MyBlogs</Link>
      <Link to={localStorage.getItem("loggedInUser")? '/create':"/home"} className='text-white'>Create</Link>
      </div>
      <button className={` lg:h-[50px] lg:w-[50px] bg-transparent lg:bg-blue-500  rounded-[50%] relative cursor-pointer`} onClick={handleProfileMode}>
      <FaList  className="lg:hidden"/>
      </button>
      {profileMode && <ProileDropdown />}
    </div>
  )
}

export default NavBar