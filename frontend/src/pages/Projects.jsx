import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import api from "../supabase/axios";

const TYPES = ["All", "Website", "Application", "Software"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10; // Matches API limit

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/api/projects?page=${page}&limit=${limit}`);
        const { data, total } = await response.data;
        setProjects(data);
        setTotal(total);
        setError(null);
      } catch (err) {
        setError(err.message);
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

      {loading && <p className="text-center mt-10">Loading projects...</p>}
      {error && (
        <p className="text-center mt-10 text-red-500">Error: {error}</p>
      )}
      {!loading && !error && filteredProjects.length === 0 && (
        <p className="text-center mt-10">No projects found.</p>
      )}

      <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <AnimatePresence>
          {filteredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Pagination Controls */}
      {!loading && !error && total > limit && (
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-slate-900 text-white rounded-full disabled:opacity-50"
          >
            Previous
          </button>
          <span className="self-center">
            Page {page} of {Math.ceil(total / limit)}
          </span>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page * limit >= total}
            className="px-4 py-2 bg-slate-900 text-white rounded-full disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
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
      className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-lg cursor-pointer group will-change-transform"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.hero_img || "/images/placeholder.jpg"} // Use hero_img from API
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="text-xs uppercase tracking-wide text-gray-300">
            {project.type}
          </div>
          <h3 className="font-semibold text-lg mt-1">{project.title}</h3>
          <p className="text-sm mt-1 text-gray-200">{project.short_desc}</p>
        </div>
      </div>
    </motion.article>
  );
}