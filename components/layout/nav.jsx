"use client";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex gap-x-12 py-4">
      <Link href="/" className="text-md text-darkGreen hover:underline">Home</Link>
      <Link href="/about" className="text-md text-darkGreen hover:underline">About</Link>
      <Link href="/services" className="text-md text-darkGreen hover:underline">Services</Link>
      <Link href="/resources" className="text-md text-darkGreen hover:underline">Resources</Link>
      <Link href="/faq" className="text-md text-darkGreen hover:underline">FAQ</Link>
      <Link href="/contactUs" className="text-md text-darkGreen hover:underline">Contact</Link>
    </nav>
  );
};

export default Nav;