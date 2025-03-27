import react from "react";
import Image from "next/image";
import Accordian from "./accordian";
import { pages } from "../../content/content";

const ColumnAlt = ({ className="", title, text1, imageSrc, }) => {
    return(
        <main className={`flex flex-col items-center md:flex-row ${className} px-10 pt-10 h-[30rem] lg:mb-12 lg:mt-8 w-full`}>
            <div className="w-full md:w-3/4 h-full md:h-full relative rounded-xl  ">
              <div className={`w-full h-full ${className} `}>
                    <Image src={imageSrc} alt="title" layout="fill" objectFit= "cover" className=""  />         
                </div>
                             
            </div>
            <div className="pt-6 md:pt-0 w-full  flex flex-col items-center justify-start md:pl-20 ">
                <section className="w-full">
                    <h1 className="text-4xl text-darkGreen py-2">{title}</h1>
                    <p>{text1}</p>

                </section>
                <div className="flex flex-col justify-center gap-y-6 items-start border-2 w-full ">
                    <Accordian 
                        heading={pages.services.service1.heading}
                    />
                    <Accordian 
                        heading={pages.services.service2.heading}
                    />
                    <Accordian 
                        heading={pages.services.service3.heading}
                    />
                </div>
            </div>
        </main>
    )
}

export default ColumnAlt