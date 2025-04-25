import React from "react";
import Points from "./points";

const PrivBullets = ({ text1, text2, points = {}, className = "", pointsClassName = "", textClassName = "" }) => {
  // Convert object values to an array
  const pointArray = Object.values(points);

  // Group the points into chunks of 4 or 5 per column
  const chunkSize = 4;
  const pointGroups = [];

  for (let i = 0; i < pointArray.length; i += chunkSize) {
    pointGroups.push(pointArray.slice(i, i + chunkSize));
  }

  return (
    <main className={`${className}`}>
      <p className="text-creamy text-center text-lg pt-8 hidden mt-2">{text1}</p>
      <div className="flex flex-col gap-x-8 justify-center items-start w-full px-8 ">
        {pointGroups.map((group, index) => (
          <div key={index} className="flex flex-col w-full ">
            <Points items={group} className={pointsClassName} />
          </div>
        ))}
      </div>

      <p className={` ${textClassName}text-creamy text-center text-lg py-8 text-darkGreen `}>{text2}</p>
    </main>
  );
};

export default PrivBullets;