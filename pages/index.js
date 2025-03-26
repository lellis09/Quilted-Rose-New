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

function Home() {
 
  return (
    <main className="flex flex-col"> 
      <Banner
        email={pages.banner.email.title}
        phone={pages.banner.phone.title}
      />
      <LogoContainer />
      <Hero 
        title={pages.home.hero.title} 
        imageSrc={"floral-el.svg"}
        />
      <Column2 
        title={pages.home.about.title}
        text={pages.home.about.text}
        text2={pages.home.about.text2}
        imageSrc={"/lisa-walker-1.png"}
      />
      <Column2 
        className="vision "
        title={pages.home.vision.title}
        text={pages.home.vision.text}
        quote={pages.home.vision.quote}
      
      />
      <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-8 relative md:items-center lg:justify-center items-stretch pb-20 z-10 bottom-6 lg:bottom-24 px-10 ">
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
      <Cta
        title={pages.home.cta.quote}
      />
      <Column1 
        title={pages.home.belief.title}
        text={pages.home.belief.text}
        textB={pages.home.belief.textB}
      />
      <Contact 
        title={pages.home.contact.title}
      />
      <Footer />
    </main>
  )
}

export default Home
