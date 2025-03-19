import react from "react";
import Image from "next/image";

const Column2 = ({ className="", title, text, imageSrc, quote}) => {
    return(
        <main className={`flex flex-col items-center md:flex-row ${className} px-10 pt-10 h-[30rem] lg:mb-12 lg:mt-8 w-full`}>
            <div className="w-full md:w-1/2 h-full md:h-[400px] relative rounded-xl  ">
             {/* If there's an image, show it; otherwise, show a quote */}
             {imageSrc ? (
                <div className={`w-full h-full ${className} `}>
                    <Image src={imageSrc} alt="title" layout="fill" objectFit= "cover" className="rounded-xl"  />         
                    
                </div>
             ) : (
                <div className="pt-12 w-full h-28 flex items-center justify-center">
                    <blockquote className="text-xl md:text-2xl italic text-center">{quote}</blockquote>
                </div>
             )
            }
                
            </div>
            <div className="pt-6 md:pt-0 w-full h-full flex flex-col items-center justify-start md:pl-20 border-2">
                <section className="w-full">
                    <h1 className="text-4xl text-darkGreen py-2">{title}</h1>
                    <p>{text}</p>
                </section>
            </div>
        </main>
    )
}

export default Column2