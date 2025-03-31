import React from "react";
import Hero from "../components/sections/hero"
import { pages } from "/content/content.js"

const Privacy = () =>{
    return(
        <main>
            <Hero 
            title={pages.privacy.hero.title} 
            imageSrc={"floral-el.svg"}/>
        </main>
    )
}

export default Privacy
