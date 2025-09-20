"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { getHeroSlides } from "@/lib/sanity";   // ✅ fetch util
import { HeroSlide } from "@/types/sanity";    // ✅ type
import { urlFor } from "@/sanity/lib/image";   // ✅ use image builder

export default function HeroCarousel() {
  const autoplay = useRef(Autoplay({ delay: 8000, stopOnInteraction: false }));
  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, align: "center" },
    [autoplay.current]
  );
  const [selected, setSelected] = useState(0);
  const [slides, setSlides] = useState<HeroSlide[]>([]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  // ✅ Fetch dynamic slides from Sanity
  useEffect(() => {
    const loadSlides = async () => {
      const data = await getHeroSlides();
      setSlides(data);
    };
    loadSlides();
  }, []);

  return (
    <div className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[450px] xl:h-[500px] rounded-2xl overflow-hidden">
      {/* Carousel viewport */}
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div
              key={slide._id}
              className="relative flex-[0_0_100%] h-full overflow-hidden"
            >
              {/* Zooming image */}
              <motion.div
                initial={{ scale: i % 2 === 0 ? 1 : 1.2 }}
                animate={{ scale: i % 2 === 0 ? 1.2 : 1 }}
                transition={{
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="absolute inset-0"
              >
                <Image
                  src={
                    slide.image
                      ? urlFor(slide.image).width(1600).height(900).url()
                      : "/placeholder.jpg"
                  }
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/50 to-transparent sm:from-black/60 sm:via-black/40" />

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
                key={selected}
                className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white max-w-xs sm:max-w-md md:max-w-lg"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                  {slide.title}
                </h2>
                <div className="flex items-center gap-2">
                  <p className="text-sm sm:text-base md:text-lg">
                    {slide.description}
                  </p>
                  {slide.link && (
                    <Link
                      href={slide.link}
                      className="flex items-center justify-center gap-1 bg-white text-black px-2 py-2 rounded-full hover:bg-gray-200 transition"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination - Mobile */}
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

      {/* Pagination - Desktop */}
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
