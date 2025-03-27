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

function Home() {
 
  return (
    <main className="flex flex-col"> 
      <Banner
        email={pages.banner.email.email}
        phone={pages.banner.phone.phone}
      />
      <LogoContainer />
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
          decClassName="h-[2rem]"
        />
        <Button className="bg-darkGreen w-48 relative xl:bottom-15 lg:left-4">About Dr. Walker</Button>
      </div>
      
      <Column2 
        className="vision "
        title={pages.home.vision.title}
        text1={pages.home.vision.text1}
        quote={pages.home.vision.quote}
      
      />
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
      
      <Cta
        title={pages.home.cta.quote}
      />
      <Column1 
        title={pages.home.belief.title}
        text1={pages.home.belief.text1}
        text2={pages.home.belief.text2}
      />
      <Contact 
        title={pages.home.contact.title}
      />
      <Footer />
    </main>
  )
}

export default Home
