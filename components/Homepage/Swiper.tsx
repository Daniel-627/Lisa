"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { slides } from "@/lib/swiper";
import Link from "next/link";
import Image from "next/image";

export default function CustomSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      className="w-full h-[500px] rounded-2xl overflow-hidden"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-full">
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="max-w-xl mb-6">{slide.description}</p>
              <Link
                href={slide.link}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
