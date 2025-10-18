import Arjun from '../TeamImg/Arjun.jpg';
import Aman from '../TeamImg/Aman.jpg';
import Riken from '../TeamImg/Riken.jpg';
import Dilip from '../TeamImg/Dilip.png';
import { Linkedin, Github, Instagram } from "lucide-react";

const TEAM = [
  { name: "Dilip Singh", role: "Managing Director", subRole: "Innovation & Development", img: Dilip },
  { name: "Aman Gupta", role: "Managing Director", subRole: "Technology & Infrastructure", img: Aman },
  { name: "Arjun Sheth", role: "Managing Director", subRole: "Business Strategy & Operations", img: Arjun },
  { name: "Riken Bhat", role: "Managing Director", subRole: "Finance & Compliance", img: Riken },
  { name: "Mohzzam Khan", role: "Equity Partner", subRole: "Head of Brand & Social Media", img: "/images/t4.jpg" },
  { name: "Yugal Guru", role: "Equity Partner", subRole: "Software Developer", img: "/images/t4.jpg" },
];

export default function Team() {
  return (
    <section className="bg-gray-950 text-white min-h-screen py-20 relative">
      {/* Subtle background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-gray-950 to-black pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          Meet Our <span className="text-teal-400">Team</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="relative w-full max-w-xs rounded-3xl overflow-hidden bg-gray-900/70 backdrop-blur-md border border-gray-800 shadow-lg group 
              transform transition duration-500 hover:-translate-y-2 hover:shadow-teal-500/20"
            >
              {/* Profile Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-t-3xl transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-90 transition duration-700" />
              </div>

              {/* Member Info */}
              <div className="relative p-6 text-center">
                <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-slate-400 mt-1 text-sm">
                  {member.role}<br/>
                  {member.subRole}
                </p>
              </div>

              {/* Floating Social Links */}
              <div
                className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 
                group-hover:opacity-100 transition duration-500 ease-out"
              >
                <a
                  href="/"
                  aria-label={`${member.name}'s LinkedIn`}
                  className="p-2 rounded-full bg-gray-800/80 text-slate-300 hover:text-teal-400 hover:bg-gray-700 transition"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="/"
                  aria-label={`${member.name}'s GitHub`}
                  className="p-2 rounded-full bg-gray-800/80 text-slate-300 hover:text-teal-400 hover:bg-gray-700 transition"
                >
                  <Github size={20} />
                </a>
                <a
                  href="/"
                  aria-label={`${member.name}'s Instagram`}
                  className="p-2 rounded-full bg-gray-800/80 text-slate-300 hover:text-teal-400 hover:bg-gray-700 transition"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
