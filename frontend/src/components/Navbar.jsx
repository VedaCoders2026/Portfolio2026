import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../img/logos.png";
import { motion, AnimatePresence } from "framer-motion";

const linkBase =
  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300";
const activeClass =
  "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg";
const inactiveClass =
  "text-slate-300 hover:bg-gray-800 hover:text-white";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Close the menu on route change
    setOpen(false);
  }, [pathname]);

  const Item = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${linkBase} ${isActive ? activeClass : inactiveClass}`
      }
    >
      {children}
    </NavLink>
  );

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    },
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-950/70 border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="font-bold text-2xl text-white flex items-center gap-2">
          <img src={logo} alt="4lo.ops Tech Logo" className="h-10 w-auto" />
          <span className="hidden sm:block">
            Veda.<span className="text-teal-400">Coders</span>
          </span>
        </div>

        <div className="hidden md:flex gap-4">
          <Item to="/">Home</Item>
          <Item to="/about">About</Item>
          <Item to="/projects">Projects</Item>
          <Item to="/skills">Skills</Item>
          <Item to="/team">Team</Item>
          <Item to="/contact">Contact</Item>
        </div>

        <button
          className="md:hidden p-2 text-white transition-all duration-300"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden border-t border-gray-800 bg-gray-950/90 backdrop-blur-md"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
              <Item to="/">Home</Item>
              <Item to="/about">About</Item>
              <Item to="/projects">Projects</Item>
              <Item to="/skills">Skills</Item>
              <Item to="/team">Team</Item>
              <Item to="/contact">Contact</Item>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}