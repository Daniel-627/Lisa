"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchAllPosts } from "@/lib/sanity"; // ✅ your Sanity fetcher
import { urlFor } from "@/sanity/lib/image";  // ✅ image builder
import { Post } from "@/types/sanity";        // ✅ typed posts

export default function NewsSection() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchAllPosts();
      setPosts(data.slice(0, 3)); // ✅ only keep the latest 3
    };
    loadPosts();
  }, []);

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
          {posts.map((post, i) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-white/10 rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={
                    post.mainImage?.asset
                      ? urlFor(post.mainImage).width(600).height(400).url()
                      : "/placeholder.jpg"
                  }
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-[#003366] dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  {post.body?.[0]?.children?.[0]?.text?.slice(0, 150) ??
                    "Read more about this article."}
                </p>
                <Link
                  href={`/newsletter/${post.slug}`}
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
            href="/newsletter"   // ✅ points to NewsPage
            className="px-6 py-3 rounded-lg font-medium bg-[#1BA3E2] text-white hover:bg-[#148ec0] transition"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
