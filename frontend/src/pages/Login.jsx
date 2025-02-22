
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [logininfo , setLoginInfo] = useState({
    email : "",
    password : "",
  })

  const navigateTo = useNavigate();

  const handleChange = (e) => {
    const {name , value} = e.target;
    const previnfo = {...logininfo};
    previnfo[name] = value;
    setLoginInfo(previnfo);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email , password} = logininfo;

    if(!email || !password){
      alert("All Fields are mandatory !");
    }

    const url = "http://localhost:3000/auth/login";
    const response = await fetch(url , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logininfo),
    })

    console.log(response);
    const result = await response.json();
    console.log(result);

    const {message , success , jwttoken , name , isAdmin} = result;

    if(success){

      localStorage.setItem('token' , jwttoken);
      localStorage.setItem('loggedInUser' , name);
      localStorage.setItem("isAdmin" , isAdmin);


      setTimeout(() => {
        navigateTo("/home");
      },2000);
    }else{
      alert(message);
    }

  }



  return (
    <form className="h-auto p-10 w-[90%] sm:w-auto  bg-amber-300 flex flex-col items-center overflow-hidden rounded-2xl bg-gradient-to-b from-blue-400  to-lime-700 shadow-2xl shadow-lime-900 " onSubmit={handleSubmit}>
      <h1 className="text-4xl font-bold mb-8">Login</h1>
      

      <div className="bg-amber-500 w-[100%] h-12 flex justify-center items-center mb-4 mt-5 rounded-2xl bg-gradient-to-b from-violet-100 to-violet-400 shadow-lg shadow-violet-900 ">
        <input
          type="email"
          placeholder="Enter the email"
          name="email"
          autoComplete="off"
          className="h-full w-full pl-4 pr-4 outline-none text-xl"
          value={logininfo.email}
          onChange={handleChange}
        />
      </div>

      <div className="bg-amber-500 w-[100%] h-12 flex justify-center items-center mb-4 mt-5 rounded-2xl bg-gradient-to-b from-violet-100 to-violet-400 shadow-lg shadow-violet-900 ">
        <input
          type="password"
          placeholder="Enter the password"
          name="password"
          autoComplete="off"
          className="h-full w-full pl-4 pr-4 outline-none text-xl"
          value={logininfo.password}
          onChange={handleChange}
        />
      </div>

     

      <div className="w-[100%] h-12 flex justify-center items-center mt-6 rounded-2xl text-2xl font-bold bg-gradient-to-b from-blue-500 to-blue-700 shadow-lg shadow-blue-900">
        <button className="h-full w-full outline-none cursor-pointer" type="submit">Login</button>
      </div>
      <br />
      <p>----------or----------</p>
      <br />
      <div className="bg-amber-500 w-[100%] h-12 flex justify-center items-center ">
        <button>Login with google</button>
      </div>
    </form>
  );
};

export default Login;
