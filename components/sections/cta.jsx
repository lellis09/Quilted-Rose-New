import react from "react";
import Image from "next/image";

const Cta = ({title}) => {
    return(
        <section className="hero w-full h-64 md:h-[25rem] bg-darkGreen flex justify-center items-center relative overflow-hidden">
                <video 
                    src="/nature-vid.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
                    >
                        
                    </video> 

                <div className=" border-2 border-creamy w-3/4 h-3/4 relative z-10 flex justify-center items-center rounded-md bg-creamy/10">
                    <h4 className="text-creamy z-10 text-lg sm:text-2xl md:text-3xl px-10 quote-cta italic">{title}</h4>
                </div>
        </section>
    )
}

export default Cta