import react from "react";
import Image from "next/image";
import { pages } from "/content/content.jsx"
import Button from "../Button.js";

const Contact = ({title}) => {
    return(
        <main className="flex flex-col md:flex-row bg-olive w-full md:h-[500px] h-full">
            <div className="relative w-full md:w-[40%] h-80 md:h-full  bg-darkGreen border-2 border-olive">
                <Image 
                    src={"/contact-pic.webp"}
                    alt="picture"
                    layout="fill"
                    objectFit="cover"
                    priority
                    quality={75}
                    // placeholder="blur"
                    className="absolute w-full h-full opacity-50 top-0 left-0"
                
                />
            </div>
            <section className="flex flex-col bg-olive items-center px-10 gap-y-6 w-full h-[500px] md:w-[60%] justify-center">
  <h2 className="text-creamy text-5xl pt-6">{title}</h2>

  <form className="w-full flex flex-col gap-y-4">
    <input
      type="text"
      placeholder="Your Name"
      className="bg-creamy w-full h-12 rounded-md px-4"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="bg-creamy w-full h-12 rounded-md px-4"
    />
    <textarea
      placeholder="Your Message"
      className="bg-creamy w-full h-40 rounded-md px-4 py-2 resize-none"
    />
    <Button type="submit" className="bg-blush w-48 self-center mt-2">
      Get In Touch
    </Button>
  </form>
</section>
            
        </main>
    )
}

export default Contact