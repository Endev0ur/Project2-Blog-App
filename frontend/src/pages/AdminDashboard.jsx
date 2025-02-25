import React, { useState } from 'react'
import NavBar from './NavBar'
import LeftBar from './LeftBar';
import UserBlogs from './UserBlogs';
import AllUsers from './AllUsers';

const AdminDashboard = () => {

  let name = localStorage.getItem("loggedInUser");

  const [userAllBlogs , setUserAllBlogs] = useState(false);

  const [allUsers , setAllUsers] = useState(false);

  const handleUserBlogs = () => {
    setUserAllBlogs(!userAllBlogs);
  }

  const handleAllUsers = () => {
    setAllUsers(!allUsers);
  }

  return (
    <div className="h-[100vh] lg:h-[100%] w-[98%] bg-amber-300 flex flex-col justify-around items-center flex-wrap relative">
      <div className='h-1/12 w-[100%] bg-red-300'>
        <NavBar></NavBar>
      </div>
      <div className='h-[90%] w-full mt-2 flex'>
        <div className=' hidden lg:flex h-[99%] w-[20%] bg-gray-300 flex-wrap justify-center items-center '>
          <LeftBar></LeftBar>
        </div>
        <div className='h-[100%] w-[100%] lg:w-[80%] bg-black relative'>
           <div className='h-[10%] w-[100%] text-white mt-5 flex items-center'>
              <h1 className='text-2xl md:text-4xl font-bold pl-10'>Welcome {name} : </h1>
           </div>
           <div className='h-[15%] lg:h-[15%] md:h-[20%] w-[100%]  mt-5 flex justify-around items-center'>
              <div className='h-[80%] w-[40%] md:w-[30%] bg-gray-800 text-white shadow-xl shadow-white rounded-2xl flex justify-around items-center cursor-pointer ' onClick={handleUserBlogs}>
                <p className='text-2xl md:text-4xl font-bold '>All Blogs : </p>
              </div>
              <div className='h-[80%] w-[40%] md:w-[30%] bg-gray-800 text-white shadow-xl shadow-white rounded-2xl flex justify-around items-center cursor-pointer' onClick={handleAllUsers}>
                <p className='text-2xl md:text-4xl font-bold '>All Users : </p>
              </div>
           </div>
           
        </div>
      </div>
      {userAllBlogs && <UserBlogs username={name} userAllBlogs={userAllBlogs} setUserAllBlogs={setUserAllBlogs} />}
      {allUsers && <AllUsers allUsers={allUsers} setAllUsers={setAllUsers} />}
  </div>
  )
}

export default AdminDashboard