import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const Column3 = ({ images = [], title }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
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
      {title && <h2 className="text-2xl text-center mb-4">{title}</h2>}
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2 flex justify-center transition-opacity duration-500 ease-in-out">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </main>
  );
};

export default Column3;




















// OLD LAYOUT

// import react from "react";
// import Image from "next/image";
// import { pages } from "/content/content.js"

// const Column3 = ({ images = [], title }) => {
//     return(
//         <main className="">
//             <h2>{title}</h2>
//             <div className="grid grid-cols-4 gap-6 w-full">
//                 {images.map((src, index) => (
//                     <div key={index} className="relative w-32 h-32 md:w-40 md:h-40">
//                         <Image src={src} alt={`Image ${index + 1}`} layout="intrinsic" width={150} height={150} objectFit="cover" className="rounded-lg" />
//                     </div>
//                 ))}
//             </div>
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
        {/* </main>
    )
} */}

{/* export default Column3 */}