"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { slides } from "@/lib/swiper"; // reuse your slides data

export default function HeroCarousel() {
  const autoplay = useRef(Autoplay({ delay: 8000, stopOnInteraction: false }));
  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplay.current]
  );
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[500px] xl:h-[550px] rounded-2xl overflow-hidden">
      {/* Carousel viewport */}
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className="relative min-w-0 flex-[0_0_100%] h-full"
            >
              {/* Image with alternating zoom effect */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className={`object-cover ${
                  i % 2 === 0 ? "swiper-zoom-in" : "swiper-zoom-out"
                }`}
              />

              {/* Gradient overlay for text visibility */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/50 to-transparent sm:from-black/60 sm:via-black/40" />

              {/* Text content */}
              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white max-w-xs sm:max-w-md md:max-w-lg">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                  {slide.title}
                </h2>
                <div className="flex items-center gap-2">
                  <p className="text-sm sm:text-base md:text-lg">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.link}
                    className="flex items-center justify-center gap-1 bg-white text-black px-2 py-2 rounded-full hover:bg-gray-200 transition"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots - Mobile/Tablet (bottom-left) */}
      <div className="absolute bottom-3 left-6 flex gap-2 lg:hidden animate-fadeIn">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => embla?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full ring-1 ring-white/60 transition ${
              selected === i ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Pagination Dots - Desktop (bottom-right) */}
      <div className="absolute bottom-4 right-4 hidden lg:flex gap-4 animate-fadeIn">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => embla?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full ring-1 ring-white/60 transition ${
              selected === i ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
