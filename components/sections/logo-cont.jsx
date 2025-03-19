import React from "react";
import Image from "next/image";
import Nav from "../layout/nav";

const LogoContainer = () => {
    return(
        <section className="logo-container w-full h-64 sm:h-auto  bg-creamy flex flex-col justify-center items-center">
            <div className="border-2 border-blush w-96 sm:h-64 flex flex-col justify-center relative">
                <Image src={"/qr-logo.svg"} width={400} height={400} className="bottom-6 lg:bottom-0"/>
            </div>
            <div>
                <Nav />
            </div>

        </section>
    )
}

export default LogoContainer