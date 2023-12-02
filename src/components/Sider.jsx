import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { NavLinks } from "../ForNav/NavComponents";

const Sider = () => {
    const {searchedtext, setSearchedText} = useContext(AppContext);
    //
    function clickHandler(event){
        setSearchedText(event);
    }

    return(
        <div className="bg-neutral-900 ">
           <div className="gap-4 sidebar overflow-y-scroll 
            flex flex-col justify-center items-center font-bold max-sm:hidden 
            max-sm:flex-row  text-lg text-white w-full pt-16 h-[100vh] scroll-p-0">
           {
             NavLinks.map((event,index) => {
                //
                return(
                    <div className=" cursor-pointer ">
                        <div onClick={()=>clickHandler(event.name)} key={index} className={` ${searchedtext===event.name&&"bg-neutral-800 rounded p-2"} 
                            max-sm:h-fit max-sm:w-fit cursor-pointer p-2 w-32 flex justify-between rounded`}>
                            <div className=" ">
                                {event.icon}
                            </div>

                            <div className=" max-sm:hidden">
                                {event.name}
                            </div>
                        
                       
                        </div>
                        <div className="h-0.5 w-full bg-slate-700"></div>
                    </div>
                )
             })      
           }
           </div>
        </div>
    )
}

export default Sider;