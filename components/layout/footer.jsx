import React from "react";
import Image from "next/image";
import FooterNav from "../layout/nav-footer";

const Footer = () => {
    return(
        <section className="logo-container w-full h-full sm:h-auto  bg-creamy flex flex-col justify-center items-center pt-10 md:pt-0">
        <div className=" w-96 h-64 sm:h-64 lg:flex flex-col justify-center relative hidden ">
            <Image src={"/qr-logo.svg"} layout="fill" objectFit="contain" className="lg:bottom-0 w-full h-full"/>
        </div>
        <div className="relative ">
            <FooterNav />
        </div>

    </section>
    )
}

export default Footer