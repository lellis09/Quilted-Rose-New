import React from "react";
import Image from "next/image";
import Nav from "../layout/nav";

const LogoContainer = () => {
  return (
    <section className="relative w-full bg-creamy flex flex-col items-center">
      {/* Logo Image */}
      <div className="w-96 h-64 flex justify-center relative">
        <Image src={"/qr-logo.svg"} width={200} height={200} className="object-contain" />
      </div>

      {/* Navigation */}
      <div className="w-full">
        <Nav />
      </div>
    </section>
  );
};

export default LogoContainer;