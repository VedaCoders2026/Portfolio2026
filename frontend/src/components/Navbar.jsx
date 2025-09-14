import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../img/logos.png";

const linkBase =
  "px-3 py-2 rounded-md text-sm font-medium transition hover:bg-white/70 hover:shadow";
const active =
  "bg-white text-slate-900 shadow";
const inactive =
  "text-slate-700";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);

  const Item = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${linkBase} ${isActive ? active : inactive}`
      }
    >
      {children}
    </NavLink>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-transparent border-b border-white/60">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-lg">4lo.ops <span className="text-indigo-600">Tech</span></div>
         
        <div className="hidden md:flex gap-2">
          <Item to="/">Home</Item>
          <Item to="/about">About</Item>
          <Item to="/projects">Projects</Item>
          <Item to="/skills">Skills</Item>
          <Item to="/team">Team</Item>
          <Item to="/contact">Contact</Item>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(v => !v)}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white/80 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            <Item to="/">Home</Item>
            <Item to="/about">About</Item>
            <Item to="/projects">Projects</Item>
            <Item to="/skills">Skills</Item>
            <Item to="/team">Team</Item>
            <Item to="/contact">Contact</Item>
          </div>
        </div>
      )}
    </header>
  );
}
