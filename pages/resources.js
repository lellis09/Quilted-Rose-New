import react from "react"
import Hero from "../components/sections/hero"
import Banner from "../components/sections/banner"
import LogoContainer from "../components/sections/logo-cont"
import { pages } from "/content/content.jsx"
import Cta from "../components/sections/cta"
import Column1 from "../components/sections/column1"
import Bullet from "../components/sections/bullet"
import Column3 from "../components/sections/column3"
import Button from "../components/Button"


const Resources = () => {
    return(
        <main className="flex flex-col relative">
        <div className="absolute inset-0 z-[-1] background">
        </div>
          <Hero 
                title={pages.resources.hero.title} 
                imageSrc={"floral-el.svg"}
            />
             <div className="flex flex-wrap flex-col justify-center py-8 bg-creamy border-b-[2px] border-olive">
              <h2 className="text-5xl text-center pt-6 pb-8 text-darkGreen border-b-[2px] border-olive" >Community Partners</h2>
              <Column3
                  images={[
                    "/12.svg", "/13.svg", "/14.svg", "/15.svg",
                    "/16.svg", "/17.svg", "/18.svg"
                  ]}
                  links={[
                    "https://www.huntstreetstation.com/", "https://www.sourcebooksellers.com/", "https://www.equitableaccountingsolutions.com/", // leave empty for no link
                    "https://www.thetrapstudio.com/", "https://exaltedmoonwellness.com/", "https://www.elmsfamilyandcommunityservices.org/", "https://www.goodvibzyoga.com/"
                  ]}
                />
            </div>
            {/* <Column1 
                className="reads-title"
                title={pages.resources.reads.title}
                text1={pages.resources.hero.text1}
                text2={pages.resources.hero.text2}
          /> */}
          <h2 className="text-5xl text-center pb-2 pt-10 text-darkGreen">Recommended Reads</h2>
            <Bullet
                className=""
                pointsClassName= "reads-el"
                textClassName="hidden"
                points={         
                    {
                    point1: pages.resources.books.point1,
                    point2: pages.resources.books.point2,
                    point3: pages.resources.books.point3,
                    point4: pages.resources.books.point4,
                    point5: pages.resources.books.point5,
                    point6: pages.resources.books.point6,
                    point7: pages.resources.books.point7,
                    point8: pages.resources.books.point8,
                    point9: pages.resources.books.point9,
                    point10: pages.resources.books.point10,
                    point11: pages.resources.books.point11,
                }}
            />
            
            {/* <Column1 
                className="partner-title border-t-[2px] border-olive"
                title={pages.resources.partners.title}
                text1={pages.resources.hero.text1}
                text2={pages.resources.hero.text2}
            /> */}
           
            <div className=" flex flex-col justify-center items-center border-olive border-t-[2px] border-b-[2px] bg-sage w-full pt-8 md:pt-20 px-6">
            <Column1 
              className="border-2 border-creamy text-creamy w-full xl:w-[75%] xl:h-[75%] rounded-md bg-creamy/10 "
              title={pages.offer.section1.title}
              text1={pages.offer.section1.text1}
              text2={pages.offer.section1.text2}
            />
          <div className="flex justify-center pb-8 relative lg:bottom-5 md:bottom-3 -bottom-4">
            <Button className="bg-blush w-48 relative " href="/QR-offer">Learn More</Button>
          </div>
          </div>
          <h2 className="text-5xl text-center pb-2 pt-10 text-darkGreen">Other Resources</h2>
            <Bullet
                className="border-b-[2px] border-olive justify-center lg:pl-96"
                pointsClassName= "reads-el"
                textClassName="hidden"
                points={         
                    {
                    point1: pages.resources.other.point1,
                    point2: pages.resources.other.point2,
                    }
                  }
            />    
        </main>
    )
}

export default Resources