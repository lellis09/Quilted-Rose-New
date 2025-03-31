"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; 

const FooterNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full relative">
             {/* Navigation Links */}
        <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-x-12 gap-y-6 lg:gap-y-0">
          <Link href="/" className="text-md text-darkGreen hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="text-md text-darkGreen hover:underline" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/services" className="text-md text-darkGreen hover:underline" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/resources" className="text-md text-darkGreen hover:underline" onClick={() => setIsOpen(false)}>Resources</Link>
          <Link href="/faq" className="text-md text-darkGreen hover:underline" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link href="/contactUs" className="text-md text-darkGreen hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/privacy-policy" className="text-md text-darkGreen hover:underline" onClick={() => setIsOpen(false)}>Privacy Policy</Link>
        </div>
    </nav>
  );
};

export default FooterNav;