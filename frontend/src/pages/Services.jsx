import React from "react";
import { motion } from "framer-motion";

export default function WebDevelopment() {
  const products = [
    {
      img: "https://images.unsplash.com/photo-1581276879432-15a19d654956?auto=format&fit=crop&w=800&q=80",
      title: "Custom Web Development",
      desc: "Tailored websites built from scratch using modern frameworks like React & Next.js.",
    },
    {
      img: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=800&q=80",
      title: "Mobile Applications",
      desc: "Perfect layouts on any screen — mobile, tablet, or desktop.",
    },
    {
      img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80",
      title: "Software Development",
      desc: "Fast load times, SEO-friendly architecture, and clean codebase.",
    },
    {
      img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80",
      title: "UI/UX Design",
      desc: "Built to rank with best on-page SEO and meta optimizations.",
    },
  ];

  return (
    <div className="bg-[#0B0E14] text-gray-100 min-h-screen relative overflow-hidden">
      {/* Hero Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(20,184,166,0.15),_transparent_60%)] pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          Building the Future with{" "}
          <span className="text-teal-400">Veda.Coders Tech</span>
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          We transform <span className="text-white font-medium">ideas</span>{" "}
          into{" "}
          <span className="text-teal-400 font-medium">digital reality</span> —
          delivering world-class Websites, Applications, and Software with
          speed, scalability, and elegance.
        </p>
          <div className="flex justify-center gap-4">
            <a
              href="/projects"
              className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white rounded-lg font-semibold transition inline-block"
            >
              View Projects
            </a>
            <a
              href="/about"
              className="px-6 py-3 border border-gray-600 hover:border-teal-400 text-gray-200 hover:text-teal-400 rounded-lg font-semibold transition inline-block"
            >
              Why Choose Us?
            </a>
          </div>

      </section>

      {/* Product Cards Grid */}
      <section className="relative max-w-6xl mx-auto px-6 pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#111827] rounded-2xl shadow-lg overflow-hidden hover:shadow-teal-500/20 transition flex flex-col"
          >
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={product.img}
                alt={product.title}
                className="object-cover w-full h-full transform hover:scale-110 transition duration-700"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {product.title}
              </h3>
              <p className="text-gray-400 mb-4 flex-grow">{product.desc}</p>
              <a href="/webdevelopment" className="mt-auto px-4 py-2 bg-teal-500 hover:bg-teal-400 text-white font-medium rounded-lg transition">
                Learn More
              </a>
            </div>
          </motion.div>
        ))}
      </section>

    </div>
  );
}
