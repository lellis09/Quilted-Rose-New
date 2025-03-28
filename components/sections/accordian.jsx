import React from "react";
import { FaInbox } from "react-icons/fa";

const Accordian = ({heading, subtitle, className =""}) => {
    return(
        <section className={`flex justify-between ${className} w-full pt-4 pl-4 pr-16 `}>
            <div className="flex flex-col">
                <h3 className="text-xl lg:text-2xl text-olive">{heading}</h3>
                <p>{subtitle}</p>
            </div>
            <div className="">
                <FaInbox />
            </div>

        </section>
    )
}

export default Accordian