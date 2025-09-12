import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PROJECT = {
  id: 1,
  title: "Fawtech Website",
  type: "Website",
  heroImg: "/images/p1.jpg",
  gallery: [
    "/images/p1.jpg",
    "/images/p1-2.jpg",
    "/images/p1-3.jpg",
  ],
  video: "/videos/fawtech-demo.mp4",
  shortDesc: "Corporate site with animations and smooth UI/UX.",
  fullDesc: `The Fawtech Website is a full-fledged corporate website showcasing
  the company’s services, portfolio, and achievements. Built with React, Tailwind,
  and Framer Motion for smooth animations. Features include responsive design,
  interactive sections, and engaging user experience.`,
  features: [
    { title: "Responsive Design", desc: "Mobile-friendly layouts for all devices." },
    { title: "Framer Motion Animations", desc: "Smooth transitions and motion effects." },
    { title: "Tailwind CSS", desc: "Modern styling with utility-first framework." },
    { title: "Interactive Sections", desc: "Engaging user experience with interactive UI." },
    { title: "React Components", desc: "Reusable and modular components for scalability." },
    { title: "Performance Optimized", desc: "Fast loading and SEO-friendly structure." }
  ]
};

export default function ProjectDetails() {
  const navigate = useNavigate();

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
          src={PROJECT.heroImg}
          alt={PROJECT.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-sm uppercase text-gray-300 mb-2">{PROJECT.type}</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {PROJECT.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            {PROJECT.shortDesc}
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
        <p className="text-lg leading-relaxed">{PROJECT.fullDesc}</p>
      </motion.section>

      {/* Image Gallery */}
      <motion.section
        className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {PROJECT.gallery.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <img src={img} alt={`Fawtech screenshot ${index + 1}`} className="w-full h-64 object-cover" />
          </motion.div>
        ))}
      </motion.section>

      {/* Video Section */}
      <motion.section
        className="max-w-4xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">Project Demo</h2>
        <div className="relative w-full h-0 pb-[56.25%]">
          <video
            src={PROJECT.video}
            controls
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
          />
        </div>
      </motion.section>

      {/* Features & Technologies */}
      <motion.section
        className="max-w-6xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Features & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECT.features.map((feature, index) => (
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
