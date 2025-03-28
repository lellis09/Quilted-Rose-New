import react from "react";
import Image from "next/image";
import Accordian from "./accordian";
import { pages } from "../../content/content";

const ColumnAlt = ({ className="", title, text1, imageSrc, }) => {
    return(
        <main className={`flex flex-col items-center md:flex-row ${className} lg:pr-10 h-full lg:h-[30rem] lg:mb-12 lg:mt-8 w-full`}>
            <div className="w-full md:w-3/4 h-[600px] lg:h-full relative rounded-xl  ">
              <div className={`w-full h-full ${className} `}>
                    <Image src={imageSrc} alt="title" layout="fill" objectFit= "cover" className=""  />         
                </div>
                             
            </div>
            <div className="pt-6 md:pt-0 w-full flex flex-col items-start justify-start h-full md:pl-6 lg:pl-10 lg:pr-10 px-10 ">
                <section className="w-full">
                    <h1 className="text-4xl text-darkGreen py-2 pl-4">{title}</h1>
                    <p className="lg:pr-10 text-left text-xl pt-4 pl-4">{text1}</p>

                </section>
                <div className="flex flex-col justify-center gap-y-4 items-start w-full pt-8">
                    <Accordian 
                        className="ser-Border"
                        heading={pages.services.service1.heading}
                    />
                    <Accordian 
                        className="ser-Border"
                        heading={pages.services.service2.heading}
                    />
                    <Accordian 
                        className="ser-Border"
                        heading={pages.services.service3.heading}
                    />
                </div>
            </div>
        </main>
    )
}

export default ColumnAlt