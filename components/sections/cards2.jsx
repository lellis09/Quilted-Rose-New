import react from "react";
import Link from "next/link";
import Image from "next/image";

const Cards2 = ({ title, text, imageSrc }) => {
    return(
        <main className="">
            <div className="border-2 border-olive w-full md:w-[34rem] lg:w-80 xl:w-96 lg:h-[375px] bg-creamy h-96 flex flex-col justify-center lg:gap-y-6 px-8 rounded-lg py-4">
                <div className=" ">
                        {imageSrc && (
                        <Image src={imageSrc} width={75} height={75} className="opacity-50"/>
                    )}</div>
                <h3 className="text-darkGreen text-2xl font-semibold text-left pt-2 card-title">{title}</h3>
                <p className="text-darkGreen lg:text-sm text-left pt-4 pb-4 card-txt">{text}</p>

            </div>
        </main>
    )
}

export default Cards2