import react from "react";
import Image from "next/image";

const Cta = ({title}) => {
    return(
        <section className="hero w-full h-64 md:h-[25rem] bg-darkGreen flex justify-center items-center relative overflow-hidden">
                <Image 
                src={'/florals-1.jpg'}
                // width={500}
                // height={500}
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 w-full h-full opacity-50"
                
                />
                <div className="border border-2 border-creamy w-3/4 h-3/4 relative z-10 flex justify-center items-center ">
                    <h1 className="text-creamy z-10 text-xl sm:text-3xl px-10 quote">{title}</h1>
                </div>
        </section>
    )
}

export default Cta