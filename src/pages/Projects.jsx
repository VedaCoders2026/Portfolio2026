import React, { useMemo, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

const PROJECTS = [
  { id: 1, title: "Fawtech Website", type: "Website", img: "/images/p1.jpg", desc: "Corporate site with animations." },
  { id: 2, title: "Order Manager", type: "Application", img: "/images/p2.jpg", desc: "Internal tool for ops." },
  { id: 3, title: "Billing Engine", type: "Software", img: "/images/p3.jpg", desc: "High‑volume invoicing." },
  { id: 4, title: "Shahu Mumbai", type: "Website", img: "/images/p4.jpg", desc: "E‑commerce Full-fledge Website." },
  { id: 5, title: "Field App", type: "Application", img: "/images/p5.jpg", desc: "Android/iOS Flutter app." },
  { id: 6, title: "Data Sync", type: "Software", img: "/images/p6.jpg", desc: "ETL & reporting service." },
];

const TYPES = ["All", "Website", "Application", "Software"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const list = useMemo(() => (filter === "All" ? PROJECTS : PROJECTS.filter(p => p.type === filter)), [filter]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Header & Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Projects</h2>
        <div className="flex gap-2 flex-wrap">
          {TYPES.map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 font-medium text-sm
                ${filter === t
                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-400"
                }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {list.map(p => (
            <ProjectCard key={p.id} project={p} variants={cardVariants} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

// Individual Card with Framer Motion 3D Tilt
function ProjectCard({ project, variants }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [5, -5]); // tilt max 5deg
  const rotateY = useTransform(x, [-50, 50], [-5, 5]);
  const scale = useTransform(x, [-50, 50], [1, 1.03]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const posX = e.clientX - rect.left - rect.width / 2;
    const posY = e.clientY - rect.top - rect.height / 2;
    x.set(posX);
    y.set(posY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ rotateX, rotateY, scale }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-lg cursor-pointer group will-change-transform"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          onError={e => { e.currentTarget.style.display = 'none'; }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Description Panel Sliding Up */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="text-xs uppercase tracking-wide text-gray-300">{project.type}</div>
          <h3 className="font-semibold text-lg mt-1">{project.title}</h3>
          <p className="text-sm mt-1 text-gray-200">{project.desc}</p>
        </div>
      </div>
    </motion.article>
  );
}
