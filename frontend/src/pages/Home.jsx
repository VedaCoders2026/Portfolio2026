import { motion, useReducedMotion } from "framer-motion";
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
  ShieldCheck,
} from "lucide-react";

const isMobile = window.innerWidth < 768;

/* ---------------- COUNTER ---------------- */
function Counter({ target, label }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: isMobile,
    threshold: 0.5,
  });

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    const duration = isMobile ? 1000 : 1600;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-5xl font-extrabold bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
        {count}+
      </span>
      <span className="text-slate-400 mt-2 text-lg">{label}</span>
    </div>
  );
}

/* ---------------- HOME ---------------- */
export default function Home() {
  const reduceMotion = useReducedMotion();

  const baseTransition = {
    duration: reduceMotion ? 0 : isMobile ? 0.35 : 0.6,
    ease: "easeOut",
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-36 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={baseTransition}
          className="text-4xl md:text-7xl font-extrabold leading-tight"
        >
          Building the Future with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-sky-600">
            SixthSyntax Tech
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={baseTransition}
          className="mt-6 text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto"
        >
          We transform <span className="text-white font-semibold">ideas into digital reality</span>{" "}
          — delivering world-class{" "}
          <span className="text-teal-400">Websites, Applications, and Software</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={baseTransition}
          className="mt-10 flex justify-center gap-6 flex-wrap"
        >
          <Link
            to="/projects"
            className="px-8 py-4 rounded-xl text-white font-semibold text-lg
                       bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg
                       transition-transform md:hover:scale-105"
          >
            🚀 View Projects
          </Link>

          <a
            href="#why-us"
            className="px-8 py-4 rounded-xl text-lg font-semibold
                       border border-gray-600 text-slate-300
                       hover:text-white hover:border-teal-400
                       transition flex items-center gap-2"
          >
            <ShieldCheck size={22} />
            Why Choose Us?
          </a>
        </motion.div>
      </div>

      {/* BACKGROUND BLOBS (OPTIMIZED) */}
      <div className="absolute -top-40 -left-32 w-96 h-96 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full blur-xl md:blur-3xl opacity-20 md:animate-pulse" />
      <div className="absolute top-40 -right-40 w-[28rem] h-[28rem] bg-gradient-to-r from-cyan-500 to-sky-600 rounded-full blur-xl md:blur-3xl opacity-20 md:animate-pulse" />

      {/* WHY US */}
      <div id="why-us" className="relative max-w-7xl mx-auto px-6 pb-32 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={baseTransition}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Why <span className="text-teal-400">Choose Us?</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { icon: Code2, color: "text-teal-400", t: "Full-stack Expertise", d: "Modern frameworks & cloud-native apps." },
            { icon: Palette, color: "text-cyan-400", t: "Design + Performance", d: "Fast, accessible & beautiful UI." },
            { icon: Rocket, color: "text-sky-400", t: "Delivery Focused", d: "Agile, transparent & on-time." },
            { icon: Layers, color: "text-teal-500", t: "Scalable Solutions", d: "Built to grow with your business." },
            { icon: Zap, color: "text-yellow-300", t: "Cutting-edge Tech", d: "AI, automation & modern stacks." },
            { icon: Shield, color: "text-green-400", t: "Secure & Reliable", d: "Best security practices." },
          ].map((c) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={baseTransition}
              className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-10
                         border border-gray-700 shadow-md
                         transition-all md:hover:scale-[1.02]"
            >
              <c.icon className={`w-10 h-10 mb-4 ${c.color}`} />
              <h3 className="font-semibold text-xl">{c.t}</h3>
              <p className="text-slate-400 mt-3">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700 py-24">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
          <Counter target={2} label="Projects Delivered" />
          <Counter target={6} label="Core Team Members" />
          <Counter target={2} label="Years of Experience" />
        </div>
      </div>
    </section>
  );
}
