import Hero from "../components/sections/hero"
import Banner from "../components/sections/banner"
import LogoContainer from "../components/sections/logo-cont"
import { pages } from "/content/content.jsx"
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
    <main className="flex flex-col relative"> 
      <div className="absolute inset-0 z-[-1] background">
      </div>
      <div className="relative z-10 ">
          {/* your page content like <Hero />, <Column2 />, etc. */}
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
              text4={pages.home.about.text4}
              imageSrc={"/lisa-walker-1.png"}
              imageClassName="h-[600px]"
              textClassName="lg:pt-4 text-darkGreen"
              text4ClassName="lg:pt-4 text-darkGreen font-bold "
              decClassName="h-[20rem] relative top-2 rotate-x-30"
              className=""
              >
              <Button className="bg-darkGreen w-72" href="/about">More About Dr. Walker</Button>
            </Column2>
              {/* <Button className="bg-darkGreen w-48 relative lg:bottom-0 2xl:bottom-15 lg:left-14 xl:left-13 2xl:left-8 mb-4 lg:mb-0">About Dr. Walker</Button> */}
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
              <Button className="bg-blush w-48 relative"href="/services">Learn More</Button>
            </div>
            <div className=" flex flex-col justify-center items-center bg-sage w-full pt-8 md:pt-20 px-6">
              <Column1 
                className="border-2 border-creamy text-creamy w-full xl:w-[75%] xl:h-[75%] rounded-md bg-creamy/10 "
                title={pages.offer.section1.title}
                text1={pages.offer.section1.text1}
                text2={pages.offer.section1.text2}
              />
            <div className="flex justify-center pb-8 relative lg:bottom-5 md:bottom-3 -bottom-4">
              <Button className="bg-blush w-48 relative" href="/QR-offer">Learn More</Button>
            </div>
            </div>
            <Cta
              title={pages.home.cta.quote}
            />
            <div className="bg-pattern  bg-repeat">
              {/* <Image
                  src=""
                  width={100}
                  height={100}
                  className="absolute w-full  z-[-10] "
                /> */}
                <Column1 
                  title={pages.home.belief.title}
                  text1={pages.home.belief.text1}
                  text2={pages.home.belief.text2}
                  subTClassName="hidden"
                />
            </div>
            {/* <div style={{
        backgroundColor: '#fffaf5',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill='%230a2522' fill-opacity='0.09'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }}>
        

      </div> */}
      {/* <div className="bg-[data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill='%230a2522' fill-opacity='0.09'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E]">
        <p>Looks good now!</p>
      </div> */}
            <Contact 
              title={pages.home.contact.title}
            />
        </div>
      {/* Content layer */}

      
    </main>
  )
}

export default Home
