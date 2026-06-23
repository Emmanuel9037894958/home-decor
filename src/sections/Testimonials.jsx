"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Mrs. Chioma E.",
    location: "Awka",
    rating: 5,
    text: "Marantha Interior completely transformed my living room. Their attention to detail and professionalism exceeded my expectations.",
  },
  {
    name: "Mr. Emeka O.",
    location: "Onitsha",
    rating: 4.5,
    text: "From consultation to installation, everything was smooth. I highly recommend them for quality curtains and blinds.",
  },
  {
    name: "Mrs. Ada N.",
    location: "Nnewi",
    rating: 5,
    text: "Excellent customer service. My home now looks elegant and luxurious thanks to Marantha Interior.",
  },
  {
    name: "Mr. Chinedu I.",
    location: "Enugu",
    rating: 4.5,
    text: "Their professionalism and finishing impressed my entire family. I will definitely use them again.",
  },
  {
    name: "Mrs. Grace A.",
    location: "Asaba",
    rating: 5,
    text: "Beautiful window blinds and quality bedding. Everything was delivered exactly as promised.",
  },
  {
    name: "Mr. Daniel U.",
    location: "Abuja",
    rating: 5,
    text: "One of the best interior companies I've worked with. Highly recommended!",
  },
];

function Stars({ rating }) {
  const stars = [];

  const full = Math.floor(rating);
  const half = rating % 1 !== 0;

  for (let i = 0; i < full; i++) {
    stars.push(<FaStar key={i} />);
  }

  if (half) {
    stars.push(<FaStarHalfAlt key="half" />);
  }

  while (stars.length < 5) {
    stars.push(<FaRegStar key={`empty-${stars.length}`} />);
  }

  return (
    <div className="flex gap-1 text-yellow-500">
      {stars}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-4 pb-14 bg-gradient-to-b from-white to-gray-100">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >

        <div className="text-center mb-14">

          <span className="uppercase tracking-[6px] text-yellow-500 font-semibold">
            Testimonials
          </span>

          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mt-4">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We believe every beautiful space begins with trust. Here's what our happy clients have to say about working with us.
          </p>

        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>

              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: .3 }}
                className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 h-full"
              >

                <Stars rating={item.rating} />

                <p className="text-gray-600 leading-8 italic mt-6">
                  "{item.text}"
                </p>

                <div className="flex items-center mt-8">

                  <div className="w-16 h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center text-2xl font-bold">
                    {item.name.charAt(4)}
                  </div>

                  <div className="ml-4">

                    <h4 className="font-bold text-gray-900">
                      {item.name}
                    </h4>

                    <p className="text-gray-500">
                      {item.location}
                    </p>

                  </div>

                </div>

              </motion.div>

            </SwiperSlide>
          ))}
        </Swiper>

      </motion.div>

    </section>
  );
}