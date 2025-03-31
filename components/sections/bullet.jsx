import React from "react";
import { FaInbox } from "react-icons/fa";
import Points from "./points";
import { pages } from "../../content/content";


const Bullet = ({text1, text2, points =[], className = ""}) => {
    return(
        <main className={`${className}`}>
            <p className="text-creamy text-center text-xl py-8 mt-6">{text1}</p>
            <div className="flex flex-col lg:flex-row gap-x-32 justify-center items-center w-full">
                <div className="flex ">
                        <Points 
                            point1={points.point1} 
                            point2={points.point2} 
                            point3={points.point3} 
                        />
                    </div>

                    {/* Column 2: Points 4-6 */}
                    <div className="flex">
                        <Points 
                            point1={points.point4} 
                            point2={points.point5} 
                            point3={points.point6} 
                        />
                    </div>
                    <div className="flex">
                        <Points 
                            point1={points.point7} 
                            point2={points.point8} 
                        />
                    </div>
            </div>
            <p className="text-creamy text-center text-xl py-8">{text2}</p>
        </main>
    )
}

export default Bullet