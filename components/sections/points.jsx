import React from "react";
import { FaInbox } from "react-icons/fa";

const Points = ({point1, point2, point3}) => {
    return(
        <main className="">
            <section className="flex flex-col gap-y-4">
            {point1 && (
                    <div className="flex gap-x-4">
                        <FaInbox />
                        <ul>
                            <li className="text-xl">{point1}</li>
                        </ul>
                    </div>
                )}
                {point2 && (
                    <div className="flex gap-x-4">
                        <FaInbox />
                        <ul>
                            <li className="text-xl">{point2}</li>
                        </ul>
                    </div>
                )}
                {point3 && (
                    <div className="flex gap-x-4">
                        <FaInbox />
                        <ul>
                            <li className="text-xl">{point3}</li>
                        </ul>
                    </div>
                )}
            </section>
        </main>
    )
}

export default Points