import React, { useEffect, useState } from 'react'
import BlogTemplate from './BlogTemplate'

import { ImCross } from "react-icons/im";
import NoBlogs from './NoBlogs';

const AllUsers = ({allUsers , setAllUsers }) => {

  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchBlog = async () => {
      let url = "http://localhost:3000/auth/getallusers";
      const response = await fetch(url);
      console.log(response);

      const result = await response.json();
      console.log(result); 

      const userArr = result.user;
      console.log(userArr);

      setUsers(userArr);
      
      

    };

    fetchBlog();
  }, []);


  const handleCross = () => {
   setAllUsers(!allUsers);
  }

  // console.log(AllBlogs.length);


  return (
    <>
      <div className="h-[90vh] w-[90vw] absolute bg-pink-400 flex justify-around flex-wrap overflow-scroll scrollbar-hide p-10 pr-0 rounded-2xl opacity-100 z-50">
      {users.length!==0?(users.map((user , index)=>{
          return <div key={index} className='h-[10%] w-[20%] bg-red-700 flex justify-center items-center border-4 rounded-2xl'>
            <p className='text-2xl font-bold'>{user.name}</p>
          </div>
        })):(<NoBlogs />)}
        
        <ImCross className=' top-0 right-0 text-2xl mr-27 mt-15 fixed cursor-pointer' onClick={handleCross}/>
      </div>
      
    </>
    
  )
}

export default AllUsers;