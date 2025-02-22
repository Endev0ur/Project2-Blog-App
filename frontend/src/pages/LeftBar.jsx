import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

const LeftBar = ({ catfilter , setCatFilter }) => {
  const navigateTo = useNavigate();

  let [allCategories , setAllCategories] = useState([]);
  
  const [createCategoryMode , setCreateCategoryMode] = useState(false);


  const [newCategory , setNewCategory]  = useState({
    name:"",
  });

  useEffect(() => {
    let fetchCategories = async () => {
      let url = "http://localhost:3000/home/category/";
      let response = await fetch(url);
      console.log(response);
      const result = await response.json();
      console.log("dssfklsakdlfjkjsdfjlakjklfjskdajfklsdjkksdjalf");
      console.log(result.categories);
      let categoryarr = result.categories;
      setAllCategories(categoryarr);
    }
    fetchCategories();

  }, [createCategoryMode])
  
  const isAdmin = localStorage.getItem("isAdmin");

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
    localStorage.removeItem("isAdmin")

    navigateTo("/login");
  };


  const handleCreateCategory = () => {
    setCreateCategoryMode(!createCategoryMode);
  }


  const handlenewCategory = (e) => {
    const {name , value} = e.target;
    const previnfo = {...newCategory};
    previnfo[name] = value;
    setNewCategory(previnfo);

    console.log(previnfo);
    
  }

  const handleCreateNewCategoryBtnFunc = async() => {
    console.log(newCategory)
    if(!newCategory){
      alert("write the category please");
    }

    else{
      let url = "http://localhost:3000/home/category/create";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(newCategory)
      });

      console.log(response);
      let result = await response.json();
      console.log(result);
      setCreateCategoryMode(!createCategoryMode);

    }


  }


  return (
    <>
      <div className="h-[85%] w-[100%] bg-amber-300">
        <h1 className="text-2xl font-bold mt-4 ml-3">Categories : </h1>
        <div className="mt-3 bg-blue-500 h-[92%] overflow-y-auto pr-4 scrollbar-hide">
          <form action="" className="mt-3 ml-7 flex flex-col">
            {allCategories.map((category , index)=>{
              return (
                <>
                  <label className="block lg:text-xl rounded-4xl p-2 mr-3 cursor-pointer bg-gray-300 hover:bg-lime-300 transition-all duration-100 ease-in-out">
                  <input
                    type="checkbox"
                    name={category.name}
                    key={index}
                    className="lg:h-4 lg:w-4  ml-5 cursor-pointer"
                    onClick={handleClick}
                  />{" "}
                  {category.name}
                </label>
                <br />
               </>
              )
            })}

          </form>
        </div>
      </div>
      <div className="h-[10%] w-[100%] bg-green-400 flex justify-center items-center relative z-50">
        
        {isAdmin==="true"?(<button
          to={"/login"}
          className="h-[60%] w-[60%] bg-amber-300 rounded-4xl text-2xl font-bold cursor-pointer hover:h-[65%] hover:w-[65%] transition-all duration-600"
          onClick={handleCreateCategory}
        >
          Catogory
        </button>):(<button
          to={"/login"}
          className="h-[60%] w-[60%] bg-amber-300 rounded-4xl text-2xl font-bold cursor-pointer hover:h-[65%] hover:w-[65%] transition-all duration-600"
          onClick={handleLogout}
        >
          Log out
        </button>)}

        {createCategoryMode && 
        <div className="absolute h-[100%] w-[95%] bg-purple-500 rounded-2xl border-2 left-2 bottom-23 z-50 flex justify-around items-center p-4">
          <input type="text" 
          onChange={handlenewCategory} 
          value={newCategory.name}
          name="name"
          
          className="h-[90%] w-[70%] outline-none border-3 rounded-l-3xl pl-5 pr-5 font-bold text-xl bg-gray-300"
          placeholder="Enter the category"/>
          <button className=" h-[90%] w-[20%] border rounded-r-3xl bg-amber-400 pr-4 text-3xl font-bold cursor-pointer" onClick={handleCreateNewCategoryBtnFunc}>+</button>
        </div>}
      </div>

      
    </>
  );
};

export default LeftBar;
