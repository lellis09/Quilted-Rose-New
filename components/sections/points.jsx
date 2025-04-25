import React from "react";
import { FaCircle } from "react-icons/fa";

const Points = ({ items = [], className = "" }) => {
  return (
    <main className={className}>
      <section className="flex flex-col gap-y-4 w-full">
        {items.map((text, index) => (
          <div key={index} className="flex gap-x-4 w-full items-center justify-center">
            <div className="min-w-[1.5rem] mt-1 text-blush">
              <FaCircle className="w-3 h-3 text-sm" />
            </div>
            <ul className="w-full">
              <li className="text-[18px] italic">{text}</li>
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Points;