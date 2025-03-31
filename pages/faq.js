import react from "react"
import Hero from "../components/sections/hero"
import Banner from "../components/sections/banner"
import LogoContainer from "../components/sections/logo-cont"
import { pages } from "/content/content.js"
import Cta from "../components/sections/cta"
import Column1 from "../components/sections/column1"
import ColumnAlt from "../components/sections/columnAlt"
import Button from "../components/Button"

const Faq = () => {
    return(
        <main className="flex flex-col">
      <Hero 
            title={pages.faq.hero.title} 
            imageSrc={"floral-el.svg"}
        />
        <Column1 
            className="partner-title"
            title={pages.faq.header.title}
            text1={pages.resources.hero.text1}
            text2={pages.resources.hero.text2}
      />
      <ColumnAlt 
            
            title={pages.resources.hero.text1}
            text1={pages.faq.header.text1}
            text2={pages.home.about.text2}
            text3={pages.home.about.text3}
            imageSrc={"/lisa-walker-1.png"}
            faqs={[
                { heading: pages.faq.faq1.heading, subtitle: pages.faq.faq1.subtitle },
                { heading: pages.faq.faq2.heading, subtitle: pages.faq.faq2.subtitle },
                { heading: pages.faq.faq3.heading, subtitle: pages.faq.faq3.subtitle },
                { heading: pages.faq.faq4.heading, subtitle: pages.faq.faq4.subtitle },
                
            ]
        }
        />
        <div className="pt-0">
            <Cta
                title={pages.home.cta.quote}
            />
        </div>
        </main>
    )
}

export default Faq