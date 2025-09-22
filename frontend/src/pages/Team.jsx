import { motion } from "framer-motion";
import Arjun from '../TeamImg/Arjun.jpg';
import Aman from '../TeamImg/Aman.jpg';
import Riken from '../TeamImg/Riken.png';
import { Linkedin, Github, Twitter } from "lucide-react";

const TEAM = [
  { name: "Dilip Singh", role: "Front-end Engineer", img: "/images/t1.jpg" },
  { name: "Aman Gupta", role: "Back-end Engineer", img: Aman },
  { name: "Arjun Sheth", role: "Mobile App Developer", img: Arjun},
  { name: "Riken Bhat", role: "UI/UX Designer", img: Riken },
  { name: "Mohzzam Khan", role: "UI/UX Designer", img: "/images/t4.jpg" },
];

export default function Team() {
  return (
    <section className="bg-gray-950 text-white min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
          Our <span className="text-teal-400">Team</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.name}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="group relative rounded-3xl overflow-hidden bg-gray-900 shadow-xl border border-gray-800 will-change-transform"
            >
              {/* Image with enhanced overlay */}
              <div className="relative h-72 w-full">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl" />
              </div>

              {/* Content and Social Links */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-slate-400 mt-1 text-sm">{member.role}</p>
                
                {/* Social Links on hover */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-6 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <a href="/" aria-label={`${member.name}'s LinkedIn`} className="p-2 text-slate-400 hover:text-white transition">
                    <Linkedin size={20} />
                  </a>
                  <a href="/" aria-label={`${member.name}'s GitHub`} className="p-2 text-slate-400 hover:text-white transition">
                    <Github size={20} />
                  </a>
                  <a href="/" aria-label={`${member.name}'s Twitter`} className="p-2 text-slate-400 hover:text-white transition">
                    <Twitter size={20} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}