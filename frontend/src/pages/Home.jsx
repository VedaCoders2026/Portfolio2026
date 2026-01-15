// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";
// import {
//   Code2,
//   Palette,
//   Rocket,
//   Layers,
//   Zap,
//   Shield,
//   ShieldCheck,
// } from "lucide-react";

// // Animated Counter Component (replays on scroll)
// function Counter({ target, label }) {
//   const [count, setCount] = useState(0);
//   const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

//   useEffect(() => {
//     if (inView) {
//       let start = 0;
//       const duration = 2000; // 2s
//       const step = Math.ceil(target / (duration / 16));

//       const interval = setInterval(() => {
//         start += step;
//         if (start >= target) {
//           start = target;
//           clearInterval(interval);
//         }
//         setCount(start);
//       }, 16);

//       return () => clearInterval(interval);
//     } else {
//       setCount(0); // reset when out of view
//     }
//   }, [inView, target]);

//   return (
//     <div ref={ref} className="flex flex-col items-center">
//       <span className="text-5xl font-extrabold bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent drop-shadow-lg">
//         {count}+
//       </span>
//       <span className="text-slate-400 mt-2 text-lg">{label}</span>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
//       {/* Hero Section */}
//       <div className="max-w-7xl mx-auto px-6 pt-32 pb-40 text-center relative z-10">
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-5xl md:text-7xl font-extrabold leading-tight"
//         >
//           Building the Future with{" "}
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-sky-600">
//             SixthSyntax Tech
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.7 }}
//           className="mt-8 text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto"
//         >
//           We transform <span className="font-semibold text-white">ideas into digital reality</span> — delivering world-class{" "}
//           <span className="text-teal-400">Websites, Applications, and Software</span> with speed, scalability, and elegance.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.7 }}
//           className="mt-12 flex justify-center gap-6"
//         >
//           <Link
//             to="/projects"
//             className="px-8 py-4 rounded-xl text-white font-semibold text-lg bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-transform"
//           >
//             🚀 View Projects
//           </Link>
//           <a
//             href="#why-us"
//             className="px-8 py-4 rounded-xl text-lg font-semibold border border-gray-600 text-slate-300 hover:text-white hover:border-teal-400 transition"
//           >
//             <ShieldCheck size={28} />Why Choose Us?
//           </a>
//         </motion.div>
//       </div>

//       {/* Floating Gradient Orbs */}
//       <div className="absolute -top-40 -left-32 w-96 h-96 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//       <div className="absolute top-40 -right-40 w-[28rem] h-[28rem] bg-gradient-to-r from-cyan-500 to-sky-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

//       {/* Why Us Section */}
//       <div id="why-us" className="relative max-w-7xl mx-auto px-6 pb-32 z-10">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl md:text-5xl font-bold text-center mb-20"
//         >
//           Why <span className="text-teal-400">Choose Us?</span>
//         </motion.h2>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.7 }}
//           className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
//         >
//           {[
//             { icon: <Code2 className="w-10 h-10 text-teal-400" />, t: "Full-stack Expertise", d: "React, Node.js, Flutter, cloud & CI/CD pipelines for modern apps." },
//             { icon: <Palette className="w-10 h-10 text-cyan-400" />, t: "Design + Performance", d: "Beautiful, accessible, and blazing-fast digital experiences." },
//             { icon: <Rocket className="w-10 h-10 text-sky-400" />, t: "Delivery Focused", d: "Agile sprints, transparent communication, and on-time results." },
//             { icon: <Layers className="w-10 h-10 text-teal-500" />, t: "Scalable Solutions", d: "From startups to enterprises, we build software that grows with you." },
//             { icon: <Zap className="w-10 h-10 text-yellow-300" />, t: "Cutting-edge Tech", d: "We leverage AI, automation, and modern frameworks to stay ahead." },
//             { icon: <Shield className="w-10 h-10 text-green-400" />, t: "Secure & Reliable", d: "Your data and systems are protected with best security practices." },
//           ].map((c) => (
//             <div
//               key={c.t}
//               className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-10 border border-gray-700 hover:border-teal-500 shadow-md hover:shadow-lg transition group"
//             >
//               <div className="mb-5">{c.icon}</div>
//               <h3 className="font-semibold text-xl group-hover:text-teal-400 transition">
//                 {c.t}
//               </h3>
//               <p className="text-slate-400 mt-3">{c.d}</p>
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Stats Section */}
//       <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700 py-24">
//         <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
//           <Counter target={2} label="Projects Delivered" />
//           <Counter target={6} label="Team Members" />
//           <Counter target={2} label="Years of Experience" />
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Palette,
  Rocket,
  Layers,
  Zap,
  Shield,
  ShieldCheck,
} from "lucide-react";

