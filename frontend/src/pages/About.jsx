import { motion } from "framer-motion";
import { FiZap, FiCheckCircle, FiUsers, FiTrendingUp } from "react-icons/fi";

const values = [
  { title: "Innovation", desc: "We always seek creative solutions.", icon: <FiZap size={28} /> },
  { title: "Reliability", desc: "Software that works every time.", icon: <FiCheckCircle size={28} /> },
  { title: "Collaboration", desc: "Teamwork drives success.", icon: <FiUsers size={28} /> },
  { title: "Scalability", desc: "Products that grow with you.", icon: <FiTrendingUp size={28} /> },
];

const team = [
  { name: "Dilip Singh", role: "Founder & CEO", img: "/images/team-1.jpg" },
  { name: "Arjun Shetn", role: "Founder & CEO", img: "/images/team-2.jpg" },
  { name: "Aman Gupta", role: "Founder & CEO", img: "/images/team-1.jpg" },
  { name: "Riken Bhatt", role: "Founder & CEO", img: "/images/team-2.jpg" },
];

export default function About() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center"
      >
        About 4lo.ops Tech
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-center text-gray-700 max-w-3xl mx-auto text-lg md:text-xl"
      >
        We are a product-minded engineering team building modern web and mobile solutions. 
        Our vision is to craft reliable software that feels effortless to use. Our mission
        is to turn complex problems into approachable, scalable products.
      </motion.p>

      {/* Dynamic Image Grid */}
      <div className="relative mt-12 grid md:grid-cols-2 gap-6">
        {["/images/about-1.jpg", "/images/about-2.jpg"].map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="overflow-hidden rounded-3xl shadow-xl border"
          >
            <img
              src={src}
              alt={`About ${i + 1}`}
              className="w-full h-80 md:h-96 object-cover transform transition-transform hover:scale-105"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </motion.div>
        ))}
      </div>

      {/* Core Values */}
      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((val, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-gradient-to-tr from-white to-gray-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transform transition hover:-translate-y-1 hover:scale-105 text-center"
          >
            <div className="flex items-center justify-center text-indigo-600 mb-4">
              {val.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{val.title}</h3>
            <p className="text-gray-600 text-sm">{val.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Team Members */}
      <div className="mt-24">
        <h3 className="text-3xl font-bold mb-8 text-center">Meet the Team</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-6 bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-indigo-100 shadow-soft">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
