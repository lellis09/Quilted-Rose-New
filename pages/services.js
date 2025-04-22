import react from "react"
import Hero from "../components/sections/hero"
import Banner from "../components/sections/banner"
import LogoContainer from "../components/sections/logo-cont"
import { pages } from "/content/content.jsx"
import Cta from "../components/sections/cta"
import Column1 from "../components/sections/column1"
import Column2 from "../components/sections/column2"
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
      {/* <div className="flex justify-center pb-8  ">
        <Button className="bg-blush w-48 relative ">Book Now</Button>
      </div> */}

      <div className="">
            <Cta
                title={pages.home.cta.quote}
            />
      </div>
      <div className="flex flex-col items-center ">
        <Column2 
          title={pages.offer.section2.title}
          text1={pages.offer.section2.text1}
          text2={pages.offer.section2.text2}
          text3={pages.offer.section2.text3}
          imageSrc={"/lisa-walker-1.png"}
          imageClassName="h-[600px]"
          textClassName="lg:pt-4"
          decClassName="h-[2rem]"
          >
      <div className="flex justify-center items-center pb-8  ">
            <Button className="bg-blush w-48 ">Learn More</Button>
       </div>
        </Column2>
      </div>
      {/* <div className="flex justify-center items-center pb-8  ">
            <Button className="bg-blush w-48 relative lg:bottom-60 lg:left-20 xl:left-12">Learn More</Button>
      </div> */}
      <div className="vision">
        <Bullet
             className="xl:px-64 lg:px-24"
              text1={pages.services.bullet.text1}
              // text2={pages.services.bullet.text2}
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
        

        <ColumnAlt
            className="border-b-2 border-olive" 
            title={pages.services.other.title}
            text1={pages.services.bullet.text2}
            text2={pages.home.about.text2}
            text3={pages.home.about.text3}
            imageSrc={"/floral-service.webp"}
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