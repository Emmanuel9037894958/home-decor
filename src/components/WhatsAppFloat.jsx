"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/2348037570385"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-10 z-[9999] bg-green-600 hover:bg-green-600 text-white p-4 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-5xl animate-pulse"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}