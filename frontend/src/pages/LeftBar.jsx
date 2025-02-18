import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

const LeftBar = ({ catfilter , setCatFilter }) => {
  const navigateTo = useNavigate();

  const handleClick = (e) => {

    let arr = [...catfilter];


    let Categories = e.target.name;
    let indexofCategory = arr.indexOf(Categories);
    if (indexofCategory !== -1) {
      arr.splice(indexofCategory, 1);
    } else {
      arr.push(Categories);
    }

    if (arr.length >= 2 && arr[0] === "Home") {
      arr.shift();
    }

    setCatFilter(arr);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("id");

    navigateTo("/login");
  };

  return (
    <>
      <div className="h-[85%] w-[100%] bg-amber-300">
        <h1 className="text-2xl font-bold mt-4 ml-3">Categories : </h1>
        <div className="mt-3 bg-blue-500 h-[92%] overflow-y-auto pr-4 scrollbar-hide">
          <form action="" className="mt-3 ml-7 flex flex-col">
            <label className="block lg:text-xl rounded-4xl p-2 mr-3 cursor-pointer bg-gray-300 hover:bg-lime-300 transition-all duration-100 ease-in-out">
              <input
                type="checkbox"
                name="Movies"
                className="lg:h-4 lg:w-4  ml-5 cursor-pointer"
                onClick={handleClick}
              />{" "}
              Movies
            </label>
            <br />

            <label className="block lg:text-xl rounded-4xl p-2 mr-3 cursor-pointer bg-gray-300 hover:bg-lime-300 transition-all duration-100 ease-in-out">
              <input
                type="checkbox"
                name="Games"
                className="lg:h-4 lg:w-4  ml-5 cursor-pointer"
                onClick={handleClick}
              />{" "}
              {"  "}
              Games
            </label>
            <br />

            <label className="block lg:text-xl  rounded-4xl p-2 mr-3 cursor-pointer bg-gray-300 hover:bg-lime-300 transition-all duration-100 ease-in-out">
              <input
                type="checkbox"
                name="Sports"
                className="lg:h-4 lg:w-4  ml-5 cursor-pointer"
                onClick={handleClick}
              />{" "}
              Sports
            </label>
            <br />

            <label className="block lg:text-xl rounded-4xl p-2 mr-3 cursor-pointer bg-gray-300 hover:bg-lime-300 transition-all duration-100 ease-in-out">
              <input
                type="checkbox"
                name="Travel"
                className="lg:h-4 lg:w-4  ml-5 cursor-pointer"
                onClick={handleClick}
              />{" "}
              Travel
            </label>
            <br />

            <label className="block lg:text-xl  rounded-4xl p-2 mr-3 cursor-pointer bg-gray-300 hover:bg-lime-300 transition-all duration-100 ease-in-out">
              <input
                type="checkbox"
                name="Business"
                className="lg:h-4 lg:w-4 ml-5 cursor-pointer"
                onClick={handleClick}
              />{" "}
              Bussiness
            </label>
            <br />

          </form>
        </div>
      </div>
      <div className="h-[10%] w-[100%] bg-green-400 flex justify-center items-center">
        <button
          to={"/login"}
          className="h-[60%] w-[60%] bg-amber-300 rounded-4xl text-2xl font-bold cursor-pointer hover:h-[65%] hover:w-[65%] transition-all duration-600"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </>
  );
};

export default LeftBar;
