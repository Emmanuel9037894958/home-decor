import Link from "next/link";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              MARANTHA INTERIOR
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Beauty and quality is our watch.
              We specialize in curtains, beddings,
              office & home décor, window blinds,
              maintenance and cleaning services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-block text-gray-400 hover:text-yellow-400 transition duration-300"
                  >
                    {link.name}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-yellow-400"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <FaPhoneAlt className="text-yellow-400 mt-1" />
                <div>
                  <p className="text-gray-400">
                    08037570385
                  </p>
                  <p className="text-gray-400">
                    08155686869
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <FaWhatsapp className="text-green-500 mt-1" />
                <a
                  href="https://wa.me/2348037570385"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition"
                >
                  Chat on WhatsApp
                </a>
              </div>

            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Locations
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                <p className="text-gray-400 text-sm">
                  Suit 7, Vin-Vic Plaza,
                  No. 51 Court Road,
                  Awka, Anambra State.
                </p>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                <p className="text-gray-400 text-sm">
                  Shop 203, World Trade Center Plaza,
                  UNIZIK Junction, Temp Site 2/3,
                  Oby Okoli Avenue, Awka.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm text-center">
            © {currentYear} MARANTHA INTERIOR CONCEPT LTD.
            All Rights Reserved.
          </p>

          <a
            href="#top"
            className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition"
          >
            Back to Top
            <FaArrowUp />
          </a>

        </div>
      </div>
    </footer>
  );
}