import react from "react";
import Link from "next/link";
import Image from "next/image";

const Cards2 = ({ title, text, imageSrc }) => {
    return(
        <main className="">
            <div className="border-2 border-olive w-full lg:w-80 xl:w-96  bg-creamy h-96 flex flex-col justify-center px-8 rounded-lg py-4">
                <div className=" ">
                        {imageSrc && (
                        <Image src={imageSrc} width={75} height={75} className="opacity-50"/>
                    )}</div>
                <h3 className="text-darkGreen text-xl font-semibold text-left pt-4">{title}</h3>
                <p className="text-darkGreen text-md text-left pt-4">{text}</p>
                <Link href="/#" className="text-sm text-olive underline pt-6"> Learn More
                 
                </Link>
            </div>
        </main>
    )
}

export default Cards2