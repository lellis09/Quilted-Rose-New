import Hero from "../components/sections/hero"
import Banner from "../components/sections/banner"
import LogoContainer from "../components/sections/logo-cont"
import { pages } from "/content/content.js"
import Column2 from "../components/sections/column2"
import Cards2 from "../components/sections/cards2"
import Cta from "../components/sections/cta"
import Column1 from "../components/sections/column1"
import Contact from "../components/sections/contact"

function Home() {
 
  return (
    <main className=""> 
      <Banner />
      <LogoContainer />
      <Hero title={pages.home.hero.title} />
      <Column2 
        title={pages.home.about.title}
        text={pages.home.about.text}
        imageSrc={"/florals-1.jpg"}
      />
      <Column2 
        className="vision"
        title={pages.home.vision.title}
        text={pages.home.vision.text}
        quote={pages.home.vision.quote}
      
      />
      <div className="flex flex-col lg:flex-row gap-x-8 relative lg:justify-center items-center pb-20 z-10 md:bottom-10">
      <Cards2
        title={pages.home.card1.title}
        text={pages.home.card1.text}
      />
      <Cards2
        title={pages.home.card2.title}
        text={pages.home.card2.text}
      />
      <Cards2
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
    </main>
  )
}

export default Home
