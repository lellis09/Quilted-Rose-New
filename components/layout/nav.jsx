"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full relative">
      {/* Hamburger Menu Button (Visible on Small Screens) */}
      <div className="flex justify-between items-center lg:hidden p-4 z-20 relative">
        <button onClick={() => setIsOpen(!isOpen)} className="text-darkGreen text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav - Fixed to Ensure It Appears */}
      <div className={`fixed top-0 left-0 w-full h-full z-20 bg-creamy flex flex-col items-center justify-center
        transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} 
        lg:relative lg:translate-x-0 lg:bg-transparent lg:h-auto lg:flex lg:justify-center lg:py-4`}>

        {/* Close Button (Only on Mobile) */}
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-darkGreen text-3xl lg:hidden">
          <FaTimes />
        </button>

        {/* Navigation Links */}
        <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-x-12 gap-y-6 lg:gap-y-0">
          <Link href="/" className="text-md text-darkGreen hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="text-md text-darkGreen hover:underline" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/services" className="text-md text-darkGreen hover:underline" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/resources" className="text-md text-darkGreen hover:underline" onClick={() => setIsOpen(false)}>Resources</Link>
          <Link href="/faq" className="text-md text-darkGreen hover:underline" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link href="/contactUs" className="text-md text-darkGreen hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;