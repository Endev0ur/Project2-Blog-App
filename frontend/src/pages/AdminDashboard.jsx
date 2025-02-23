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
        <div className='h-[100%] w-[20%] bg-red-400'>
          <LeftBar></LeftBar>
        </div>
        <div className='h-[100%] w-[80%] bg-black relative'>
           <div className='h-[10%] w-[100%] bg-pink-300 mt-5 flex items-center'>
              <h1 className='text-4xl font-bold pl-10'>Welcome {name} : </h1>
           </div>
           <div className='h-[20%] w-[100%] bg-yellow-600 mt-5 flex justify-around items-center'>
              <div className='h-[80%] w-[30%] bg-gray-500 rounded-2xl flex justify-around items-center cursor-pointer border-2' onClick={handleUserBlogs}>
                <p className='text-4xl font-bold '>All Blogs : </p>
              </div>
              <div className='h-[80%] w-[30%] bg-gray-500 rounded-2xl flex justify-around items-center cursor-pointer border-2' onClick={handleAllUsers}>
                <p className='text-4xl font-bold '>All Users : </p>
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