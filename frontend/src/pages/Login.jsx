import React from "react";

const Login = () => {
  return (
    <div className="h-auto p-10 w-[90%] sm:w-auto  bg-amber-300 flex flex-col items-center overflow-hidden rounded-2xl bg-gradient-to-b from-blue-400  to-lime-700 shadow-2xl shadow-lime-900 ">
      <h1 className="text-4xl font-bold mb-8">Login</h1>
      

      <div className="bg-amber-500 w-[100%] h-12 flex justify-center items-center mb-4 mt-5 rounded-2xl bg-gradient-to-b from-violet-100 to-violet-400 shadow-lg shadow-violet-900 ">
        <input
          type="text"
          placeholder="Enter the email"
          name="email"
          autoComplete="off"
          className="h-full w-full pl-4 pr-4 outline-none text-xl"
        />
      </div>

      <div className="bg-amber-500 w-[100%] h-12 flex justify-center items-center mb-4 mt-5 rounded-2xl bg-gradient-to-b from-violet-100 to-violet-400 shadow-lg shadow-violet-900 ">
        <input
          type="password"
          placeholder="Enter the password"
          name="password"
          autoComplete="off"
          className="h-full w-full pl-4 pr-4 outline-none text-xl"
        />
      </div>

     

      <div className="w-[100%] h-12 flex justify-center items-center mt-6 rounded-2xl text-2xl font-bold bg-gradient-to-b from-blue-500 to-blue-700 shadow-lg shadow-blue-900">
        <button className="h-full w-full outline-none cursor-pointer">Login</button>
      </div>
      <br />
      <p>----------or----------</p>
      <br />
      <div className="bg-amber-500 w-[100%] h-12 flex justify-center items-center ">
        <button>Login with google</button>
      </div>
    </div>
  );
};

export default Login;
