import React from "react";
import { motion } from "framer-motion";
import Mobile from "../TeamImg/services/Mobile.jpg";
import Web from "../TeamImg/services/website.jpg";
import Software from "../TeamImg/services/Software.jpg";
import UIUX from "../TeamImg/services/UiUx.jpg";

const services = [
  {
    title: "Custom Web Development",
    desc: "Scalable, high-performance websites crafted using React, Next.js, and modern web standards.",
    img: Web,
    link: "/webdevelopment",
  },
  {
    title: "Mobile Applications",
    desc: "Mobile-first experiences engineered for speed, usability, and flawless responsiveness.",
    img: Mobile,
    link: "/mobileapplications",
  },
  {
    title: "Software Development",
    desc: "Robust, secure software systems built for scalability, performance, and long-term growth.",
    img: Software,
    link: "/softwaredevelopment",
  },
  {
    title: "UI / UX Design",
    desc: "Design systems focused on clarity, conversion, and delightful user experience.",
    img: UIUX,
    link: "/uxdesign",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100">

      {/* BACKGROUND ANIMATION */}
      <motion.div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-96 h-96
                     bg-gradient-to-r from-teal-500 to-cyan-600
                     blur-3xl opacity-20 rounded-full"
        />
        <motion.div
          animate={{ x: [0, -30, 30, 0], y: [0, 40, -20, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 -right-40 w-[30rem] h-[30rem]
                     bg-gradient-to-r from-cyan-500 to-sky-600
                     blur-3xl opacity-20 rounded-full"
        />
      </motion.div>

      {/* HERO */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Our <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-sky-600 bg-clip-text text-transparent">
            Services
          </span>
        </motion.h1>

        <p className="mt-6 text-slate-300 max-w-3xl mx-auto text-lg">
          We craft digital products that combine strategy, design, and engineering
          to deliver measurable results.
        </p>
      </div>

      {/* SERVICES STACK */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-36 space-y-28">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* IMAGE */}
            <div className={i % 2 ? "lg:order-2" : ""}>
              <div className="relative h-[360px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={service.img}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover
                             transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
              </div>
            </div>

            {/* TEXT */}
            <div className={i % 2 ? "lg:order-1" : ""}>
              <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-teal-400">
                0{i + 1}
              </span>

              <h2 className="text-4xl font-bold mb-5">
                {service.title}
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                {service.desc}
              </p>

              <a
                href={service.link}
                className="inline-flex items-center gap-2
                           text-teal-400 font-semibold hover:underline"
              >
                Explore Service →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
