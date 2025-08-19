"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { slides } from "@/lib/swiper";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CustomSwiper() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      loop
      className="w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] rounded-2xl overflow-hidden"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-full">
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/50 to-transparent sm:from-black/60 sm:via-black/40" />

            {/* Text Content */}
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white max-w-xs sm:max-w-md md:max-w-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                {slide.title}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <p className="text-sm sm:text-base md:text-lg flex-1">
                  {slide.description}
                </p>
                <Link
                  href={slide.link}
                  className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
