import React from "react";
import { FaCircle } from "react-icons/fa";

const Points = ({ point1, point2, point3, point4, className = "" }) => {
  const renderPoint = (text) => (
    <div className="flex gap-x-4 w-full items-center justify-center">
      <div className="min-w-[1.5rem] mt-1 text-blush ">
        <FaCircle className="w-3 h-3 text-sm" />
      </div>
      <ul className="w-full">
        <li className="text-[18px] italic">{text}</li>
      </ul>
    </div>
  );

  return (
    <main className={className}>
      <section className="flex flex-col gap-y-4 w-full">
        {point1 && renderPoint(point1)}
        {point2 && renderPoint(point2)}
        {point3 && renderPoint(point3)}
        {point4 && renderPoint(point4)}
      </section>
    </main>
  );
};

export default Points;