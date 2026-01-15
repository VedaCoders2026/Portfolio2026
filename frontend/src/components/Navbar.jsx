import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const linkBase =
  "px-4 py-3 rounded-full text-base font-medium transition-all duration-300";
const activeClass =
  "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg";
const inactiveClass =
  "text-slate-300 hover:bg-gray-800 hover:text-white";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open (mobile UX)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

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
      transition: { type: "spring", stiffness: 260, damping: 28 },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-950/80 border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight text-white">
  Sixth<span className="text-teal-400">Syntax</span>
</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3">
          <Item to="/">Home</Item>
          <Item to="/services">Services</Item>
          <Item to="/projects">Projects</Item>
          <Item to="/skills">Skills</Item>
          <Item to="/about">About</Item>
          <Item to="/team">Team</Item>
          <Item to="/contact">Contact</Item>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-white hover:bg-gray-800"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-x-0 top-16 sm:top-20 bg-gray-950/95 backdrop-blur-xl border-t border-gray-800"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="px-4 py-6 flex flex-col gap-3">
              <Item to="/">Home</Item>
              <Item to="/services">Services</Item>
              <Item to="/projects">Projects</Item>
              <Item to="/skills">Skills</Item>
              <Item to="/about">About</Item>
              <Item to="/team">Team</Item>
              <Item to="/contact">Contact</Item>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
