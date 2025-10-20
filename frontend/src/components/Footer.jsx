import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 text-slate-400">
          {/* Company Info */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Veda.Coders Tech</h3>
            <p className="text-sm max-w-sm">
              We are a team of passionate developers and designers creating innovative solutions for a digital world.
            </p>
            <div className="flex gap-4 text-xl mt-6">
              <a className="hover:text-teal-400 transition" href="/" aria-label="GitHub">
                <FaGithub />
              </a>
              <a className="hover:text-teal-400 transition" href="/" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a className="hover:text-teal-400 transition" href="/" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a className="hover:text-teal-400 transition" href="/" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a className="hover:text-teal-400 transition" href="/" aria-label="Facebook">
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:info@4lo.ops.com" className="hover:text-teal-400 transition flex items-center gap-2">
                <Mail size={16} className="text-slate-500" />
                <span>veda.coders2025@gmail.com</span>
              </a>
              <a href="tel:+919876543210" className="hover:text-teal-400 transition flex items-center gap-2">
                <Phone size={16} className="text-slate-500" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="/projects" className="hover:text-teal-400 transition">Projects</a>
              <a href="/services" className="hover:text-teal-400 transition">Services</a>
              <a href="/about" className="hover:text-teal-400 transition">About Us</a>
              <a href="/contact" className="hover:text-teal-400 transition">Contact</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="/privacyandpolicy" className="hover:text-teal-400 transition">Privacy & Policy</a>
              <a href="/termsandconditions" className="hover:text-teal-400 transition">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4">
        <div className="max-w-6xl mx-auto px-4 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Veda.Coders Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}