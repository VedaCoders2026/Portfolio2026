import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../supabase/axios";
import { Loader2 } from "lucide-react"; // Replaced custom loader with lucide-react icon

export default function ProjectDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch project by ID
  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get(`/api/projects/${id}`);
        setProject(response.data);
      } catch (err) {
        setError("Failed to load project. It may not exist.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-950 text-white">
        <Loader2 className="animate-spin" size={48} />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-950 text-white">
        <h2 className="text-4xl font-bold mb-4">Oops!</h2>
        <p className="text-xl text-red-500">{error || "Project not found."}</p>
        <motion.button
          onClick={() => navigate("/projects")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-lg transition"
        >
          Back to Projects
        </motion.button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-950 text-white min-h-screen pb-20"
    >
      {/* Hero Section */}
      <div className="relative w-full min-h-[500px] h-[75vh] flex items-end">
        <img
          src={project.hero_img || "/images/placeholder.jpg"}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 to-transparent"></div>
        <motion.div
          className="relative max-w-6xl mx-auto px-4 py-20 z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-sm uppercase tracking-widest font-semibold text-teal-400 mb-2">
            {project.type}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl">
            {project.short_desc}
          </p>
        </motion.div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Project Overview */}
        <motion.section
          className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Project Overview</h2>
          <p className="text-lg leading-relaxed text-slate-300">{project.full_desc}</p>
        </motion.section>

        {/* Features & Technologies */}
        {project.features && project.features.length > 0 && (
          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Features & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-6"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-slate-400">{feature.desc}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.section>
        )}

        {/* Image Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Project Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {project.gallery.map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="overflow-hidden rounded-xl shadow-lg border border-gray-800"
                  >
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-64 object-cover transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.section>
        )}
        
        {/* Video Section */}
        {project.video && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Project Demo</h2>
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl" style={{ paddingTop: '56.25%' }}>
                <iframe
                  title="YouTube video player"
                  src={project.video}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.section>
        )}
      </main>

      {/* Call To Action Section */}
      <motion.section
        className="bg-gray-900 py-20 px-4 text-center text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Ready to start your project?
        </h2>
        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Contact us today and we’ll help you build an amazing website, application, or software tailored to your needs.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/contact")}
          className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:from-teal-600 hover:to-cyan-600 transition"
        >
          Contact Us
        </motion.button>
      </motion.section>
    </motion.div>
  );
}