import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaArrowAltCircleRight } from "react-icons/fa"
import { FaArrowAltCircleLeft } from "react-icons/fa";

// Custom arrow components styled to match your brand
const CustomPrevArrow = ({ className, onClick }) => (
  <div
    className={`${className} !left-0 lg:!left-[-2rem] z-10 w-12 h-12 bg-olive/90 rounded-full flex items-center justify-center hover:bg-olive transition-all cursor-pointer`}
    onClick={onClick}
  >
    <FaArrowAltCircleLeft className="text-blush text-3xl" />
  </div>
);

const CustomNextArrow = ({ className, onClick }) => (
  <div
    className={`${className} !right-0 z-10 w-12 h-12 bg-olive/90 rounded-full flex items-center justify-center hover:bg-olive transition-all cursor-pointer`}
    onClick={onClick}
  >
    <FaArrowAltCircleRight className="text-blush text-3xl" />
  </div>
);

// Updated component accepts an optional `links` array
const Column3 = ({ images = [], title, links = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <main className="w-full max-w-5xl mx-auto px-4">
      {title && <h2 className="text-2xl text-center mb-4 text-darkGreen">{title}</h2>}
      <Slider {...settings}>
        {images.map((src, index) => {
          const hasLink = links[index];
          const imageElement = (
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
            </div>
          );

          return (
            <div key={index} className="px-2 flex justify-center transition-opacity duration-500 ease-in-out">
              {hasLink ? (
                <a href={links[index]} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  {imageElement}
                </a>
              ) : (
                imageElement
              )}
            </div>
          );
        })}
      </Slider>
    </main>
  );
};

export default Column3;