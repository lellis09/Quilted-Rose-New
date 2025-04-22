import React from "react";
import { pages } from "/content/content.jsx";  // Import content data from content.jsx
import Image from "next/image";
import Button from "../components/Button"; // Assuming you have a Button component

const LandingPage = () => {
  return (
    <div className="bg-lightGray py-10">
      {/* Hero Section */}
      <section className="hero bg-darkGreen text-creamy text-center py-16">
        <h1 className="text-4xl sm:text-5xl font-bold">{pages.offer.hero.title}</h1>
        <div className="mt-6">
          <Image src="/path/to/hero-image.jpg" alt="Wellness" width={500} height={300} className="mx-auto" />
        </div>
      </section>

      {/* Section 1 */}
      <section className="section1 text-center py-12 px-6 bg-creamy">
        <h2 className="text-3xl font-semibold">{pages.offer.section1.title}</h2>
        <p className="text-lg mt-4">{pages.offer.section1.text1}</p>
        <p className="text-lg mt-4">{pages.offer.section1.text2}</p>
      </section>

      {/* Section 2 */}
      <section className="section2 text-center py-12 px-6 bg-darkGreen text-creamy">
        <h2 className="text-3xl font-semibold">{pages.offer.section2.title}</h2>
        <p className="text-lg mt-4">{pages.offer.section2.text1}</p>
        <p className="text-lg mt-4">{pages.offer.section2.text2}</p>
        <Button className="bg-blush w-48 mt-8" href="/start-now">
          Get Started
        </Button>
      </section>

      {/* Cards Section */}
      <section className="cards py-16 bg-lightGray text-center">
        <h2 className="text-3xl font-semibold">Wellness Areas</h2>
        <div className="flex justify-center gap-x-8 mt-8">
          <div className="card w-80 p-6 border-2 border-olive rounded-md">
            <h3 className="text-xl font-semibold">{pages.offer.card1.title}</h3>
            <p>{pages.offer.card1.text}</p>
            <Image src="/path/to/emotional-wellness.jpg" alt="Emotional Wellness" width={250} height={150} className="mt-4 mx-auto" />
          </div>
          <div className="card w-80 p-6 border-2 border-olive rounded-md">
            <h3 className="text-xl font-semibold">{pages.offer.card2.title}</h3>
            <p>{pages.offer.card2.text}</p>
            <Image src="/path/to/physical-wellness.jpg" alt="Physical Wellness" width={250} height={150} className="mt-4 mx-auto" />
          </div>
          <div className="card w-80 p-6 border-2 border-olive rounded-md">
            <h3 className="text-xl font-semibold">{pages.offer.card3.title}</h3>
            <p>{pages.offer.card3.text}</p>
            <Image src="/path/to/social-wellness.jpg" alt="Social Wellness" width={250} height={150} className="mt-4 mx-auto" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta text-center py-12 bg-darkGreen text-creamy">
        <h2 className="text-3xl font-semibold">{pages.offer.cta.quote}</h2>
        <Button className="bg-blush w-48 mt-8" href="/contact-us">
          Book Now
        </Button>
      </section>
    </div>
  );
};

export default LandingPage;