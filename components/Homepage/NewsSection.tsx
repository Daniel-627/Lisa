"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "5 Tips for a Healthy Heart",
    date: "Aug 15, 2025",
    description:
      "Learn how to keep your heart healthy with expert advice from our cardiology team.",
    image: "/images/blog/heart-health.jpg",
    link: "/blog/healthy-heart",
  },
  {
    id: 2,
    title: "How to Manage Stress in Daily Life",
    date: "Aug 10, 2025",
    description:
      "Our mental health specialists share practical tips to reduce stress and improve wellbeing.",
    image: "/images/blog/stress.jpg",
    link: "/blog/manage-stress",
  },
  {
    id: 3,
    title: "Advances in Surgery at Lisa Hospital",
    date: "Aug 2, 2025",
    description:
      "Discover the latest technologies we are using to improve surgical outcomes.",
    image: "/images/blog/surgery.jpg",
    link: "/blog/advances-surgery",
  },
];

export default function NewsSection() {
  return (
    <section className="py-10 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#003366] dark:text-white">
            Latest News & Health Articles
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Stay informed with updates and expert advice from our doctors.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-white/10 rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {article.date}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-[#003366] dark:text-white">
                  {article.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  {article.description}
                </p>
                <Link
                  href={article.link}
                  className="mt-4 inline-block text-[#1BA3E2] dark:text-[#40E0D0] font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="px-6 py-3 rounded-lg font-medium bg-[#1BA3E2] text-white hover:bg-[#148ec0] transition"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
