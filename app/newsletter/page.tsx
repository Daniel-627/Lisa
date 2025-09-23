"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchAllPosts } from "@/lib/sanity"; // ✅ your Sanity fetcher
import { urlFor } from "@/sanity/lib/image";  // ✅ image builder
import { Post } from "@/types/sanity";        // ✅ typed posts

export default function NewsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchAllPosts();
      setPosts(data);
    };
    loadPosts();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <section className="py-10">
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
          {currentPosts.map((post, i) => (
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

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 disabled:opacity-50"
            >
              ← Prev
            </button>

            <span className="font-medium text-gray-700 dark:text-gray-200">
              Page {currentPage} of {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 disabled:opacity-50"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
