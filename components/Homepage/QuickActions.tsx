"use client";

import { motion } from "framer-motion";
import { Calendar, User, Pill } from "lucide-react";
import Link from "next/link";

const actions = [
  {
    title: "Find a Doctor",
    icon: <User className="w-8 h-8" />,
    link: "/doctors",
    color: "bg-gradient-to-br from-pink-500 to-rose-600",
  },
  {
    title: "Book Appointment",
    icon: <Calendar className="w-8 h-8" />,
    link: "/appointments",
    color: "bg-gradient-to-br from-blue-500 to-indigo-600",
  },
  {
    title: "Patient Portal",
    icon: <Pill className="w-8 h-8" />,
    link: "/portal",
    color: "bg-gradient-to-br from-orange-400 to-red-500",
  },
];

export default function QuickActions() {
  return (
    <section className="w-full py-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {actions.map((action, i) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.2,
                duration: 0.6,
                type: "spring",
                stiffness: 80,
              }}
              className="w-full"
            >
              <Link
                href={action.link}
                className={`flex flex-col items-center justify-center rounded-2xl p-8 w-full h-full text-white shadow-lg transition transform hover:scale-105 ${action.color}`}
              >
                {action.icon}
                <span className="mt-3 text-lg font-semibold text-center">
                  {action.title}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
