import React from "react";
import { FaInbox } from "react-icons/fa";
import Points from "./points";
import { pages } from "../../content/content";


const Bullet = ({text1, text2, className = ""}) => {
    return(
        <main className={`${className}`}>
            <p className="text-creamy text-center text-xl py-8 mt-6">{text1}</p>
            <div className="flex flex-col lg:flex-row gap-x-50 justify-center items-center">
                <Points 
                    point1={pages.services.bullet.point1}
                    point2={pages.services.bullet.point2}
                    point3={pages.services.bullet.point3}
                />
                <Points 
                    point1={pages.services.bullet.point1}
                    point2={pages.services.bullet.point2}
                    point3={pages.services.bullet.point3}
                />
            </div>
            <p className="text-creamy text-center text-xl py-8">{text2}</p>
        </main>
    )
}

export default Bullet