function Counter({ target, label }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / 2000, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span
        aria-live="polite"
        className="text-5xl font-extrabold bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent drop-shadow-lg"
      >
        {count}+
      </span>
      <span className="text-slate-400 mt-2 text-lg">{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-40 text-center relative z-10">
        <motion.h1
          role="heading"
          aria-level="1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Building the Future with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-sky-600">
            SixthSyntax Tech
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-8 text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto"
        >
          We transform{" "}
          <span className="font-semibold text-white">ideas into digital reality</span>{" "}
          — delivering world-class{" "}
          <span className="text-teal-400">
            Websites, Applications, and Software
          </span>{" "}
          with speed, scalability, and elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-12 flex justify-center gap-6 flex-wrap"
        >
          <Link
            to="/projects"
            className="px-8 py-4 rounded-xl text-white font-semibold text-lg
                       bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg
                       hover:shadow-cyan-500/30 hover:scale-105 transition-transform"
          >
            🚀 View Projects
          </Link>

          <a
            href="#why-us"
            className="px-8 py-4 rounded-xl text-lg font-semibold
                       border border-gray-600 text-slate-300
                       hover:text-white hover:border-teal-400
                       transition flex items-center gap-2"
          >
            <ShieldCheck size={22} />
            Why Choose Us?
          </a>
        </motion.div>
      </div>
      <div className="absolute -top-40 -left-32 w-96 h-96 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 -right-40 w-[28rem] h-[28rem] bg-gradient-to-r from-cyan-500 to-sky-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div id="why-us" className="relative max-w-7xl mx-auto px-6 pb-32 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        >
          Why <span className="text-teal-400">Choose Us?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {[
            {
              icon: <Code2 className="w-10 h-10 text-teal-400" />,
              t: "Full-stack Expertise",
              d: "React, Node.js, Flutter, cloud & CI/CD pipelines for modern apps.",
            },
            {
              icon: <Palette className="w-10 h-10 text-cyan-400" />,
              t: "Design + Performance",
              d: "Beautiful, accessible, and blazing-fast digital experiences.",
            },
            {
              icon: <Rocket className="w-10 h-10 text-sky-400" />,
              t: "Delivery Focused",
              d: "Agile sprints, transparent communication, and on-time results.",
            },
            {
              icon: <Layers className="w-10 h-10 text-teal-500" />,
              t: "Scalable Solutions",
              d: "From startups to enterprises, we build software that grows with you.",
            },
            {
              icon: <Zap className="w-10 h-10 text-yellow-300" />,
              t: "Cutting-edge Tech",
              d: "We leverage AI, automation, and modern frameworks to stay ahead.",
            },
            {
              icon: <Shield className="w-10 h-10 text-green-400" />,
              t: "Secure & Reliable",
              d: "Your data and systems are protected with best security practices.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-10
                         border border-gray-700 hover:border-teal-500
                         shadow-md hover:shadow-teal-500/20
                         hover:-translate-y-1
                         transition-all duration-300 group"
            >
              <div className="mb-5">{c.icon}</div>
              <h3 className="font-semibold text-xl group-hover:text-teal-400 transition">
                {c.t}
              </h3>
              <p className="text-slate-400 mt-3">{c.d}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700 py-24">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
          <Counter target={2} label="Projects Delivered" />
          <Counter target={6} label="Core Team Members" />
          <Counter target={2} label="Years of Experience" />
        </div>
      </div>
    </section>
  );
}
