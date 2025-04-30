import React from "react";

const Column4 =({
    title,
    subtitle,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    className = "",
    subTClassName = "",
    specialClassName = "",
    pClassName = "",
    children,
  }) => {
    const renderText = (text, className) =>
      text ? (
        <p
          className={`text-center w-[85%] xl:w-1/2 text-lg pb-6 ${className}`}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      ) : null;
  
    return (
      <main className={`flex flex-col justify-end items-center pt-6 pb-16 ${className}`}>
        <h2 className="text-darkGreen text-5xl text-center py-10 header">{title}</h2>
        <h4 className={`text-darkGreen text-3xl text-center pb-10 header ${subTClassName}`}>
          {subtitle}
        </h4>
        {renderText(text1, specialClassName)}
        {renderText(text2, pClassName)}
        {renderText(text3, specialClassName)}
        {renderText(text4, pClassName)}
        {renderText(text5, pClassName)}
        {renderText(text6, pClassName)}
        {renderText(text7, pClassName)}
        {renderText(text8, specialClassName)}
        {children}
      </main>
    );
  };

  export default Column4









// import react from "react";

// const Column4 = ({title, subtitle, text1, text2, text3, text4, text5, text6, text7, text8, className = "", subTClassName ="", specialClassName ="", pClassName= "", children}) => {
//     return(
//         <main className={`flex flex-col justify-end items-center pt-6 pb-16 ${className}`}>
//             <h2 className="text-darkGreen text-5xl text-center py-10 header">{title}</h2>
//             <h4 className={`text-darkGreen text-3xl text-center py-10 header ${subTClassName}`}>{subtitle}</h4>
//             <p className={`text-center w-[85%] xl:w-1/2 text-lg pb-6 ${specialClassName}`}>{text1}</p>
//             <p className={`text-center w-[85%] xl:w-1/2 text-lg pb-6 ${pClassName}`}>{text2}</p>
//             <p className={`text-center w-[85%] xl:w-1/2 text-lg pb-6 ${specialClassName}`}>{text3}</p>
//             <p className={`text-center w-[85%] xl:w-1/2 text-lg pb-6 ${pClassName}`}>{text4}</p>
//             <p className={`text-center w-[85%] xl:w-1/2 text-lg pb-6 ${pClassName}`}>{text5}</p>
//             <p className={`text-center w-[85%] xl:w-1/2 text-lg pb-6 ${pClassName}`}>{text6}</p>
//             <p className={`text-center w-[85%] xl:w-1/2 text-lg pb-6 ${pClassName}`}>{text7}</p>
//             <p className={`text-center w-[85%] xl:w-1/2 text-lg pb-6 ${pClassName}`}>{text8}</p>
//             {children} {/* This allows you to pass in other components, like Bullet */}
//         </main>
//     )
// }

// export default Column4