import { motion } from "framer-motion";

const innovationIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13 2L3 14h9l-1 8L22 10h-9z" />
  </svg>
);

const reliabilityIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-8.87" />
    <path d="M12 2v10" />
    <polyline points="22 4 12 14 12 4" />
  </svg>
);

const collaborationIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 19.22H5V5.72" />
    <path d="M12 12l2 2 4-4" />
    <path d="M19 5.72v13.5h-2.5" />
  </svg>
);

const scalabilityIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const values = [
  {
    title: "Innovation",
    desc: "We always seek creative solutions.",
    icon: innovationIcon,
  },
  {
    title: "Reliability",
    desc: "Software that works every time.",
    icon: reliabilityIcon,
  },
  {
    title: "Collaboration",
    desc: "Teamwork drives success.",
    icon: collaborationIcon,
  },
  {
    title: "Scalability",
    desc: "Products that grow with you.",
    icon: scalabilityIcon,
  },
];
export default function About() {
  return (
    <section className="relative bg-[#0B0E14] text-white overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-teal-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px]" />

      {/* Intro */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Who We Are at{" "}
            <span className="text-teal-400">SixthSyntax Tech</span>
          </h1>

          <p className="mt-6 text-lg text-slate-400">
            We build scalable, high-performance digital products focused on
            clarity, reliability, and long-term growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10"
        >
          <h3 className="text-2xl font-semibold text-teal-400 mb-4">
            Our Mission
          </h3>
          <p className="text-slate-300">
            To engineer dependable software that empowers businesses and scales
            effortlessly with their vision.
          </p>
        </motion.div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Our Core Values
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-10">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400">
                {val.icon}
              </div>
              <h3 className="text-xl font-semibold">{val.title}</h3>
              <p className="text-slate-400 text-sm mt-2">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="pb-32 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Something{" "}
          <span className="text-teal-400">Exceptional</span>
        </h2>
        <p className="text-slate-300 mb-10">
          Ready to start your next project with us?
        </p>
        <a
          href="/contact"
          className="inline-block px-12 py-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 font-semibold shadow-lg hover:shadow-cyan-500/30 transition transform hover:-translate-y-1"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
