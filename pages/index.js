import Hero from "../components/sections/hero"
import Banner from "../components/sections/banner"
import LogoContainer from "../components/sections/logo-cont"
import { pages } from "/content/content.js"
import Column2 from "../components/sections/column2"
import Cards2 from "../components/sections/cards2"
import Cta from "../components/sections/cta"
import Column1 from "../components/sections/column1"
import Contact from "../components/sections/contact"
import Footer from "../components/layout/footer"
import Button from "../components/Button"
import Nav from "../components/layout/nav";
import Image from "next/image"


function Home() {
 
  return (
    <main className="flex flex-col "> 
      
        
      
      <Hero 
        title={pages.home.hero.title} 
        imageSrc={"floral-el.svg"}
        />
      <div className="flex flex-col items-center ">
        <Column2 
          title={pages.home.about.title}
          text1={pages.home.about.text1}
          text2={pages.home.about.text2}
          text3={pages.home.about.text3}
          imageSrc={"/lisa-walker-1.png"}
          imageClassName="h-[600px]"
          textClassName="lg:pt-4"
          decClassName="h-[20rem] relative top-2 rotate-x-30"
        />
        <Button className="bg-darkGreen w-48 relative lg:bottom-0 xl:bottom-15 lg:left-14 2xl:left-8 mb-4 sm:mb-0">About Dr. Walker</Button>
      </div>
      <div className="relative">

        <Column2 
          className="vision1 "
          title={pages.home.vision.title}
          text1={pages.home.vision.text1}
          quote={pages.home.vision.quote}
        
        />
      </div>
      
      <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-8 relative md:items-center lg:justify-center items-stretch pb-4 z-10 bottom-6 lg:bottom-24 px-10 ">
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
      <div className=" flex flex-col justify-center items-center bg-sage w-full pt-8 md:pt-20 px-6">
        <Column1 
          className="border-2 border-creamy text-creamy w-full xl:w-[75%] xl:h-[75%] rounded-md bg-creamy/10 "
          title={pages.offer.section1.title}
          text1={pages.offer.section1.text1}
          text2={pages.offer.section1.text2}
        />
      <div className="flex justify-center pb-8 relative lg:bottom-5 md:bottom-3 -bottom-4">
        <Button className="bg-blush w-48 relative ">Learn More</Button>
      </div>
      </div>
      <Cta
        title={pages.home.cta.quote}
      />
      <div className="">
        {/* <Image
            src="/f-bg-svg.svg"
            width={100}
            height={100}
            className="absolute w-full  z-[-10] opacity-10"
          /> */}
          <Column1 
            title={pages.home.belief.title}
            text1={pages.home.belief.text1}
            text2={pages.home.belief.text2}
          />
      </div>
      
      <Contact 
        title={pages.home.contact.title}
      />
    </main>
  )
}

export default Home
