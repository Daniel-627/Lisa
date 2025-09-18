"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { getTestimonials } from "@/lib/sanity";
import { Testimonial } from "@/types/sanity";
import { urlFor } from "@/sanity/lib/image";

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" });
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await getTestimonials();
      setTestimonials(data);
    };
    load();
  }, []);

  return (
    <section className="py-10 bg-white dark:bg-[#003366]">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-bold text-[#003366] dark:text-white">
          What Our Patients Say
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Real stories from those we’ve cared for.
        </p>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33%] bg-gray-50 dark:bg-white/10 rounded-xl shadow-md p-6"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                  {t.image ? (
                    <Image
                      src={urlFor(t.image).url()}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                </div>
                <p className="italic text-gray-700 dark:text-gray-200">
                  “{t.text}”
                </p>
                <span className="mt-3 font-semibold text-[#003366] dark:text-white">
                  — {t.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
