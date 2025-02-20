import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

const ReadBlog = () => {

  const navigateTo = useNavigate();

  const location = useLocation();
  const data = location.state || {};

  const loggedInUser = localStorage.getItem("loggedInUser");
  console.log("hello" , loggedInUser);

  console.log(data);

  const handleDeleteBlog = async() => {
    const id = data._id;
    console.log(id);

    let url = `http://localhost:3000/home/delete/${id}`;
    const response = await fetch(url , {
      method : "DELETE",
    });

    console.log(response);
    const result = await response.json();
    console.log(result);

    const {success} = result;
    if(success){
      alert("Blog Deleted Successfully");
      navigateTo("/home");
    }

  }


  const handleUpdateBlog = () => {
    navigateTo('/update' , {state : data});
  }

  return (
    <div className='h-full lg:h-[100%] w-[98%] bg-amber-300 flex flex-col wrap'>
      <div className='h-1/12 w-[100%] bg-red-300'>
        <NavBar></NavBar>
      </div>
      <br />
      <hr />
      <br />
      <div className='h-screen bg-red-500 flex flex-wrap justify-center items-center overflow-y-auto scrollbar-hide'>
        <div className='h-[60%] w-[50%] rounded-3xl  bg-gray-300 flex justify-center items-center m-1'>
          image area
        </div>
        <div className='h-[60%] w-[40%] bg-gray-500 rounded-3xl p-3 m-1 flex flex-col justify-center'>
          <p className='text-4xl font-bold '>{data.topic}</p>
          <p className='text-2xl font-bold mb-3'>created BY : {data.username}</p>
          <p className='text-xl font-bold mb-1'>Date & time : {data.createdAt}</p>
          <p className='text-xl font-bold'>category : {data.category}</p>
          {loggedInUser===data.username && 
          <div className='h-[15%] w-[90%] bg-amber-300 mt-10 flex justify-around items-center'>
            <button className='h-[80%] w-[40%] bg-blue-500 rounded-2xl border-3 font-bold' onClick={handleUpdateBlog}>Update</button>
            <button className='h-[80%] w-[40%] bg-red-500 rounded-2xl border-3 font-bold cursor-pointer' onClick={handleDeleteBlog}>Delete</button>
          </div>
         }
        </div>
        <div className='h-[100%] w-[90%] bg-gray-900 rounded-4xl mt-10 text-2xl p-5 overflow-y-scroll scrollbar-hide'>
          <pre className='whitespace-break-spaces'>
          {data.content}
          </pre>
        </div>
        

      </div>
    </div>
  )
}

export default ReadBlog