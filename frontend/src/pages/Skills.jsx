import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaReact, FaNodeJs, FaDatabase, FaCloud, FaMobileAlt,
  FaClock, FaProjectDiagram, FaQuestionCircle, FaLightbulb, FaJava
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiReact } from "react-icons/si";
import { Gauge, Code, Server, Smartphone, Database, Cloud } from "lucide-react";

const SKILLS = [
  // Frontend
  {
    category: "Frontend",
    name: "React",
    desc: "Building dynamic and responsive web applications with reusable components.",
    what: "React is a JavaScript library for building interactive user interfaces efficiently.",
    why: "It allows developers to create reusable components, manage state easily, and deliver fast, responsive web apps.",
    experience: "3 years",
    projects: 12,
    icon: <FaReact className="text-cyan-400" />,
  },
  {
    category: "Frontend",
    name: "Tailwind CSS",
    desc: "Designing clean, responsive, and modern UIs quickly using utility-first styling.",
    what: "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
    why: "It simplifies styling with pre-defined classes, making designs consistent and responsive without writing custom CSS for everything.",
    experience: "2.5 years",
    projects: 15,
    icon: <SiTailwindcss className="text-teal-400" />,
  },
  {
    category: "UI/UX Design",
    name: "UI/UX Design",
    desc: "Designing intuitive user interfaces and crafting seamless user experiences.",
    what: "UI/UX design focuses on creating visually appealing interfaces and ensuring users can navigate products effortlessly.",
    why: "Good UI/UX increases user engagement, reduces friction, and drives customer satisfaction and retention.",
    experience: "4 years",
    projects: 12,
    icon: <FaLightbulb className="text-pink-400" />,
  },
  // Backend
  {
    category: "Backend",
    name: "Node.js",
    desc: "Creating server-side apps, REST APIs, and backend logic efficiently.",
    what: "Node.js is a JavaScript runtime that allows running JS code on the server.",
    why: "It enables building fast, scalable backend services using a single language (JavaScript) across frontend and backend.",
    experience: "3 years",
    projects: 10,
    icon: <FaNodeJs className="text-emerald-500" />,
  },
  {
    category: "Backend",
    name: "Express.js",
    desc: "Building RESTful APIs and server-side web applications.",
    what: "Express.js is a Node.js framework for building robust server-side apps.",
    why: "It simplifies routing, middleware, and API development, making backend development faster.",
    experience: "2.5 years",
    projects: 8,
    icon: <SiExpress className="text-slate-500" />,
  },
  {
    category: "Backend",
    name: "Java",
    desc: "Developing enterprise-grade applications with robust architecture.",
    what: "Java is a high-level, class-based programming language widely used in software development.",
    why: "It is platform-independent, object-oriented, and suitable for backend, desktop, and Android applications.",
    experience: "4 years",
    projects: 9,
    icon: <FaJava className="text-red-500" />,
  },
  // Mobile
  {
    category: "Mobile",
    name: "React Native",
    desc: "Developing cross-platform mobile applications with native performance.",
    what: "React Native lets you build mobile apps using JavaScript and React.",
    why: "Write once, deploy to both iOS and Android, with access to native device features.",
    experience: "2 years",
    projects: 6,
    icon: <SiReact className="text-cyan-400" />,
  },
  {
    category: "Mobile",
    name: "Flutter",
    desc: "Developing cross-platform mobile apps with smooth UI and animations.",
    what: "Flutter is Google’s UI toolkit for building natively compiled apps for mobile, web, and desktop from a single codebase.",
    why: "It enables creating beautiful, fast, and responsive apps across platforms without maintaining separate codebases.",
    experience: "2 years",
    projects: 5,
    icon: <FaMobileAlt className="text-indigo-400" />,
  },
  // Database
  {
    category: "Database",
    name: "MongoDB",
    desc: "Storing and managing unstructured data with a flexible NoSQL database.",
    what: "MongoDB is a document-oriented NoSQL database.",
    why: "It allows scalable storage, flexible schema design, and easy integration with Node.js applications.",
    experience: "2.5 years",
    projects: 7,
    icon: <SiMongodb className="text-green-600" />,
  },
  {
    category: "Database",
    name: "MySQL/Postgres",
    desc: "Designing databases, writing queries, and optimizing performance.",
    what: "These are relational database management systems used to store and manage structured data.",
    why: "They ensure data integrity, allow complex queries, and support scalable applications that rely on organized data storage.",
    experience: "3 years",
    projects: 8,
    icon: <FaDatabase className="text-orange-500" />,
  },
  // DevOps / Cloud
  {
    category: "Cloud",
    name: "AWS/Cloud",
    desc: "Deploying applications and managing cloud infrastructure.",
    what: "AWS (Amazon Web Services) provides cloud computing services for hosting, storage, and server management.",
    why: "Cloud platforms make apps scalable, reliable, and cost-efficient without managing physical servers.",
    experience: "2 years",
    projects: 6,
    icon: <FaCloud className="text-purple-500" />,
  },
  {
    category: "Hosting & Cloud",
    name: "Hostinger",
    desc: "Managing web hosting, deploying websites, and configuring server settings.",
    what: "Hostinger is a web hosting platform that provides shared hosting, VPS, and cloud hosting solutions for websites and applications.",
    why: "Reliable hosting ensures websites are fast, secure, and accessible, which is essential for business growth and user experience.",
    experience: "2 years",
    projects: 15,
    icon: <FaCloud className="text-blue-500" />,
  },
];

