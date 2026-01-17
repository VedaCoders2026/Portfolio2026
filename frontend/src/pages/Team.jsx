import Arjun from "../TeamImg/Arjun.jpg";
import Aman from "../TeamImg/Aman.jpg";
import Riken from "../TeamImg/Riken.jpg";
import Dilip from "../TeamImg/Dilip.png";
import Moh from "../TeamImg/Mohzzam.png";
import { Linkedin, Github, Instagram } from "lucide-react";

const TEAM = [
  {
    name: "Dilip Singh",
    role: "Managing Director",
    subRole: "Innovation & Development",
    img: Dilip,
    socials: {
      linkedin: "https://www.linkedin.com/in/dilipsingh004",
      github: "https://github.com/DilipSingh004",
      instagram: "https://www.instagram.com/dsingh004",
    },
  },
  {
    name: "Aman Gupta",
    role: "Managing Director",
    subRole: "Technology & Infrastructure",
    img: Aman,
    socials: {
      linkedin: "https://www.linkedin.com/in/aman-gupta",
      github: "https://github.com/aman-gupta",
      instagram: "https://instagram.com/aman.gupta",
    },
  },
  {
    name: "Arjun Sheth",
    role: "Managing Director",
    subRole: "Business Strategy & Operations",
    img: Arjun,
    socials: {
      linkedin: "https://www.linkedin.com/in/arjun-sheth-b98712167",
      github: "https://github.com/adsheth95",
      instagram: "",
    },
  },
  {
    name: "Riken Bhatt",
    role: "Managing Director",
    subRole: "Finance & Compliance",
    img: Riken,
    socials: {
      linkedin: "https://www.linkedin.com/in/riken-bhatt",
      github: "",
      instagram: "",
    },
  },
  {
    name: "Mohzzam Khan",
    role: "Equity Partner",
    subRole: "Head of Brand & Social Media",
    img: Moh,
    socials: {
      linkedin: "",
      github: "https://github.com/Mohzzam-khan",
      instagram: "https://www.instagram.com/mohzzamkhan",
    },
  },
  {
    name: "Yugal Guru",
    role: "Equity Partner",
    subRole: "Software Developer",
    img: "/images/t4.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/yugal-guru",
      github: "https://github.com/yugal-guru",
      instagram: "",
    },
  },
];

export default function Team() {
  return (
    <section className="bg-gray-950 text-white min-h-screen py-20 relative">
      {/* Background glow */}
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
              transition duration-500 hover:-translate-y-2 hover:shadow-teal-500/20"
            >
              {/* Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-t-3xl transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-90 transition duration-700" />
              </div>

              {/* Info */}
              <div className="relative p-6 text-center">
                <h3 className="text-lg font-bold group-hover:text-teal-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-slate-400 mt-1 text-sm">
                  {member.role}
                  <br />
                  {member.subRole}
                </p>
              </div>

              {/* Social Links */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-500">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 text-slate-300 hover:text-teal-400 transition"
                  >
                    <Linkedin size={20} />
                  </a>
                )}

                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} GitHub`}
                    className="p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 text-slate-300 hover:text-teal-400 transition"
                  >
                    <Github size={20} />
                  </a>
                )}

                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Instagram`}
                    className="p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 text-slate-300 hover:text-teal-400 transition"
                  >
                    <Instagram size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
