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
    title: "Home Interior Decoration",
    description:
      "Transform your living spaces with elegant and modern interior decoration solutions tailored to your style.",
    icon: <FaCouch />,
  },
  {
    title: "Office Decoration",
    description:
      "Create productive and beautiful office environments that leave lasting impressions on clients and staff.",
    icon: <FaBuilding />,
  },
  {
    title: "Curtains & Drapes",
    description:
      "Premium-quality curtains and drapes available in various designs, colors, and textures.",
    icon: <FaPaintRoller />,
  },
  {
    title: "Window Blinds",
    description:
      "Modern and stylish window blinds that combine privacy, functionality, and beauty.",
    icon: <FaWindowMaximize />,
  },
  {
    title: "Luxury Beddings",
    description:
      "Quality bedding collections designed to enhance comfort and elegance in your home.",
    icon: <FaBed />,
  },
  {
    title: "Maintenance & Cleaning",
    description:
      "Professional cleaning and maintenance services for homes, offices, and commercial spaces.",
    icon: <FaBroom />,
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-22 pb-20 bg-[#faf9f7]">

      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto px-6">
        <span className="text-yellow-600 uppercase tracking-[4px] font-semibold">
          Our Services
        </span>

        <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">
          Professional Interior Solutions
        </h1>

        <p className="mt-6 text-gray-600 text-lg leading-8">
          At MARANTHA INTERIOR CONCEPT LTD, we provide premium interior
          decoration services that combine beauty, comfort, quality, and
          functionality for homes and offices.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="text-5xl text-yellow-500 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 mt-14">
        <div className="bg-black text-white rounded-3xl p-10 md:p-16">

          <h2 className="text-xl md:text-3xl font-bold">
            Why Choose MARANTHA INTERIOR?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div>
              <h3 className="text-yellow-400 text-xl font-semibold">
                Quality Materials
              </h3>
              <p className="mt-3 text-gray-300">
                We use high-quality products and materials for lasting beauty and durability.
              </p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-xl font-semibold">
                Professional Team
              </h3>
              <p className="mt-3 text-gray-300">
                Experienced professionals dedicated to delivering excellent results.
              </p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-xl font-semibold">
                Customer Satisfaction
              </h3>
              <p className="mt-3 text-gray-300">
                Your satisfaction is our priority and our reputation is built on trust.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-24 px-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Ready to Transform Your Space?
        </h2>

        <p className="mt-4 text-gray-600">
          Contact us today for professional interior decoration solutions.
        </p>

        <a
          href="/contact"
          className="inline-block mt-8 bg-yellow-500 hover:bg-yellow-600 transition px-8 py-4 rounded-xl font-semibold text-black"
        >
          Contact Us Today
        </a>
      </section>

    </main>
  );
}