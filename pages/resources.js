import react from "react"
import Hero from "../components/sections/hero"
import Banner from "../components/sections/banner"
import LogoContainer from "../components/sections/logo-cont"
import { pages } from "/content/content.js"
import Cta from "../components/sections/cta"
import Column1 from "../components/sections/column1"
import Bullet from "../components/sections/bullet"


const Resources = () => {
    return(
        <main className="flex flex-col">
      <Banner
            email={pages.banner.email.email} 
            phone={pages.banner.phone.phone}
      />
      <LogoContainer />
      <Hero 
            title={pages.resources.hero.title} 
            imageSrc={"floral-el.svg"}
        />
        <Column1 
            className="reads-title"
            title={pages.resources.reads.title}
            text1={pages.resources.hero.text1}
            text2={pages.resources.hero.text2}
      />
        <Bullet
                className="reads"
                points={{
                    point1: pages.resources.books.point1,
                    point2: pages.resources.books.point2,
                    point3: pages.resources.books.point3,
                    point4: pages.resources.books.point4,
                    point5: pages.resources.books.point5,
                    point6: pages.resources.books.point6
                }}
        />


        </main>
    )
}

export default Resources