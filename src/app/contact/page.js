"use client";

import BrandTypewriter from "@/components/BrandTypewriter";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-gray-100 dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-yellow-600 uppercase tracking-widest font-semibold">
            Contact Us
          </p>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
            Let's Transform Your Space
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Have questions or need professional interior decoration services?
            Reach out to MARANTHA INTERIOR CONCEPT LTD today.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* CONTACT FORM */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-8 transition-colors">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
              />

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
                className="w-full border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
              />

              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 transition text-black font-semibold px-8 py-4 rounded-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-8">

            {/* PHONE + WHATSAPP */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-8 transition-colors">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">

                <div className="flex gap-4">
                  <FaPhoneAlt className="text-yellow-500 text-xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Phone Numbers
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      08037570385
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      08155686869
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaWhatsapp className="text-green-500 text-xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      WhatsApp
                    </h3>

                    <a
                      href="https://wa.me/2348037570385"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Chat With Us
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* LOCATION 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-8 transition-colors">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-yellow-500 text-xl mt-1" />

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                    Main Office
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Suit 7, Vin-Vic Plaza, No. 51 Court Road, Awka, Anambra State.
                  </p>
                </div>
              </div>
            </div>

            {/* LOCATION 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-8 transition-colors">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-yellow-500 text-xl mt-1" />

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                    Showroom
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Shop 203, World Trade Center Plaza, UNIZIK Junction, Temp Site 2/3, Oby Okoli Avenue, Awka, Anambra State.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* FOOTER BANNER */}
        <div className="mt-20 bg-black text-white rounded-3xl p-12">
          <BrandTypewriter />
        </div>

      </div>
    </main>
  );
}