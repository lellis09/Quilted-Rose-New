import react from "react"
import Hero from "../components/sections/hero"
import Banner from "../components/sections/banner"
import LogoContainer from "../components/sections/logo-cont"
import { pages } from "/content/content.js"
import Cta from "../components/sections/cta"
import Column1 from "../components/sections/column1"
import Button from "../components/Button"
import Bullet from "../components/sections/bullet"
import ColumnAlt from "../components/sections/columnAlt"

const Services = () => {
    return(
        <main className="flex flex-col">
        <Banner
            email={pages.banner.email.email} 
            phone={pages.banner.phone.phone}
      />
      <LogoContainer />
      <Hero 
            title={pages.services.hero.title} 
            imageSrc={"floral-el.svg"}
        />
        <Column1 
            title={pages.services.about.title}
            text1={pages.services.about.text1}
            text2={pages.services.about.text2}
      />
      <div className="flex justify-center pb-8  ">
        <Button className="bg-blush w-48 relative ">Book Now</Button>
      </div>
      <div className="vision">
        <Bullet
              text1={pages.services.bullet.text1}
              text2={pages.services.bullet.text2}
          />
      </div>
        
        <div className="">
        <Cta
            title={pages.home.cta.quote}
        />
        </div>
        <ColumnAlt 
            title={pages.services.other.title}
            text1={pages.services.other.text1}
            text2={pages.home.about.text2}
            text3={pages.home.about.text3}
            imageSrc={"/lisa-walker-1.png"}
        />

        </main>
    )
}

export default Services