import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import api from "../supabase/axios";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TYPES = ["All", "Website", "Application", "Software"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 9;

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get(`/api/projects?page=${page}&limit=${limit}`);
        const { data, total } = await response.data;
        setProjects(data);
        setTotal(total);
      } catch (err) {
        setError("⚠ Failed to fetch projects. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [page]);

  const filteredProjects = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.type === filter)),
    [filter, projects]
  );

  return (
    <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white min-h-screen py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Our <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>

          {/* Filter Buttons */}
          <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
            {TYPES.map((t) => (
              <motion.button
                key={t}
                whileTap={{ scale: 0.9 }}
                onClick={() => setFilter(t)}
                className={`px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-md transition-all duration-300
                  ${
                    filter === t
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                      : "bg-gray-800/60 text-slate-300 border border-gray-700 hover:bg-gray-700/80"
                  }`}
              >
                {t}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* States */}
        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {Array.from({ length: limit }).map((_, i) => (
              <div
                key={i}
                className="h-60 rounded-3xl bg-gray-800/40 animate-pulse"
              />
            ))}
          </div>
        )}

        {error && <p className="text-center mt-10 text-red-400">{error}</p>}
        {!loading && !error && filteredProjects.length === 0 && (
          <p className="text-center mt-10 text-slate-400">No projects found in this category.</p>
        )}

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14"
        >
          <AnimatePresence>
            {filteredProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} delay={i * 0.1} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {!loading && !error && total > limit && (
          <div className="flex justify-center items-center gap-6 mt-14">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-full bg-gray-800/70 text-slate-300 flex items-center gap-2 disabled:opacity-50 hover:bg-gray-700/80 transition"
            >
              <ArrowLeft size={18} /> Prev
            </button>
            <span className="font-medium text-slate-400">
              Page {page} of {Math.ceil(total / limit)}
            </span>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={page * limit >= total}
              className="px-4 py-2 rounded-full bg-gray-800/70 text-slate-300 flex items-center gap-2 disabled:opacity-50 hover:bg-gray-700/80 transition"
            >
              Next <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }) {
  const navigate = useNavigate();

  return (
    <motion.article
      onClick={() => navigate(`/projects/${project.id}`)}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="relative rounded-3xl overflow-hidden bg-gray-900/80 border border-gray-800 shadow-2xl cursor-pointer group backdrop-blur-md"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.hero_img || "/images/placeholder.jpg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <div className="text-xs uppercase tracking-widest font-bold text-teal-400">
          {project.type}
        </div>
        <h3 className="font-bold text-xl mt-1">{project.title}</h3>
        <p className="text-sm mt-2 text-slate-300">{project.short_desc}</p>
      </div>
    </motion.article>
  );
}
