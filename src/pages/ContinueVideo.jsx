import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from 'react-player';

import millify from "millify";
import Card from "../components/Card";
import { options } from "../ForApi/Api";

const ContinueVideo = () => {
    const location=useLocation();
    console.log(location);
    const vid=location.pathname.split("/").at(-1);
    console.log(vid);
    
    const[detailOfvid, setdetailOfvid] = useState(' ');
    const[relatedvid, setRelatedvid] = useState([]);


    // for related videos
    async function forrelatedvideos(vid){
        try{
            const result = await fetch(`https://youtube-v3-alternative.p.rapidapi.com/related?id=${vid}`,options);
            console.log(result);
            const{data} = await result.json();
            console.log(data);
            setRelatedvid(data);
        }
        catch(err){
            console.log("error in set related video");
        }
    }

    // for get detail of video
    async function forvideodetail(vid){
        try{
            const result = await fetch(`https://youtube-v3-alternative.p.rapidapi.com/video?id=${vid}`,options);
            console.log(result);
            const{data} = await result.json();
            console.log(data);
            setdetailOfvid(data);
        }
        catch(err){
            console.log("err in set detail of video");
        }
    }

    useEffect(() => {
        forrelatedvideos(vid);
        forvideodetail(vid)
    },[vid]);

    return(
        <div className="bg-neutral-950 flex max-sm:flex-col flex-row gap-5 text-white  max-sm:h-fit justify-between 
                    h-[calc(100vh-5rem)] w-[100vw] max-sm:p-2 p-4">
            {/* video */}
                 <div className="max-sm:h-[60vh] max-sm:mx-auto max-sm:w-[96vw] h-[calc(100vh-5rem)]  w-[60%] flex flex-col gap-2">
                    <ReactPlayer playing  controls width={"100%"} height={"100%"} url={`https://www.youtube.com/watch?v=${vid}`}/>
                
                    {/* <div className="max-sm:ml-0 ml-3 text-lg font-bold text-neutral-300 ">
                        <h1 >{detailOfvid?.title}</h1>
                        
                        <h1>channelTitle:{detailOfvid?.channelTitle}</h1>

                        <h1>{
                            detailOfvid?.viewCount ? (<h1>{millify(detailOfvid?.viewCount)} views</h1>)
                            : 
                            (<button className=' text-sm bg-red-600 rounded-md px-2  text-white'>Live</button>)

                        }Uploded on:{detailOfvid?.publishDate}</h1> 
                    </div> */}

                </div> 

            {/* related video */}
            <div className="max-sm:h-fit max-sm:w-[100%] max-sm:border-0 overflow-y-scroll h-full w-[40%] flex flex-col gap-3 text-white rounded-md max-sm:p-2 p-4 border-[2px] border-b-0 border-neutral-700">
                <h1 className=' font-bold text-2xl'>Suggested videos</h1>

                <div>
                    {
                        relatedvid.map((video, index) => {
                            return <Card fromwatchpage={true} key={index} {...video}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ContinueVideo;

