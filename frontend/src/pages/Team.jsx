import { motion } from "framer-motion";
import Arjun from '../TeamImg/Arjun.jpg';
import Aman from '../TeamImg/Aman.jpg';
import Riken from '../TeamImg/Riken.png';

const TEAM = [
  { name: "Dilip Singh", role: "Front-end Engineer", img: "/images/t1.jpg" },
  { name: "Aman Gupta", role: "Back-end Engineer", img: Aman },
  { name: "Arjun Sheth", role: "Mobile App Developer", img: Arjun},
  { name: "Riken Bhat", role: "UI/UX Designer", img: Riken },
  { name: "Mohzzam Khan", role: "UI/UX Designer", img: "/images/t4.jpg" },
];

export default function Team() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Team</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {TEAM.map(member => (
          <motion.div
            key={member.name}
            whileHover={{ scale: 1.05 }}
            className="group relative rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200 transition-all duration-300"
          >
            {/* Image with overlay */}
            <div className="relative h-72 w-full">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
                onError={(e)=>{ e.currentTarget.style.display='none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">{member.name}</h3>
              <p className="text-gray-500 mt-1">{member.role}</p>
            </div>

            {/* Optional icon / social links */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="/" className="text-gray-400 hover:text-indigo-600"><i className="fab fa-linkedin"></i></a>
              <a href="/" className="text-gray-400 hover:text-indigo-600"><i className="fab fa-github"></i></a>
              <a href="/" className="text-gray-400 hover:text-indigo-600"><i className="fab fa-twitter"></i></a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
