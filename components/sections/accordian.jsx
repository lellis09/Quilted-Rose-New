import React, { useState } from "react";
import { FaInbox } from "react-icons/fa";

const Accordian = ({ heading, subtitle, className = "", showIcon = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className={`w-full pt-4 pl-4 pr-6 ${className}`}>
      <div className="flex justify-between items-start cursor-pointer" onClick={handleToggle}>
        <h3 className="text-xl lg:text-2xl text-olive">{heading}</h3>
        {showIcon ? (
          <FaInbox className="text-darkGreen mt-1" />
        ) : (
          <div className="w-5" /> // reserve the space where icon would be
        )}
      </div>

      {isOpen && (
        <p className="text-darkGreen pt-2 pr-4 text-left text-sm ">{subtitle}</p>
      )}
    </section>
  );
};

export default Accordian;