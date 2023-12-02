import React from "react";
import {Link} from "react-router-dom";
import millify from "millify"

//
const Card = ({type, videoId, title, channelTitle, channelId,fromwatchpage, description, viewCount, publishedText, lengthText, thumbnail, richThumbnail}) => 
{
     
 return(
    <div>
        {
            type!== "channel"?
            (
                <Link className={`flex  hover:scale-[1.01] duration-700 ${fromwatchpage?"max-sm:flex-col flex-row gap-2":"flex-col"}`} to={`/watchvideo/${videoId}` }>
                    <div className="relative">
                        <img src={type==="video"?thumbnail[0]?.url:thumbnail[3]?.url} className={`rounded ${"max-sm:w-[93vw] max-sm:h-[200px]"}`}/>
                    </div>
                    <div className={`flex flex-col text-white ${fromwatchpage && "w-[calc(100%-200px)]"}`}>
                        <h1 className={`${fromwatchpage && "truncate"}`}>{title}</h1>
                        <h1 className="text-neutral-500">{channelTitle}</h1>
                        <div className="flex gap-3">
                            {/*  */}
                            {
                                viewCount?(<h1 className="text-neutral-400">{millify(viewCount)} viwes</h1>) : 
                               (<button className="text-sm bg-red-600 rounded px-2 flex justify-center items-center text-slate-300">Live</button>)
                            }
                            <h1 className="text-neutral-400">{". "+publishedText}</h1>
                        </div>
                    </div>
                </Link>
            ):
            (
                <Link className="flex flex-col gap-2 item-center text-white " to={`${channelId}`}>
                    <div className="relative">
                        <img src={thumbnail[0].url} className="rounded-full"/>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg text-center">{channelTitle}</h1>
                        <h1>{description}</h1>
                    </div>
                </Link>
            )
        }
    </div>
 )   
}
export default Card;