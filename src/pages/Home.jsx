import React from "react";
import Maindisplay from "../components/Maindisplay";
import Sider from "../components/Sider";


const Home = () => {
    return(
        <div className=" flex w-full flex-row h-[calc(100vh-5rem)]">
            <div className=" lg:w-[20%] ">

               <Sider/> 
            </div>
            <div className="w-[100%] md:w-[80%] h-full lg:w-[80%] ">
                <Maindisplay/>
            </div>
        </div>
    )
}

export default Home;