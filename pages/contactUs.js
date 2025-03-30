import React from "react";
import Hero from "../components/sections/hero"
import Banner from "../components/sections/banner"
import LogoContainer from "../components/sections/logo-cont"
import { pages } from "/content/content.js"
import Button from "../components/Button"
import Bullet from "../components/sections/bullet"
import Contact from "../components/sections/contact"

const ContactUs =() => {
    return(
        <main className="flex flex-col">
      <Banner
        email={pages.banner.email.email}
        phone={pages.banner.phone.phone}
      />
      <LogoContainer />
      <Hero 
        title={pages.contact.hero.title} 
        imageSrc={"floral-el.svg"}
      />

    <Bullet
        className="reads"
        points={{
            point1: pages.contact.section.point1,
            point2: pages.contact.section.point2,
            point3: pages.contact.section.point3,
            
        }}
    />
    <Contact/>
        </main>
    )
}

export default ContactUs