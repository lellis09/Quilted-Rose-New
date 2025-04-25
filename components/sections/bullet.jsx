import React from "react";
import { FaInbox } from "react-icons/fa";
import Points from "./points";
import { pages } from "../../content/content";


const Bullet = ({ text1, text2, points = {}, className = "", pointsClassName = "", textClassName ="" }) => {
    const {
      point1, point2, point3, point4,
      point5, point6, point7, point8, point9
    } = points;
  
    // Create an array of valid point groups (max 3 points per column)
    const pointGroups = [
      [point1, point2, point3, point4].filter(Boolean),
      [point5, point6, point7, point8].filter(Boolean),
      [point9].filter(Boolean)
    ].filter(group => group.length > 0); // Remove empty groups
  
    return (
      <main className={`${className}`}>
        <p className="text-creamy text-center text-lg py-8 mt-6">{text1}</p>
  
        <div className="flex flex-col lg:flex-row gap-x-24 justify-center items-start w-full px-6">
          {pointGroups.map((group, index) => (
            <div key={index} className="flex flex-col w-full">
              <Points
                point1={group[0]}
                point2={group[1]}
                point3={group[2]}
                point4={group[3]}
                className={pointsClassName}
              />
            </div>
          ))}
        </div>
  
        <p className={` ${textClassName}text-creamy text-center text-lg py-8 text-darkGreen`}>{text2}</p>
      </main>
    );
  };
  

export default Bullet