import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCloud, FaMobileAlt, FaClock, FaProjectDiagram, FaQuestionCircle, FaLightbulb, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiReact } from "react-icons/si";

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
    icon: <FaReact className="text-blue-500 w-6 h-6" />,
  },
  {
    category: "Frontend",
    name: "Tailwind CSS",
    desc: "Designing clean, responsive, and modern UIs quickly using utility-first styling.",
    what: "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
    why: "It simplifies styling with pre-defined classes, making designs consistent and responsive without writing custom CSS for everything.",
    experience: "2.5 years",
    projects: 15,
    icon: <SiTailwindcss className="text-teal-500 w-6 h-6" />,
  },
  {
  category: "UI/UX Design",
  name: "UI/UX Design",
  desc: "Designing intuitive user interfaces and crafting seamless user experiences.",
  what: "UI/UX design focuses on creating visually appealing interfaces and ensuring users can navigate products effortlessly.",
  why: "Good UI/UX increases user engagement, reduces friction, and drives customer satisfaction and retention.",
  experience: "4 years",
  projects: 12,
  icon: <FaLightbulb className="text-pink-500 w-6 h-6" />,
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
    icon: <FaNodeJs className="text-green-600 w-6 h-6" />,
  },
  {
    category: "Backend",
    name: "Express.js",
    desc: "Building RESTful APIs and server-side web applications.",
    what: "Express.js is a Node.js framework for building robust server-side apps.",
    why: "It simplifies routing, middleware, and API development, making backend development faster.",
    experience: "2.5 years",
    projects: 8,
    icon: <SiExpress className="text-gray-800 w-6 h-6" />,
  },
  {
    category: "Backend",
    name: "Java",
    desc: "Developing enterprise-grade applications with robust architecture.",
    what: "Java is a high-level, class-based programming language widely used in software development.",
    why: "It is platform-independent, object-oriented, and suitable for backend, desktop, and Android applications.",
    experience: "4 years",
    projects: 9,
    icon: <FaJava className="text-red-500 w-6 h-6" />,
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
    icon: <SiReact className="text-cyan-500 w-6 h-6" />,
  },
  {
    category: "Mobile",
    name: "Flutter",
    desc: "Developing cross-platform mobile apps with smooth UI and animations.",
    what: "Flutter is Google’s UI toolkit for building natively compiled apps for mobile, web, and desktop from a single codebase.",
    why: "It enables creating beautiful, fast, and responsive apps across platforms without maintaining separate codebases.",
    experience: "2 years",
    projects: 5,
    icon: <FaMobileAlt className="text-indigo-500 w-6 h-6" />,
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
    icon: <SiMongodb className="text-green-700 w-6 h-6" />,
  },
  {
    category: "Database",
    name: "MySQL/Postgres",
    desc: "Designing databases, writing queries, and optimizing performance.",
    what: "These are relational database management systems used to store and manage structured data.",
    why: "They ensure data integrity, allow complex queries, and support scalable applications that rely on organized data storage.",
    experience: "3 years",
    projects: 8,
    icon: <FaDatabase className="text-orange-500 w-6 h-6" />,
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
    icon: <FaCloud className="text-purple-500 w-6 h-6" />,
  },
  {
  category: "Hosting & Cloud",
  name: "Hostinger",
  desc: "Managing web hosting, deploying websites, and configuring server settings.",
  what: "Hostinger is a web hosting platform that provides shared hosting, VPS, and cloud hosting solutions for websites and applications.",
  why: "Reliable hosting ensures websites are fast, secure, and accessible, which is essential for business growth and user experience.",
  experience: "2 years",
  projects: 15,
  icon: <FaCloud className="text-blue-500 w-6 h-6" />,
},
];

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        My Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            className="bg-white border border-gray-200 rounded-3xl p-6 shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {/* Category Badge */}
            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
              {s.category}
            </span>

            {/* Header: Icon + Name */}
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {s.icon}
              </motion.div>
              <h3 className="font-semibold text-lg text-gray-800">{s.name}</h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">{s.desc}</p>

            {/* Experience & Projects */}
            <div className="flex gap-4 mb-4">
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <FaClock className="w-4 h-4" /> <span>{s.experience}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <FaProjectDiagram className="w-4 h-4" /> <span>{s.projects} Projects</span>
              </div>
            </div>

            {/* What is it */}
            <div className="flex items-start gap-2 mb-2">
              <FaQuestionCircle className="text-gray-700 w-4 h-4 mt-1" />
              <div>
                <span className="font-medium text-gray-800 text-sm">What is it?</span>
                <p className="text-gray-600 text-sm">{s.what}</p>
              </div>
            </div>

            {/* Why do we need it */}
            <div className="flex items-start gap-2">
              <FaLightbulb className="text-gray-700 w-4 h-4 mt-1" />
              <div>
                <span className="font-medium text-gray-800 text-sm">Why do we need it?</span>
                <p className="text-gray-600 text-sm">{s.why}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden mt-4">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-md"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
