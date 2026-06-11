import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="relative">
            <div className="relative h-[350px] md:h-[550px] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/about.jpg"
                alt="MARANTHA INTERIOR CONCEPT LTD"
                fill
                className="object-cover"
              />
            </div>

            {/* Experience Card */}
            {/* <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-6 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="font-medium">Projects Completed</p>
            </div> */}
          </div>

          {/* Content */}
          <div>
            <span className="text-yellow-600 font-semibold uppercase tracking-[3px]">
              About Us
            </span>

            <h2 className="mt-4 text-4xl md:text-3xl font-bold text-gray-900 leading-tight">
              Transforming Spaces With Beauty, Style & Quality
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              At MARANTHA INTERIOR CONCEPT LTD, we specialize in creating
              beautiful and functional living and working environments through
              premium interior decoration solutions.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              From luxury curtains, elegant beddings, modern window blinds,
              office décor, home decoration, maintenance and cleaning services,
              we deliver exceptional craftsmanship and attention to detail in
              every project.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              Our commitment to excellence is reflected in our motto:
              <span className="font-semibold text-gray-900">
                {" "}
                "Beauty and Quality is Our Watch."
              </span>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 mt-20">

              <div className="bg-gray-50 p-5 rounded-2xl border">
                <h3 className="text-3xl font-bold text-yellow-600">
                  500+
                </h3>
                <p className="text-gray-600 mt-1">
                  Projects Completed
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-2xl border">
                <h3 className="text-3xl font-bold text-yellow-600">
                  100%
                </h3>
                <p className="text-gray-600 mt-1">
                  Customer Satisfaction
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/gallery"
                className="bg-yellow-500 hover:bg-yellow-600 transition px-8 py-4 rounded-xl font-semibold text-black"
              >
                View Our Gallery
              </Link>

              <Link
                href="/contact"
                className="border border-gray-300 hover:border-yellow-500 hover:text-yellow-600 transition px-8 py-4 rounded-xl font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}