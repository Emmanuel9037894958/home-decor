"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/2348037570385"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed right-2 bottom-32 z-[9999]
        bg-green-600 hover:bg-green-700
        text-white p-4 rounded-full
        flex items-center justify-center
        shadow-xl shadow-green-500/40
        transition-all duration-300
        hover:scale-110
        animate-pulse
        whatsapp-float
      "
    >
      <FaWhatsapp size={28} />
    </a>
  );
}