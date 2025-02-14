import React from 'react'

const LeftBar = () => {
  return (
    <>
      <div className="h-[85%] w-[100%] bg-amber-300">
          <h1 className="text-2xl font-bold mt-4 ml-3">Categories : </h1>
          <div className="mt-3 bg-blue-500 h-[92%] overflow-y-auto pr-4">
            <form action="" className="mt-3 ml-7 flex flex-col">
              <label className="block lg:text-xl xl:text-2xl rounded-4xl p-2 mr-3 cursor-pointer bg-gray-300 hover:bg-lime-300 transition-all duration-100 ease-in-out">
                <input type="checkbox" name="Movies" className="lg:h-4 lg:w-4 xl:h-5 xl:w-5 ml-5 cursor-pointer" /> {" "}
                 Movies
              </label>
              <br />
            </form>
          </div>
        </div>
        <div className="h-[10%] w-[100%] bg-green-400 flex justify-center items-center">
          <button to={"/login"} className="h-[60%] w-[60%] bg-amber-300 rounded-4xl text-2xl font-bold cursor-pointer hover:h-[65%] hover:w-[65%] transition-all duration-600">Log out</button>
        </div>
    </>
  )
}

export default LeftBar