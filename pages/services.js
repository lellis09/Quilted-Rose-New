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
import Points from "../components/sections/points";

const Services = () => {
    return(
        <main className="flex flex-col">

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
              points={{
                 point1:pages.services.bullet.point1, 
                 point2:pages.services.bullet.point2,
                 point3:pages.services.bullet.point3,  
                 point4:pages.services.bullet.point4,  
                 point5:pages.services.bullet.point5,  
                 point6:pages.services.bullet.point6,  
                 point7:pages.services.bullet.point7,  
                 point8:pages.services.bullet.point8,  
                
              }}
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
            faqs={[
                { heading: pages.services.service1.heading, subtitle: pages.services.service1.subtitle },
                { heading: pages.services.service2.heading, subtitle: pages.services.service2.subtitle },
                { heading: pages.services.service3.heading, subtitle: pages.services.service3.subtitle },
                { heading: pages.services.service4.heading }
            ]}
        />

        </main>
    )
}

export default Services