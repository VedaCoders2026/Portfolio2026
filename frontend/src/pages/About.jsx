import { motion } from "framer-motion";

// Inline SVG icons
const innovationIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8L22 10h-9z" />
  </svg>
);

const reliabilityIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-8.87" />
    <path d="M12 2v10" />
    <polyline points="22 4 12 14 12 4" />
  </svg>
);

const collaborationIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 19.22H5V5.72" />
    <path d="M12 12l2 2 4-4" />
    <path d="M19 5.72v13.5h-2.5" />
    <path d="M10 12l2 2 4-4" />
  </svg>
);

const scalabilityIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const values = [
  { title: "Innovation", desc: "We always seek creative solutions.", icon: innovationIcon },
  { title: "Reliability", desc: "Software that works every time.", icon: reliabilityIcon },
  { title: "Collaboration", desc: "Teamwork drives success.", icon: collaborationIcon },
  { title: "Scalability", desc: "Products that grow with you.", icon: scalabilityIcon },
];

export default function About() {
  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-500 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600 rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold text-center leading-tight"
        >
          About{" "}
          <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
            4lo.ops Tech
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-8 text-center text-slate-300 max-w-3xl mx-auto text-lg md:text-xl"
        >
          We are a product-minded engineering team building modern web and mobile
          solutions. Our vision is to craft reliable software that feels effortless
          to use. Our mission is to turn complex problems into approachable,
          scalable products.
        </motion.p>

        {/* Our Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 bg-gray-900/70 p-10 rounded-3xl shadow-xl border border-gray-800 backdrop-blur-sm text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 border-2 border-transparent rounded-3xl bg-gradient-to-r from-teal-500/20 to-cyan-500/20"></div>
          <h3 className="text-3xl font-bold text-teal-400 mb-4">
            Our Commitment to Excellence
          </h3>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg relative z-10">
            At 4lo.ops Tech, our commitment is to provide an unparalleled experience
            for our clients. We believe in meticulous attention to detail,
            continuous improvement, and a transparent development process that
            puts you in control. We deliver not just software, but partnerships
            built on trust and a shared vision for success.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative bg-gray-800/50 p-8 rounded-3xl border border-gray-700 shadow-lg hover:shadow-cyan-500/20 transition transform hover:-translate-y-2 hover:scale-105 text-center backdrop-blur-md"
            >
              <div className="flex items-center justify-center text-cyan-400 mb-5">
                {val.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{val.title}</h3>
              <p className="text-slate-400 mt-2 text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Us CTA */}
        <div className="mt-32 text-center relative">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold mb-6"
          >
            Let's Build Something{" "}
            <span className="text-teal-400">Great Together</span>
          </motion.h3>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We are passionate about creating software that solves real-world
            problems. Get in touch with us to start your next project.
          </p>
          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mt-10 px-10 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/30 transition transform hover:-translate-y-1"
          >
            Contact Us
          </motion.a>
        </div>
      </div>
    </section>
  );
}
