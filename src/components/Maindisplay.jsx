import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";


const Maindisplay = () => {

    const{loading, setLoding, searchedtext, inputtextvideos} = useContext(AppContext);
    const[videos, setVedios] = useState([]);

   async function getvedios(searchedtext){
    const data = await inputtextvideos(searchedtext);
    setVedios(data);
   }

   useEffect(() => {
    getvedios(searchedtext);
   }, [searchedtext])

    return(

        // if loading is true then show spinner if false then show then check length is 0 then 
        // show a text and if length is not 0 then creat a card and copy 
        <div className="p-4 items-center mx-auto flex flex-col lg:gap-5 relative w-full h-full">
            {
                loading?(<Spinner/>)
                : 
                (
                    <div className="h-full maindisplay overflow-y-scroll   ">
                        {
                           videos.length=== 0?(<h1>No Vedios Found</h1>)
                           : (
                            <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 p-2">
                                {
                                    //
                                    videos.map((video, index) => {
                                        return(
                                            <Card {...video} key={video?.videoId}/>
                                        )
                                    })
                                }
                            </div>
                           )
                        }
                        <h1 className="text-white flex justify-center font-mono text-2xl">Search anything for more in Searchbar</h1>
                    </div>
                )
            }
        </div>
    )
}

export default Maindisplay;