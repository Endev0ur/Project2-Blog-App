import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {

  const navigateTo = useNavigate();


  let [createBlog , setCreateBlog] = useState({
    topic : "",
    category : "Choose a category",
    content : "",
  })

  const handleChange = (e) => {
    const {name , value} = e.target;
    
    let copyCreateBlog = {...createBlog};
    copyCreateBlog[name] = value;
    setCreateBlog(copyCreateBlog);

  } 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {topic , category , content} = createBlog;
    const token = localStorage.getItem("token");
    console.log(token);

    if(!topic || !content || category==="Choose a category"){
      alert("All field are required to filled !");
    }

    const url = "http://localhost:3000/home/create";
    const response = await fetch(url , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization":`Bearer ${token}`,
      },
      body: JSON.stringify(createBlog),
    })
    console.log(response);
    const result = await response.json();
    console.log(result);

    const {messsage , success} = result;
    if(success){
      alert("Blog Created Successfully");
      navigateTo("/home");
    }
  }


  return (
    <div className='h-[90%] w-[30%] bg-amber-400 p-5 rounded-4xl'>
      <form action="" className='h-[100%] w-[100%]' onSubmit={handleSubmit}>
        <h1 className='text-4xl font-bold mb-10'>Create Blog Form</h1>
        <div className='bg-pink-400 p-2 mb-6'>
          <p className='text-2xl font-bold mb-2'>Topic : </p>
          <input 
          type="text" 
          className='ml-2 p-2 pl-5 bg-red-400 h-[50px] w-[90%] text-xl font-black rounded-xl outline-none autofill:off border-b-4 '
          placeholder='Enter the Topic : '
          name='topic'
          onChange={handleChange}
          value={createBlog.topic}
          />
        </div>
        
        <div className='bg-pink-400 p-2 mb-6'>
          <label htmlFor="category" className='text-2xl font-bold mb-2'>Choose a category:</label>
          <br />
          <select 
          id="category" 
          name="category" 
          className='block mt-4 ml-3 h-11 w-[50%] p-2 pr-10 text-xl font-bold outline-none border-1 rounded-3xl bg-gray-400'
          onChange={handleChange}
          value={createBlog.category}
          >
              <option value="Choose a category">Choose a category : </option>
              <option value="Movie">Movie</option>
              <option value="Games">Games</option>
              <option value="Sports">Sports</option>
              <option value="Travel">Travel</option>
              <option value="Business">Business</option>
          </select>
        </div>
        <div className='h-[50%] bg-pink-400 p-2 mb-6'>
          <textarea 
          name="content" 
          className='h-[100%] w-[100%] p-4 text-xl outline-none border-4 border-black rounded-3xl resize-none' placeholder='Enter you Blog Description Here : '
          onChange={handleChange}
          value={createBlog.content}
          ></textarea>
        </div>
        <button className='h-[6%] w-[50%] bg-amber-600 rounded-2xl text-xl font-black cursor-pointer' type='submit'>Create Button</button>
      </form>
    </div>
  )
}

export default CreateBlog