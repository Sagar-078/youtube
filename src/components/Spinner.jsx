import React from "react";
import "./Spinner.css"

const Spinner = () => {
    return(
        <div className="flex flex-col justify-center  items-center h-[100%] ">
            <div className="custom-loader"></div>
        </div>
    )
}

export default Spinner;