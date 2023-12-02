import React, { useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { ImYoutube2 } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
    const[inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    function changHandler(event){
        setInputValue(event.target.value);
    }

    // on submit it navigate to search this value of input text and prevent defult 
    function submitHandler(e){
        e.preventDefault();
        if(inputValue.length===0 || inputValue==null){
            return;
        }
      
        const serachvalue=inputValue;
        setInputValue("");
        console.log("Called");
        navigate(`/search/${serachvalue}`);
        
    }


    return(
        <div >
            <nav  className="flex justify-between align-baseline w-full h-16 bg-neutral-900 ">
                <div >
                <NavLink to="/" className="flex gap-1 lg:ml-3 ">
                    <FaYoutube className="text-5xl text-red-600 "/>
                    <ImYoutube2 className="text-5xl mt-2 text-white sm:invisible lg:visible"/>
                </NavLink>
                </div>

               <div>
                <form className="mt-2 my-auto bg-neutral-800  
                    p-3 lg:w-[500px] rounded-full flex outline-none text-white 
                    justify-center items-center h-11" onSubmit={submitHandler}>
                    
                    
                    <input placeholder="search" spellCheck={false} 
                    className="bg-transparent w-full text-white h-full outline-none border-r border-neutral-400"
                    onChange={changHandler} value={inputValue}/>

                    <button>
                        <FaSearch className="text-white lg:ml-2 ml-1"/> 
                    </button>
                </form>
               </div>

               <div className="lg:mr-10 text-white text-2xl mt-3">
               <IoMdNotificationsOutline />
               </div>

            </nav>
        </div>
    )
}

export default Navbar;