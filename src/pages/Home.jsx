import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer"; 
import {
  Code2,
  Palette,
  Rocket,
  Layers,
  Zap,
  Shield,
} from "lucide-react";

// Animated Counter Component (replays on scroll)
function Counter({ target, label }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // 2s
      const step = Math.ceil(target / (duration / 16));

      const interval = setInterval(() => {
        start += step;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setCount(start);
      }, 16);

      return () => clearInterval(interval);
    } else {
      setCount(0); // reset when out of view
    }
  }, [inView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-indigo-600 to-purple-500">
        {count}+
      </span>
      <span className="text-slate-600 mt-1">{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-32 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          Welcome to{" "}
          <span className="drop-shadow bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600">
            4lo.ops Tech
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto"
        >
          We craft <span className="font-semibold">Websites, Applications, and Software</span>
          with precision and creativity. From your idea to launch—expect quality, speed, and a delightful experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Link
            to="/projects"
            className="px-8 py-4 rounded-xl text-white font-medium text-lg bg-gradient-to-r from-indigo-600 to-pink-600 shadow-lg hover:scale-[1.05] transition-transform"
          >
            🚀 View Projects
          </Link>
          <a
            href="#why-us"
            className="px-8 py-4 rounded-xl text-slate-700 font-medium text-lg bg-white border hover:shadow-md transition"
          >
            Why Choose Us?
          </a>
        </motion.div>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-gradient-to-r from-pink-400 to-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 -right-40 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Why Us Section */}
      <div id="why-us" className="relative max-w-7xl mx-auto px-6 pb-24 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          Why <span className="text-indigo-600">Choose Us?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { icon: <Code2 className="w-8 h-8 text-indigo-600" />, t: "Full-stack Expertise", d: "React, Node.js, Flutter, cloud & CI/CD pipelines for modern apps." },
            { icon: <Palette className="w-8 h-8 text-pink-500" />, t: "Design + Performance", d: "Beautiful, accessible, and blazing-fast digital experiences." },
            { icon: <Rocket className="w-8 h-8 text-purple-500" />, t: "Delivery Focused", d: "Agile sprints, transparent communication, and on-time results." },
            { icon: <Layers className="w-8 h-8 text-indigo-500" />, t: "Scalable Solutions", d: "From startups to enterprises, we build software that grows with you." },
            { icon: <Zap className="w-8 h-8 text-yellow-500" />, t: "Cutting-edge Tech", d: "We leverage AI, automation, and modern frameworks to stay ahead." },
            { icon: <Shield className="w-8 h-8 text-green-500" />, t: "Secure & Reliable", d: "Your data and systems are protected with best security practices." },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl bg-white p-8 border shadow-sm hover:shadow-lg transition group"
            >
              <div className="mb-4">{c.icon}</div>
              <h3 className="font-semibold text-xl group-hover:text-indigo-600 transition">
                {c.t}
              </h3>
              <p className="text-slate-600 mt-2">{c.d}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-t py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Counter target={50} label="Projects Delivered" />
          <Counter target={20} label="Happy Clients" />
          <Counter target={10} label="Team Members" />
          <Counter target={5} label="Years of Experience" />
        </div>
      </div>
    </section>
  );
}
