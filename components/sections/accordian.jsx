import React from "react";
import { FaInbox } from "react-icons/fa";

const Accordian = ({heading, subtitle}) => {
    return(
        <section className="flex gap-x-20 ">
            <div className="flex flex-col">
                <h3 className="text-2xl text-olive">{heading}</h3>
                <p>{subtitle}</p>
            </div>
            <div>
                <FaInbox />
            </div>

        </section>
    )
}

export default Accordian