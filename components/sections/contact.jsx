import react from "react";
import Image from "next/image";
import { pages } from "/content/content.js"

const Contact = ({title}) => {
    return(
        <main className="flex flex-col md:flex-row md:h-72 w-full">
            <div className="relative w-full h-72 md:w-[40%] md:h-[20rem] bg-darkGreen">
                <Image 
                    src={"/florals-1.jpg"}
                    alt="picture"
                    layout="fill"
                    objectFit="cover"
                    className="absolute w-full h-full opacity-50 top-0 left-0"
                
                />
            </div>
            <section className=" flex flex-col bg-olive items-center px-10 gap-y-6 w-full md:w-[60%] h-72">
                <h2 className="text-creamy text-2xl">{title}</h2>
                <div className="bg-creamy w-full h-10 rounded-md"></div>
                <div className="bg-creamy w-full h-10 rounded-md"></div>
                <div className="bg-creamy w-full h-20 rounded-md"></div>
            </section>
        </main>
    )
}

export default Contact