const categoryIcons = {
  Frontend: <Code size={18} className="text-teal-400" />,
  Backend: <Server size={18} className="text-teal-400" />,
  Mobile: <Smartphone size={18} className="text-teal-400" />,
  Database: <Database size={18} className="text-teal-400" />,
  Cloud: <Cloud size={18} className="text-teal-400" />,
  "UI/UX Design": <Gauge size={18} className="text-teal-400" />,
};

export default function Skills() {
  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white min-h-screen py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-14"
        >
          Our <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SKILLS.map((s, i) => (
            <SkillCard key={s.name} skill={s} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, delay }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay }}
      className="relative bg-gray-900/80 border border-gray-800 rounded-3xl p-6 shadow-2xl backdrop-blur-md hover:border-teal-500/50 transition cursor-pointer group"
    >
      {/* Category */}
      <div className="flex items-center gap-2 mb-5">
        {categoryIcons[skill.category]}
        <span className="text-xs uppercase font-bold text-teal-400 tracking-wider">{skill.category}</span>
      </div>

      {/* Main */}
      <div className="flex items-center gap-4 mb-4">
        <motion.div
          whileHover={{ rotate: 12, scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-12 h-12 flex items-center justify-center text-3xl"
        >
          {skill.icon}
        </motion.div>
        <h3 className="text-xl font-bold">{skill.name}</h3>
      </div>

      <p className="text-slate-400 text-sm mb-5">{skill.desc}</p>

      {/* Stats */}
      <div className="flex items-center gap-3 text-xs mb-6 flex-wrap">
        <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 flex items-center gap-1">
          <FaClock className="w-3 h-3" /> {skill.experience}
        </span>
        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 flex items-center gap-1">
          <FaProjectDiagram className="w-3 h-3" /> {skill.projects} Projects
        </span>
      </div>

      {/* Learn More */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-2 border-t border-gray-800 text-sm font-medium flex justify-between items-center hover:text-teal-400 transition-colors"
      >
        Learn more
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="pt-4 space-y-4 text-sm text-slate-400"
          >
            <div className="flex gap-2 items-start">
              <FaQuestionCircle className="text-blue-400 mt-1 w-4 h-4" />
              <div>
                <span className="font-semibold text-slate-200">What is it?</span>
                <p>{skill.what}</p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <FaLightbulb className="text-yellow-400 mt-1 w-4 h-4" />
              <div>
                <span className="font-semibold text-slate-200">Why is it important?</span>
                <p>{skill.why}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
