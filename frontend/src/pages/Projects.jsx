import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PROJECTS = [
  // 4Lo.ops Projects
  {
    id: 1,
    title: "Fawtech Technologies",
    type: "Website",
    img: "../Assets/ProjectCardImages/Fawtech.png",
    desc: "Showcasing Fawtech Technologies with a sleek corporate design and smooth animations.",
  },
  {
    id: 2,
    title: "Shahu Mumbai",
    type: "Website",
    img: "/images/p4.jpg",
    desc: "Full-fledged e-commerce website.",
  },

  // Arjun's Projects
  {
    id: 3,
    title: "Harmony Hub",
    type: "Website",
    img: "../Assets/ProjectCardImages/HarmonyHub.png",
    desc: "Cross-platform music and community app.",
  },
  {
    id: 4,
    title: "Football Track Management",
    type: "Software",
    img: "../Assets/ProjectCardImages/FootballTrack.png",
    desc: "System to manage football matches, teams, and schedules.",
  },
  {
    id: 5,
    title: "Task Manager",
    type: "Website",
    img: "/images/p2.jpg",
    desc: "AI-powered task and productivity analytics platform.",
  },

  // Aman's Projects
  {
    id: 6,
    title: "Super Market",
    type: "Software",
    img: "/images/p7.jpg",
    desc: "Retail supermarket management application.",
  },
  {
    id: 7,
    title: "Flight Booking",
    type: "Website",
    img: "/images/p8.jpg",
    desc: "Online flight ticket booking and reservation system.",
  },
  {
    id: 8,
    title: "Soul TV",
    type: "Website",
    img: "/images/p9.jpg",
    desc: "Anime streaming and discovery website.",
  },

  // Dilip's Projects
  {
    id: 9,
    title: "Gaman Builder",
    type: "Website",
    img: "../Assets/ProjectCardImages/GamanBuilder.png",
    desc: "A property selling website where customers can explore homes, view details, and connect with Gaman Builder for their dream property.",
  },
  {
    id: 10,
    title: "SDmusic Player",
    type: "Website",
    img: "../Assets/ProjectCardImages/SdPlayer.jpg",
    desc: "Cross-platform music streaming player.",
  },
  {
    id: 11,
    title: "Clothing Shop",
    type: "Sorftware",
    img: "../Assets/ProjectCardImages/ClothingShop.png",
    desc: "Fashion e-commerce shopping Sorftware for E-Commerce Shops.",
  },

  // Riken's Projects
  {
    id: 12,
    title: "Mudra Finance",
    type: "Website",
    img: "/images/p12.jpg",
    desc: "Financial services and loan management portal.",
  },
  {
    id: 13,
    title: "Hotwheels",
    type: "Website",
    img: "/images/p13.jpg",
    desc: "Car rental and booking application.",
  },
  {
    id: 14,
    title: "Clinic Management",
    type: "Software",
    img: "/images/p14.jpg",
    desc: "System to manage doctors, patients, and appointments.",
  },

  // ..................... Other Projects.................................
  {
    id: 15,
    title: "Gym Trainer",
    type: "Website",
    img: "../Assets/ProjectCardImages/GymTrainer.png",
    desc: "Fitness training and personal coaching website.",
  },
  {
    id: 16,
    title: "Nature Trails",
    type: "Website",
    img: "../Assets/ProjectCardImages/NatureTrails.png",
    desc: "Explore beautiful trails, join events, and connect with new friends in nature.",
  },
];

const TYPES = ["All", "Website", "Application", "Software"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const list = useMemo(
    () =>
      filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.type === filter),
    [filter]
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Our Projects
        </h2>
        <div className="flex gap-2 flex-wrap">
          {TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 font-medium text-sm
                ${
                  filter === t
                    ? "bg-slate-900 text-white border-slate-900 shadow-md"
                    : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-400"
                }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <AnimatePresence>
          {list.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

// Individual Card with lighter animation
function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <motion.article
      onClick={() => navigate(`/projects/${project.id}`)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-lg cursor-pointer group will-change-transform"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="text-xs uppercase tracking-wide text-gray-300">
            {project.type}
          </div>
          <h3 className="font-semibold text-lg mt-1">{project.title}</h3>
          <p className="text-sm mt-1 text-gray-200">{project.desc}</p>
        </div>
      </div>
    </motion.article>
  );
}
