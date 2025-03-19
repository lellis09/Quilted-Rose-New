import react from "react";
import Image from "next/image";
import { pages } from "/content/content.js"

const Contact = ({title}) => {
    return(
        <main className="flex flex-col md:flex-row bg-olive w-full md:h-[500px] h-full">
            <div className="relative w-full md:w-[40%] h-80 md:h-full  bg-darkGreen border-2 border-olive">
                <Image 
                    src={"/florals-1.jpg"}
                    alt="picture"
                    layout="fill"
                    objectFit="cover"
                    priority
                    quality={75}
                    // placeholder="blur"
                    className="absolute w-full h-full opacity-50 top-0 left-0"
                
                />
            </div>
            <section className=" flex flex-col bg-olive items-center px-10 gap-y-8 w-full h-[500px] md:w-[60%] justify-center">
                <h2 className="text-creamy text-4xl">{title}</h2>
                <div className="bg-creamy w-full h-12 rounded-md"></div>
                <div className="bg-creamy w-full h-12 rounded-md"></div>
                <div className="bg-creamy w-full h-40 rounded-md"></div>
            </section>
        </main>
    )
}

export default Contact