import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold">
          Transform Your Space Today
        </h2>

        <p className="mt-6 text-gray-300">
          Let MARANTHA INTERIOR CONCEPT LTD bring beauty,
          comfort, and elegance to your home or office.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold"
          >
            Contact Us
          </Link>

          <Link
            href="/gallery"
            className="border border-white px-8 py-4 rounded-lg"
          >
            View Gallery
          </Link>
        </div>

      </div>
    </section>
  );
}