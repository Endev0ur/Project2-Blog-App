import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaList } from "react-icons/fa";
import ProileDropdown from './ProileDropdown';

const NavBar = () => {

  const [profileMode , setProfileMode] = useState(false);

  const handleProfileMode = () => {
    setProfileMode(!profileMode);
  }

  return (
    <div className='h-[100%] w-[100%] bg-red-400 flex justify-around items-center relative z-50'>
      <span className='mr-[40%] text-3xl font-bold'>Logo</span>
      
      <div className={`hidden xl:flex justify-between items-center w-[30%] bg-blue-500 text-xl font-bold`}>
      <Link to={'/home'}>Home</Link>
      <Link>About</Link>
      <Link>Blogs</Link>
      <Link>MyBlogs</Link>
      <Link to={'/create'}>Create</Link>
      </div>
      <button className={` lg:h-[50px] lg:w-[50px] bg-transparent lg:bg-blue-500  rounded-[50%] relative cursor-pointer`} onClick={handleProfileMode}>
      <FaList  className="lg:hidden"/>
      </button>
      {profileMode && <ProileDropdown />}
    </div>
  )
}

export default NavBar