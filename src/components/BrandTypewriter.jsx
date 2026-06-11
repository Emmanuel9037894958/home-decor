"use client";

import { Typewriter } from "react-simple-typewriter";

export default function BrandTypewriter() {
  return (
    <div className="text-center">
      
      <h2 className="text-3xl md:text-4xl font-bold">
        <Typewriter
          words={["MARANTHA INTERIOR CONCEPT LTD"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>

      <p className="mt-6 text-gray-300 text-lg md:text-xl">
        <Typewriter
          words={["Beauty and Quality Is Our Watch"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </p>

      <div className="mt-8 w-24 h-[2px] bg-yellow-500 mx-auto animate-pulse"></div>
    </div>
  );
}