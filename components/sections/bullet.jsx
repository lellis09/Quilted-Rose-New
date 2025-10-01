import React from "react";
import Points from "./points";
import { pages } from "../../content/content";

const Bullet = ({ text1, text2, points = {}, className = "", pointsClassName = "", textClassName = "" }) => {
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
      <p className="text-creamy text-center text-lg py-8 mt-6">{text1}</p>

      <div className="flex flex-col lg:flex-row gap-x-24 justify-center items-start w-full px-6">
        {pointGroups.map((group, index) => (
          <div key={index} className="flex flex-col w-full">
            <Points items={group} className={pointsClassName} />
          </div>
        ))}
      </div>

      <p className={` ${textClassName} text-creamy text-center text-lg py-8 text-darkGreen`}>{text2}</p>
    </main>
  );
};

export default Bullet;