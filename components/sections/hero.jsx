import react from "react";
import Image from "next/image";
import { pages } from "/content/content.js"

const Hero = ({ title, imageSrc}) => {
    return(
        <section className="hero w-full h-72 md:h-[25rem] bg-darkGreen flex justify-center items-center relative overflow-hidden">
               <Image 
                src={'/florals-1.jpg'}
                // width={500}
                // height={500}
                layout="fill"
                objectFit="cover"
                priority
                quality={75}
                // placeholder="blur"
                className="absolute top-0 left-0 w-full h-full opacity-50"
               
               />
               <div className=" border-creamy w-3/4 h-3/4 relative z-10 flex flex-col justify-center items-center rounded-md">
                    <div className="">
                        {imageSrc && (
                        <Image src={imageSrc} width={100} height={100} />
                    )}
                    </div>
               
                    <h1 className="text-creamy z-10 text-2xl sm:text-4xl">{title}</h1>
               </div>
        </section>
    )
}

export default Hero