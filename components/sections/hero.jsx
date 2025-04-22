import React from "react";
import Image from "next/image";
import { pages } from "/content/content.jsx";

const Hero = ({ title, imageSrc }) => {
  return (
    <section className="hero w-full h-72 md:h-[25rem] bg-darkGreen flex justify-center items-center relative overflow-hidden">
      {/* Hero Background Image with Blur Placeholder */}
      <Image
        src={"/florals-new_optimized.webp"}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        priority
        quality={75}
        placeholder="blur"
        blurDataURL="/florals-new_optimized.webp" // You can add a low-quality blurred version of the image here
        className="absolute top-0 left-0 w-full h-full opacity-50"
      />
      
      {/* Content inside the Hero Section */}
      <div className="border-2 border-creamy w-3/4 h-3/4 relative z-10 flex flex-col justify-center items-center rounded-md bg-creamy/10">
        <div className="flex justify-center items-center">
          {imageSrc && (
            <Image
              src={imageSrc}
              width={100}
              height={100}
              alt="Additional Image"
              className="rounded-full"
            />
          )}
        </div>

        <h1 className="text-creamy z-10 text-lg sm:text-2xl md:text-5xl text-center">{title}</h1>
      </div>
    </section>
  );
};

export default Hero;