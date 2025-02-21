import React, { useEffect, useRef, useState } from 'react'
import UserBlogs from './UserBlogs'
import { useNavigate } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const UserDashboard = () => {

  const navigateTo = useNavigate();

  const [userAllBlogs , setUserAllBlogs] = useState(false);

  const handleUserBlogs = () => {
    setUserAllBlogs(!userAllBlogs);
  }

  const name = localStorage.getItem("loggedInUser");

  const [email , setEmail ] = useState("");

  useEffect(() => {

    const fetchUser = async () => {
      let url = `http://localhost:3000/auth/getuser/${name}`;
      const response = await fetch(url , {
        method : "GET",
      });
      console.log(response);
      const result = await response.json();

      console.log(result);
      const{message , user , success} = result;

      setEmail(user.email);

    }

    fetchUser();

  }, [])


  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("id");

    navigateTo("/login");
  };
  

  return (
    <div className='h-[70vh] w-[40vw] bg-amber-600 p-1 flex justify-center items-center flex-col rounded-4xl border-4 relative'>
      <div className='h-[180px] w-[180px] bg-gray-400 rounded-[50%] flex justify-center items-center cursor-pointer border-16 hover:bg-gray-500 transition-all duration-200'>
        img area
      </div>
      <div className='mt-10'>
        <h1 className='text-3xl font-bold'>Name : {name}</h1>
      </div>

      <div className='mt-10'>
        <h1 className='text-3xl font-bold'>Email : {email}</h1>
      </div>

      <div className='mt-10  bg-red-400 p-4 cursor-pointer flex' onClick={handleUserBlogs}>
        <h1 className='text-3xl font-bold'> All Blogs <MdKeyboardDoubleArrowRight className='inline' /></h1>
      </div>

      <button className='h-[8%] w-[30%] bg-red-400 mt-10 text-xl font-bold border-2 rounded-2xl cursor-pointer' onClick={handleLogOut}>
        Logout
      </button>

      {userAllBlogs && <UserBlogs username={name} userAllBlogs={userAllBlogs} setUserAllBlogs={setUserAllBlogs} />}
      
    </div>
  )
}

export default UserDashboard;