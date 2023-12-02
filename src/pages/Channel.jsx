import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {options} from "../ForApi/Api";
import Card from "../components/Card";

const Channel = () => {

    const[channeldata, setChanneldata] = useState([]);
    const location = useLocation();
    const channelId = location.pathname.split("/").at(-1);

    async function getchanneldata(channelId){
        try{
            const result = await fetch(`https://youtube-v3-alternative.p.rapidapi.com/channel?id=${channelId}`,options)
            const data = result.json();
            setChanneldata(data);
        }
        catch(err){
            console.log("error in channel");
        }
    }

    useEffect(() => {
        getchanneldata(channelId)
    }, [location]);

    return(
        <div className="p-4 flex flex-col gap-4 w-full h-[calc(100vh-5rem)] overflow-y-scroll text-white">
            <div className="w-full grid grid-cols-3 max-sm:grid-col-1 gap-4">
                {
                    channeldata.map((video, index) => {
                        return(
                            <Card key={index} {...video}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Channel;