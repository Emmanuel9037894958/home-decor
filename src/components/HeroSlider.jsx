"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/hero1.jpg",
  "/hero111.jpg",
  "/hero3.jpg",
  "/hero21.jpg",
  "/hero17.jpg",
  "/hero20.jpg",
  "/hero18.jpg",
  "/about.jpg",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt="Interior Decor"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          MARANTHA INTERIOR CONCEPT LTD
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Beauty and quality is our watch
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="/gallery"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            View Gallery
          </a>

          <a
            href="/contact"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}