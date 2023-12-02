import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";


const Search = () => {

    const {loading, inputtextvideos} = useContext(AppContext);
    const[videos, setVedios] = useState([]);
    const location = useLocation();
    let searchedText = location.pathname.split("/").at(-1);
    searchedText = searchedText.replace('%20' , ' ');
    
    async function getData(searchedText){
        const rest = await inputtextvideos(searchedText);
        console.log(rest);
        setVedios(rest);
    }

    useEffect(() => {
        getData(searchedText);
    }, [searchedText]);

    return(
        <div className="text-white flex flex-col gap-4 p-4 w-full h-[calc(100vh-5rem)] overflow-y-scroll">
            <p className="flex gap-3 text-3xl max-sm:text-sm font-serif text-neutral-500">Showing result for <span className="text-red-600">{searchedText}</span></p>
            <div >
                {
                    loading? 
                    (<Spinner/>) : 
                    (
                        <div className="">
                            {
                                videos.length === 0 ? (<h1>No vedios found</h1>) 
                                : 
                                (
                                    <div className=" h-full max-sm:grid-cols-1 max-sm:pl-2 grid grid-cols-3 gap-4">
                                        {
                                            videos.map((video, index) => {
                                                return(
                                                    <Card key={index} {...video} />
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Search;