import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../supabase/axios";

export default function ProjectDetails() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get project ID from URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch project by ID
  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/api/projects/${id}`);
        const data = await response.data;
        setProject(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-700">Loading project...</p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">
          {error || "Project not found"}
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src={project.hero_img || "/images/placeholder.jpg"} // Use hero_img
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-sm uppercase text-gray-300 mb-2">{project.type}</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            {project.short_desc}
          </p>
        </motion.div>
      </div>

      {/* Overall Description */}
      <motion.section
        className="max-w-4xl mx-auto px-4 py-16 text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
        <p className="text-lg leading-relaxed">{project.full_desc}</p>
      </motion.section>

      {/* Image Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <motion.section
          className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {project.gallery.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={img}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </motion.section>
      )}

      {/* Video Section */}
      {project.video && (
        <motion.section
          className="max-w-4xl mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4">Project Demo</h2>
           <div className="relative w-full h-0 pb-[56.25%]">
            <iframe width="100%" height="560" src={project.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>

        </motion.section>
      )}

      {/* Features & Technologies */}
      {project.features && project.features.length > 0 && (
        <motion.section
          className="max-w-6xl mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Features & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Call To Action Section */}
      <motion.section
        className="bg-slate-900 py-20 px-4 text-center text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Want a Project Like This?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Contact us today and we’ll help you build an amazing website, application, or software tailored to your needs.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/contact")}
          className="bg-white text-slate-900 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-200 transition"
        >
          Contact Us
        </motion.button>
      </motion.section>
    </motion.div>
  );
}