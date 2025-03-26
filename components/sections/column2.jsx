import react from "react";
import Image from "next/image";

const Column2 = ({ className="", title, text, text2, imageSrc, quote}) => {
    return(
        <main className={`flex flex-col items-center lg:flex-row ${className} px-10 pt-10 lg:h-[34rem] lg:mb-12 lg:mt-8`}>
            <div className="w-full lg:w-[40%]  h-96 sm:h-[600px] relative rounded-xl pb-6 sm:pb-6 image ">
             {/* If there's an image, show it; otherwise, show a quote */}
                {imageSrc ? (
                    <div className={`w-full h-[600px] md:w-1/2  ${className} `}>
                        <Image src={imageSrc} alt="title" layout="fill" objectFit= "cover" className="rounded-xl "  />         
                        
                    </div>
                ) : (
                    <div className="sm:pt-6 lg:pt-12 w-full lg:h-28 flex items-center justify-center relative lg:top-40">
                        <blockquote className="quote text-2xl md:text-3xl italic lg:text-right ">{quote}</blockquote>
                    </div>
                )
                }
                
                
            </div>
            <div className="w-[2px] h-[8rem] bg-olive relative left-10 bottom-16 rotate-y-<90>"></div>
            <div className="pt-0 lg:pt-2 w-full h-full lg:w-[60%] flex flex-col items-center justify-start md:pl-20 pb-6">
                <section className="w-full ">
                    <h1 className="header text-4xl text-darkGreen py-2">{title}</h1>
                    <p className="text-xl pt-4 w-[95%]">{text}</p>
                    <p className="text-xl pt-4 ">{text2}</p>
                </section>
            </div>
        </main>
    )
}

export default Column2