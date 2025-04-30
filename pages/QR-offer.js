import React from "react";
import { pages } from "/content/content.jsx";  // Import content data from content.jsx
import Image from "next/image";
import Button from "../components/Button"; // Assuming you have a Button component
import Hero from "../components/sections/hero"

const LandingPage = () => {
  return (
    <div className="relative">
        <div className="absolute inset-0 z-[-1] background">
        </div>
          {/* Hero Section */}
          <section className="hero bg-darkGreen text-creamy text-center py-18 ">
            <h1 className="text-5xl sm:text-5xl font-bold">{pages.offer.hero.title}</h1>
            <div className="mt-6">
              <Image src="/QR-offer-mockup.svg" alt="Wellness" width={700} height={420} className="mx-auto" />
            </div>
          </section>

          {/* Section 1 */}
          <section className="section1 text-center py-12 px-6 ">
            <h2 className="text-5xl font-semibold">{pages.offer.section1.title}</h2>
            <p className="text-lg mt-4">{pages.offer.section1.text1}</p>
            <p className="text-lg mt-4">{pages.offer.section1.text2}</p>
          </section>

          {/* Section 2 */}
          <section className="section2 text-center py-12 px-6 bg-sage text-creamy">
            <h2 className="text-5xl font-semibold">{pages.offer.section2.title}</h2>
            <p className="text-lg mt-4">{pages.offer.section2.text1}</p>
            <p className="text-lg mt-4">{pages.offer.section2.text2}</p>
            <Button className="bg-blush w-48 mt-8" href="/contactUs">
            Join Waitlist
            </Button>
          </section>

          {/* Cards Section */}
          <section className="cards py-16  text-center px-6">
            <h2 className="text-5xl font-semibold">Wellness Areas</h2>
            <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:gap-x-8 lg:gap-y-0 gap-y-8 mt-8 ">
              <div className="card w-full lg:w-80 p-6 border-2 bg-creamy border-olive rounded-md hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out transform">
                <h3 className="text-2xl font-semibold">{pages.offer.card1.title}</h3>
                <p>{pages.offer.card1.text}</p>
                <Image src="/pexels-emotional.jpg" alt="Emotional Wellness" width={250} height={150} className="mt-4 mx-auto" />
              </div>
              <div className="card w-full lg:w-80 p-6 border-2 bg-creamy border-olive rounded-md hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out transform">
                <h3 className="text-2xl font-semibold">{pages.offer.card2.title}</h3>
                <p>{pages.offer.card2.text}</p>
                <Image src="/pexels-physical.jpg" alt="Physical Wellness" width={250} height={150} className="mt-4 mx-auto" />
              </div>
              <div className="card w-full lg:w-80 p-6 border-2 bg-creamy border-olive rounded-md hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out transform">
                <h3 className="text-2xl font-semibold">{pages.offer.card3.title}</h3>
                <p>{pages.offer.card3.text}</p>
                <Image src="/pexels-social.jpg" alt="Social Wellness" width={250} height={150} className="mt-4 mx-auto" />
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="cta text-center py-12 bg-darkGreen text-creamy">
            <h2 className="text-5xl font-semibold">{pages.offer.cta.quote}</h2>
            <Button className="bg-blush w-48 mt-8" href="/contact-us">
              Order Now
            </Button>
          </section>
    </div>
  );
};

export default LandingPage;