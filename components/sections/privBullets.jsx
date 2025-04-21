import React from "react";
import Points from "./points";

const PrivBullets = ({ text1, text2, points = {}, className = "", pointsClassName = "", textClassName = "" }) => {
  const {
    point1, point2, point3, point4,
    point5, point6, point7, point8, point9
  } = points;

  const pointGroups = [
    [point1, point2, point3, point4].filter(Boolean),
    [point5, point6, point7, point8].filter(Boolean),
    [point9].filter(Boolean)
  ].filter(group => group.length > 0);

  return (
    <main className={`${className}`}>
      <p className="text-creamy text-center text-[18px] py-4 ">{text1}</p>

      <div className="flex flex-col gap-x-24 justify-center items-center w-full px-8">
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

      <p className={`${textClassName} text-creamy text-center text-[18px] py-4`}>{text2}</p>
    </main>
  );
};

export default PrivBullets;