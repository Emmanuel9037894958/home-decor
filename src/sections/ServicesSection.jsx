"use client";

import {
  FaCouch,
  FaBuilding,
  FaWindowMaximize,
  FaBed,
  FaBroom,
  FaPaintRoller,
} from "react-icons/fa";

const services = [
  {
    title: "Home Decor",
    description:
      "Beautiful interior decoration solutions that transform your living space.",
    icon: <FaCouch />,
  },
  {
    title: "Office Decor",
    description:
      "Modern office designs that improve comfort, style, and productivity.",
    icon: <FaBuilding />,
  },
  {
    title: "Window Blinds",
    description:
      "Premium blinds designed to enhance privacy and elegance.",
    icon: <FaWindowMaximize />,
  },
  {
    title: "Curtains & Drapes",
    description:
      "High-quality curtains available in various styles and colors.",
    icon: <FaPaintRoller />,
  },
  {
    title: "Beddings",
    description:
      "Comfortable and luxurious bedding collections for your home.",
    icon: <FaBed />,
  },
  {
    title: "Maintenance & Cleaning",
    description:
      "Professional cleaning and maintenance services for homes and offices.",
    icon: <FaBroom />,
  },
];

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
  "/hero6.jpg",
  "/hero7.jpg",
  "/hero8.jpg",
  "/hero9.jpg",
  "/hero10.jpg",
];

export default function ServicesPage() {
  return (
    <main className="pt-1 xl:pt-28 pb-20 bg-[#f8f5f0]">

      {/* HERO TEXT */}
      <section className="text-center max-w-4xl mx-auto px-6">
        <p className="text-yellow-600 uppercase tracking-[4px] font-semibold">
          Our Services
        </p>

        <h1 className="mt-4 text-2xl md:text-6xl font-bold text-gray-900">
          Interior Solutions Designed For You
        </h1>

        <p className="mt-6 text-gray-600 text-lg leading-8">
          We deliver premium interior decoration services including curtains,
          blinds, beddings, home decor, office decor and cleaning services.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-500"
          >
            <div className="text-5xl text-yellow-500 mb-6">
              {service.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              {service.title}
            </h3>

            <p className="text-gray-600 leading-7">
              {service.description}
            </p>
          </div>
        ))}

      </section>

      {/* IMAGE SLIDER */}
      <section className="mt-9">

        {/* <h2 className="text-center text-2xl font-semibold text-gray-700 mb-10">
          Our Recent Projects
        </h2> */}

        <div className="overflow-hidden relative">

          <div className="flex w-max animate-scroll gap-6">

            {[...images, ...images].map((img, index) => (
              <div
                key={index}
                className="min-w-[280px] h-[200px] rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={img}
                  alt="project"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

          </div>
        </div>

      </section>

    </main>
  );
}