import react from "react";
import Image from "next/image";
import { pages } from "/content/content.js"

const Column3 = ({ images = [], title }) => {
    return(
        <main className="">
            <h2>{title}</h2>
            <div className="grid grid-cols-3 gap-4 w-full">
                {images.map((src, index) => (
                    <div key={index} className="relative w-32 h-32 md:w-40 md:h-40">
                        <Image src={src} alt={`Image ${index + 1}`} layout="intrinsic" width={150} height={150} objectFit="cover" className="rounded-lg" />
                    </div>
                ))}
            </div>
            {/* <section className="w-full h-full">
                <div className={`w-full md:w-1/2 lg:w-1/3 h-20`}>
                        <Image src={imageSrc1} alt="title" layout="fill" objectFit= "cover" className="" />         
                </div>
                <div className={`w-full md:w-1/2 lg:w-1/3 h-20`}>
                        <Image src={imageSrc2} alt="title" layout="fill" objectFit= "cover" className="" />         
                </div>
                <div className={`w-full md:w-1/2 lg:w-1/3 h-20`}>
                        <Image src={imageSrc3} alt="title" layout="fill" objectFit= "cover" className="" />         
                </div>
            </section>
            <section>
            </section> */}
        </main>
    )
}

export default Column3