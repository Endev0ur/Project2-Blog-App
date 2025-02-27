import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProileDropdown = () => {

  const navigateTo = useNavigate();

  const handleProfile = () => {
    const admin = localStorage.getItem("isAdmin");
    console.log(admin);
    if(admin==="false"){
      navigateTo("/profile");
    }else{
      navigateTo("/admin");
    }
  }

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("id");
    localStorage.removeItem("isAdmin")
    
    navigateTo("/login");
  }

  

  return (
    <div className='h-[50vh] w-[20vw] bg-yellow-400 absolute top-20 right-20 mt-4 rounded-2xl p-6 flex justify-around items-center flex-wrap'>

      <div className='h-[10%] w-[90%] pl-[10%] bg-amber-500 flex  items-center rounded-xl cursor-pointer border-b-4 hover:bg-lime-300 transition-all duration-200' onClick={handleProfile}>
        <h1 className='text-2xl font-bold'>Profile</h1>
      </div>

      <div className='h-[10%] w-[90%] pl-[10%] bg-amber-500 flex  items-center rounded-xl cursor-pointer border-b-4 hover:bg-lime-300 transition-all duration-200'>
        <h1 className='text-2xl font-bold'>MyBlogs</h1>
      </div>

      <div className='h-[10%] w-[90%] pl-[10%] bg-amber-500 flex  items-center rounded-xl cursor-pointer border-b-4 hover:bg-lime-300 transition-all duration-200'>
        <h1 className='text-2xl font-bold'>Category</h1>
      </div>

      <div className='h-[10%] w-[90%] pl-[10%] bg-amber-500 flex  items-center rounded-xl cursor-pointer border-b-4 hover:bg-lime-300 transition-all duration-200'>
        <h1 className='text-2xl font-bold'>FeedBack</h1>
      </div>

      <div className='h-[10%] w-[90%] pl-[10%] bg-amber-500 flex  items-center rounded-xl cursor-pointer border-b-4 hover:bg-lime-300 transition-all duration-200 font-bold text-xl'>
        Connect via Linkedin
      </div>

      <div className='h-[15%] w-[90%]  bg-amber-500 flex  items-center rounded-xl justify-center'>
        <button className={`h-[80%] w-[70%] bg-blue-500 hover:bg-red-500 transition-all duration-200 rounded-2xl cursor-pointer text-xl font-bold border-2` } onClick={handleLogOut}>Logout</button>
      </div>

      
    </div>
  )
}

export default ProileDropdown