import React from "react";
import Hero from "../components/sections/hero"
import Banner from "../components/sections/banner"
import LogoContainer from "../components/sections/logo-cont"
import { pages } from "/content/content.jsx"
import Button from "../components/Button"
import Bullet from "../components/sections/bullet"
import Contact from "../components/sections/contact"
import Column1 from "../components/sections/column1";

const ContactUs =() => {
    return(
        <main className="flex flex-col items-center relative">
            <div className="absolute inset-0 z-[-1] background">
            </div>
                <Hero 
                    title={pages.contact.hero.title} 
                    imageSrc={"floral-el.svg"}
                />

                 {/* <Column1 
                 text3={pages.services.about.text3}
                  textClassName="font-bold"
                  subTClassName="hidden"
                  className="border-2 justify-end pb-0"
            /> */}

                <Bullet
                    className=" w-full lg:w-1/2  lg:px-24 "
                    text2={pages.contact.section.text1}
                    textClassName="text-sm px-4 font-bold"
                    points={{
                        point1: pages.contact.section.point1,
                        point2: pages.contact.section.point2,
                        point3: pages.contact.section.point3,
                        
                    }}
                />
                <Contact
                    title={pages.home.contact.title}
                />
        </main>
    )
}

export default ContactUs