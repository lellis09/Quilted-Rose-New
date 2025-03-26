import React from "react";


const DecorativeL = ({decClassName =  ""}) =>{
    return(
        <div className={`w-[2px] h-[8rem] bg-olive relative left-10 bottom-16 rotate-y-<90> ${decClassName} z-10`}></div>
    )
}

export default DecorativeL