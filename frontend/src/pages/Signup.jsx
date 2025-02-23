import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

  const [info , setInfo] = useState({
    name:"",
    email:"",
    password:"",
  })

  const navigateTo = useNavigate();

  const handleChange = (e) => {
    const {name , value} = e.target;
    const previnfo = {...info};
    previnfo[name] = value;
    setInfo(previnfo);

    console.log(previnfo);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {name , email , password} = info;
    
    if(!name || !email || !password){
      alert("All Field are mandatory !");
    }

    else{
      let url = "http://localhost:3000/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });

      console.log(response);
      const result = await response.json();
      console.log(result);

      const {message , success} = result;
      if(success){
        setTimeout(() => {
          navigateTo('/login');
        },2000);
      }else{
        alert(message);
      }
  }

  }


  return (
    <form className="h-auto p-10 w-[90%] sm:w-auto  flex flex-col items-center overflow-hidden rounded-2xl bg-gradient-to-b from-blue-400 to-lime-700 shadow-2xl shadow-lime-900 " onSubmit={handleSubmit}>
      <h1 className="text-4xl font-bold mb-8">Signup</h1>
      <div className="bg-amber-500 w-[100%] h-12 flex justify-center items-center mb-4 mt-5 rounded-2xl bg-gradient-to-b from-violet-100 to-violet-400 shadow-lg shadow-violet-900 ">
        <input
          type="text"
          placeholder="Enter the name"
          name="name"
          autoComplete="off"
          className="h-full w-full pl-4 pr-4 outline-none text-xl"
          onChange={handleChange}
          value={info.name}
        />
      </div>

      <div className="bg-amber-500 w-[100%] h-12 flex justify-center items-center mb-4 mt-5 rounded-2xl bg-gradient-to-b from-violet-100 to-violet-400 shadow-lg shadow-violet-900 ">
        <input
          type="email"
          placeholder="Enter the email"
          name="email"
          autoComplete="off"
          className="h-full w-full pl-4 pr-4 outline-none text-xl"
          onChange={handleChange}
          value={info.email}
        />
      </div>

      <div className="bg-amber-500 w-[100%] h-12 flex justify-center items-center mb-4 mt-5 rounded-2xl bg-gradient-to-b from-violet-100 to-violet-400 shadow-lg shadow-violet-900 ">
        <input
          type="password"
          placeholder="Enter the password"
          name="password"
          autoComplete="off"
          className="h-full w-full pl-4 pr-4 outline-none text-xl"
          onChange={handleChange}
          value={info.password}
        />
      </div>

     

      <div className="w-[100%] h-12 flex justify-center items-center mt-6 rounded-2xl text-2xl font-bold bg-gradient-to-b from-blue-500 to-blue-700 shadow-lg shadow-blue-900">
        <button className="h-full w-full outline-none cursor-pointer" type="submit">Signup</button>
      </div>
      <br />
      <p>========----------or----------========</p>
      <br />
      <div className=" w-full h-12 flex justify-center items-center ">
        <p className='font-bold text-md lg:text-lg'>Already have an account ? <Link to={"/login"} className="text-blue-400">Login</Link></p>
      </div>
    </form>
  );
};

export default Signup;
