import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCloud, FaMobileAlt, FaClock, FaProjectDiagram, FaQuestionCircle, FaLightbulb, FaJava } from "react-icons/fa";
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
  Frontend: <Code size={20} className="text-teal-400" />,
  Backend: <Server size={20} className="text-teal-400" />,
  Mobile: <Smartphone size={20} className="text-teal-400" />,
  Database: <Database size={20} className="text-teal-400" />,
  Cloud: <Cloud size={20} className="text-teal-400" />,
  "UI/UX Design": <Gauge size={20} className="text-teal-400" />,
  "Hosting & Cloud": <Cloud size={20} className="text-teal-400" />,
};

export default function Skills() {
  return (
    <section className="bg-gray-950 text-white min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
          Our <span className="text-teal-400">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.name}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-xl overflow-hidden will-change-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-4">
                {categoryIcons[s.category]}
                <span className="text-sm uppercase font-semibold text-teal-400">
                  {s.category}
                </span>
              </div>

              {/* Main Skill Info */}
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-10 h-10 flex items-center justify-center text-3xl"
                >
                  {s.icon}
                </motion.div>
                <h3 className="font-bold text-xl text-white">{s.name}</h3>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm mb-4">{s.desc}</p>

              {/* Experience & Projects */}
              <div className="flex items-center flex-wrap gap-4 text-slate-400 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <FaClock className="w-4 h-4 text-orange-400" />{" "}
                  <span>{s.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaProjectDiagram className="w-4 h-4 text-green-400" />{" "}
                  <span>{s.projects} Projects</span>
                </div>
              </div>

              {/* Accordion-like details */}
              <details className="group">
                <summary className="cursor-pointer font-medium text-slate-300 text-sm list-none flex items-center justify-between py-2 border-t border-gray-800 hover:text-teal-400 transition-colors duration-300">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </summary>
                <div className="space-y-4 pt-4 text-sm text-slate-400">
                  <div className="flex items-start gap-2">
                    <FaQuestionCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-300">What is it?</span>
                      <p>{s.what}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaLightbulb className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-300">Why is it important?</span>
                      <p>{s.why}</p>
                    </div>
                  </div>
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}