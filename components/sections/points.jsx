import React from "react";
import { FaInbox } from "react-icons/fa";

const Points = ({point1, point2, point3, point4, className = ''}) => {
    return(
        <main className={className}>
            <section className="flex flex-col gap-y-4 w-full">
            {point1 && (
                    <div className="flex gap-x-4 w-full">
                        <FaInbox />
                        <ul>
                            <li className="text-[18px] italic">{point1}</li>
                        </ul>
                    </div>
                )}
                {point2 && (
                    <div className="flex gap-x-4 w-full">
                        <FaInbox />
                        <ul>
                            <li className="text-[18px] italic w-full">{point2}</li>
                        </ul>
                    </div>
                )}
                {point3 && (
                    <div className="flex gap-x-4 w-full">
                        <FaInbox />
                        <ul>
                            <li className="text-[18px] italic">{point3}</li>
                        </ul>
                    </div>
                )}
                {point4 && (
                    <div className="flex gap-x-4 w-full">
                        <FaInbox />
                        <ul>
                            <li className="text-[18px] italic">{point4}</li>
                        </ul>
                    </div>
                )}
            </section>
        </main>
    )
}

export default Points