import react from "react";
import Image from "next/image";
import Accordian from "./accordian";
import { pages } from "../../content/content";
import Button from "/components/Button.js"

const ColumnAlt = ({ className="", title, text1, imageSrc,  faqs = [] }) => {
    return(
        <main className={`flex flex-col items-center md:flex-row ${className} lg:pr-10 h-full lg:h-[30rem] lg:mb-12 w-full`}>
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
                {/* FAQ Accordions */}
                <div className="flex flex-col justify-center gap-y-4 items-start w-full pt-8">
                    {faqs.map((faq, index) => (
                        <Accordian key={index} className="ser-Border" heading={faq.heading} subtitle={faq.subtitle} />
                    ))}
                    <div className="flex justify-center pt-8 lg:ml-40 xl:ml-72">
                        <Button className="bg-blush w-48 relative ">Book Now</Button>
                     </div>
                </div>
            </div>
        </main>
    )
}

export default ColumnAlt