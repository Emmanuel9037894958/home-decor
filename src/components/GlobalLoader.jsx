"use client";

import { useEffect, useState } from "react";

export default function GlobalLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="text-center">
        
        <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <h1 className="text-white mt-6 text-xl font-semibold tracking-widest">
          MARANTHA INTERIOR
        </h1>

        <p className="text-gray-400 mt-2">
          Loading premium experience...
        </p>

      </div>
    </div>
  );
}