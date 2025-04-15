import react from "react";
import Image from "next/image";
import Button from "../Button.js"
import DecorativeL from "./decorativeL.jsx";

const Column2 = ({ 
    className="", 
    title, 
    text1, 
    text2, 
    text3,
    imageSrc, 
    quote, 
    imageClassName ="", 
    textClassName ="",
    decClassName = "",
    children, // Add this
}) => {
    return(
        <main className={`flex flex-col items-center lg:flex-row ${className} px-10 pt-10  lg:mb-12 lg:mt-8`}>
            <div className="w-full lg:w-[40%] h-96 sm:h-[600px] relative rounded-xl pb-6 sm:pb-6 image ">
                {imageSrc ? (
                    <div className={`${imageClassName}`}>
                        <Image src={imageSrc} alt="title" layout="fill" objectFit="cover" className="rounded-xl" />
                    </div>
                ) : (
                    <div className="sm:pt-6 lg:pt-12 w-full lg:h-28 flex items-center justify-center relative lg:top-40">
                        <blockquote className="quote text-2xl md:text-3xl italic lg:text-right ">{quote}</blockquote>
                    </div>
                )}
            </div>

            <div className={`pt-0 lg:pt-2 w-full h-full lg:w-[60%] flex flex-col items-center justify-start md:pl-20 pb-6`}>
                <h1 className="header text-4xl text-darkGreen py-2">{title}</h1>
                <section className={`w-full ${textClassName}`}>
                    <p className="text-xl pt-4 w-[95%]">{text1}</p>
                    <p className="text-xl pt-4">{text2}</p>
                    <p className="text-xl pt-4 text-blush">{text3}</p>
                </section>
                {children && (
                    <div className="pt-6">
                        {children}
                    </div>
                )}
            </div>
        </main>
    )
}

export default Column2