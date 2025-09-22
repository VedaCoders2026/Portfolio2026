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
  const limit = 10;

  // Fetch projects from API
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
        setError("Failed to fetch projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [page]);

  // Filter projects based on type
  const filteredProjects = useMemo(
    () =>
      filter === "All" ? projects : projects.filter((p) => p.type === filter),
    [filter, projects]
  );

  return (
    <section className="bg-gray-950 text-white min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header and Filter Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Our <span className="text-teal-400">Projects</span>
          </h2>
          <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 font-medium text-sm
                  ${
                    filter === t
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-transparent shadow-lg"
                      : "bg-gray-800 text-slate-300 border-gray-700 hover:bg-gray-700 hover:border-gray-600"
                  }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        {loading && <p className="text-center mt-10 text-slate-400">Loading projects...</p>}
        {error && (
          <p className="text-center mt-10 text-red-500">Error: {error}</p>
        )}
        {!loading && !error && filteredProjects.length === 0 && (
          <p className="text-center mt-10 text-slate-400">No projects found for this category.</p>
        )}

        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <AnimatePresence>
            {filteredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination Controls */}
        {!loading && !error && total > limit && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="p-3 bg-gray-800 text-slate-300 rounded-full disabled:opacity-50 hover:bg-gray-700 transition"
              aria-label="Previous Page"
            >
              <ArrowLeft size={20} />
            </button>
            <span className="self-center font-medium text-slate-400">
              Page {page} of {Math.ceil(total / limit)}
            </span>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={page * limit >= total}
              className="p-3 bg-gray-800 text-slate-300 rounded-full disabled:opacity-50 hover:bg-gray-700 transition"
              aria-label="Next Page"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

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
      className="relative rounded-3xl overflow-hidden bg-gray-900 border border-gray-800 shadow-xl cursor-pointer group will-change-transform"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.hero_img || "/images/placeholder.jpg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="text-xs uppercase tracking-widest font-semibold text-teal-400">
            {project.type}
          </div>
          <h3 className="font-bold text-xl mt-2">{project.title}</h3>
          <p className="text-sm mt-2 text-slate-400">{project.short_desc}</p>
        </div>
      </div>
    </motion.article>
  );
}