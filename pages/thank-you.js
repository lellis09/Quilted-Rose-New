import React from "react";
import { pages } from "/content/content.jsx";  // Import content data from content.jsx
import Image from "next/image";
import Button from "../components/Button";

export default function ThankYou() {
    return (
      <div className="min-h-screen flex justify-center items-center bg-olive text-creamy">
        <h1 className="text-3xl">Thanks for your message! We'll be in touch soon.</h1>
      </div>
    );
  }