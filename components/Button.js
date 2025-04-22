"use client"
import Link from "next/link";

const Button = ({ className = "", children, href }) => {
  const baseClass = `inline-block px-4 py-2 text-creamy rounded transition-all duration-300 hover:scale-105 hover:shadow-lg ${className}`;

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <a className={baseClass}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button className={baseClass}>
      {children}
    </button>
  );
};

export default Button;









// import React from "react"


// const Button = ({children, onClick, className = ""}) => {
//     return (
//         <button
//             onClick={onClick}
//             className={`px-4 py-2 ${className} text-creamy rounded-xl `}
//         >
//             {children}
//         </button>
//     )
// }

// export default Button
