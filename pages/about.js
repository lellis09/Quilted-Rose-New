import React from "react"
import Hero from "../components/sections/hero"
import Banner from "../components/sections/banner"
import LogoContainer from "../components/sections/logo-cont"
import { pages } from "/content/content.jsx"
import Column2 from "../components/sections/column2"
import Cards2 from "../components/sections/cards2"
import Cta from "../components/sections/cta"
import Column1 from "../components/sections/column1"
import Column4 from "../components/sections/column4"
import Contact from "../components/sections/contact"
import Footer from "../components/layout/footer"
import Button from "../components/Button"
import Nav from "../components/layout/nav";


const About = () => {
    return(
        <main className="flex flex-col relative"> 
          <div className="absolute inset-0 z-[-1] background">
          </div>
            <Hero 
              title={pages.about.hero.title} 
              imageSrc={"floral-el.svg"}
              />
            <div className="flex flex-col items-center ">
              <Column2 
                title={pages.about.about.title}
                text1={pages.about.about.text1}
                text2={pages.about.about.text2}
                text3={pages.about.about.text3}
                imageSrc={"/walker-test.webp"}
                imageClassName="h-[600px]"
                textClassName="lg:pt-4"
                decClassName="h-[2rem]"
                >
                  <Button className="bg-darkGreen w-56" href="/contactUs" >Book With Dr. Walker</Button>
                </Column2>

              
            </div>
            
            <Column4 
            className="vision"
              title={pages.about.values.title}
              subtitle={pages.about.values.subtitle}
              text1={pages.about.values.text1}
              text2={pages.about.values.text2}
              text3={pages.about.values.text3}
              text4={pages.about.values.text4}
              text5={pages.about.values.text5}
              text6={pages.about.values.text6}
              text7={pages.about.values.text7}
              text8={pages.about.values.text8}
              pClassName="text-[15px] text-left"
              specialClassName="text-darkGreen special text-xl text-left"
            />

            <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-8 relative md:items-center lg:justify-center items-stretch pb-4 z-10 bottom-6 lg:bottom-12 px-10 ">
              <Cards2
                imageSrc={"/6.svg"}
                title={pages.home.card1.title}
                text={pages.home.card1.text}
              />
              <Cards2
                imageSrc={"/6.svg"}
                title={pages.home.card2.title}
                text={pages.home.card2.text}
              />
              <Cards2
                imageSrc={"/6.svg"}
                title={pages.home.card3.title}
                text={pages.home.card3.text}
              />
      
            </div>
            <div className="flex justify-center pb-8  ">
              <Button className="bg-blush w-48 relative ">Learn More</Button>
            </div>
            
            <Cta
              title={pages.about.cta.quote}
            />

            <Contact 
              title={pages.home.contact.title}
            />
      </main>
    )
}

export default About