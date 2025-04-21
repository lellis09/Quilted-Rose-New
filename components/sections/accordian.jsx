import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const Accordian = ({ heading, subtitle, className = "", showIcon = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!heading && !subtitle) return null; // don't render if there's no content

  const handleToggle = () => {
    if (subtitle) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <section className={`w-full pt-4 pl-4 pr-6 ${className}`}>
      <div
        className={`flex justify-between items-start cursor-pointer`}
        onClick={handleToggle}
      >
        <h3 className="text-xl lg:text-2xl text-olive">{heading}</h3>
        {subtitle && showIcon ? (
          <FaPlus className="text-olive mt-1" />
        ) : null}
      </div>

      {isOpen && subtitle && (
        <p className="text-darkGreen pt-2 pr-4 text-left text-sm">{subtitle}</p>
      )}
    </section>
  );
};

export default Accordian;