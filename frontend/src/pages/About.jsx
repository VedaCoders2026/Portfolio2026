import { motion } from "framer-motion";

// Inline SVG icons to replace the external react-icons library
const innovationIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8L22 10h-9z" />
  </svg>
);

const reliabilityIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-8.87" />
    <path d="M12 2v10" />
    <polyline points="22 4 12 14 12 4" />
  </svg>
);

const collaborationIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 19.22H5V5.72" />
    <path d="M12 12l2 2 4-4" />
    <path d="M19 5.72v13.5h-2.5" />
    <path d="M10 12l2 2 4-4" />
  </svg>
);

const scalabilityIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    <section className="relative bg-gray-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white text-center"
        >
          About <span className="text-teal-400">4lo.ops Tech</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-center text-slate-300 max-w-3xl mx-auto text-lg md:text-xl"
        >
          We are a product-minded engineering team building modern web and mobile solutions.
          Our vision is to craft reliable software that feels effortless to use. Our mission
          is to turn complex problems into approachable, scalable products.
        </motion.p>

        {/* Our Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-800 text-center"
        >
          <h3 className="text-3xl font-bold text-teal-400 mb-4">Our Commitment to Excellence</h3>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            At 4lo.ops Tech, our commitment is to provide an unparalleled experience for our clients. We believe in meticulous attention to detail, continuous improvement, and a transparent development process that puts you in control. We are dedicated to delivering not just software, but a partnership built on trust and a shared vision for success.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-3xl border border-gray-700 shadow-lg hover:shadow-2xl transform transition hover:-translate-y-1 hover:scale-105 text-center"
            >
              <div className="flex items-center justify-center text-cyan-400 mb-4">
                {val.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{val.title}</h3>
              <p className="text-slate-400 text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Us */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">Let's Build Something Great Together</h3>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We are passionate about creating software that solves real-world problems. Get in touch with us to start your next project.
          </p>
          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mt-8 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:from-teal-600 hover:to-cyan-600 transition transform hover:-translate-y-1"
          >
            Contact Us
          </motion.a>
        </div>
      </div>
    </section>
  );
}