"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md text-white">
        <div className="flex justify-between items-center px-6 py-4">
          
          <div className="text-xl font-bold text-yellow-400">
            MARANTHA INTERIOR
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* SLIDE MENU (LEFT → RIGHT) */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-black text-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6 text-lg">
          
          <button
            onClick={() => setOpen(false)}
            className="text-right text-2xl"
          >
            ✕
          </button>

          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      </div>
    </>
  );
}