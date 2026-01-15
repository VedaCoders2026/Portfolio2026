import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Web Development",
    desc: "Scalable, high-performance websites crafted using React, Next.js, and modern web standards.",
    img: "https://images.unsplash.com/photo-1581276879432-15a19d654956?auto=format&fit=crop&w=1200&q=80",
    link: "/webdevelopment",
  },
  {
    title: "Mobile Applications",
    desc: "Mobile-first experiences engineered for speed, usability, and flawless responsiveness.",
    img: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=1200&q=80",
    link: "/mobileapplications",
  },
  {
    title: "Software Development",
    desc: "Robust, secure software systems built for scalability, performance, and long-term growth.",
    img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1200&q=80",
    link: "/softwaredevelopment",
  },
  {
    title: "UI / UX Design",
    desc: "Design systems focused on clarity, conversion, and delightful user experience.",
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80",
    link: "/uxdesign",
  },
];

export default function WebDevelopment() {
  return (
    <div className="bg-[#0B0E14] text-gray-100 overflow-hidden">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center text-center px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          Digital Products Built for the{" "}
          <span className="text-teal-400">Future</span>
        </motion.h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-10">
          SixthSyntax Tech delivers next-generation websites, applications, and
          software engineered for performance, scalability, and growth.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/projects"
            className="px-8 py-3 bg-teal-500 hover:bg-teal-400 rounded-lg font-semibold transition"
          >
            Our Work
          </a>
          <a
            href="/contact"
            className="px-8 py-3 border border-gray-600 hover:border-teal-400 rounded-lg font-semibold transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 space-y-28 pb-32">
        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* TEXT */}
            <div>
              <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
              <p className="text-gray-400 text-lg mb-6">{item.desc}</p>
              <a
                href={item.link}
                className="inline-block text-teal-400 font-semibold hover:underline"
              >
                Explore Service →
              </a>
            </div>

            {/* IMAGE */}
            <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
