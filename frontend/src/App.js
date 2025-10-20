import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  Services from "./pages/Services";
import CustomWebDevelopment from "./ProjectDetails/Webdevelopment";
import MobileDevelopment from "./ProjectDetails/MobileApplications";
import SoftwareDevelopment from "./ProjectDetails/SoftwareDevelopment";
import UXDesign from "./ProjectDetails/UXDesign";


const pageVariants = {
  initial: { opacity: 0, y: 12 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -12 },
};

const Page = ({ children }) => (
  <motion.main
    className="min-h-[calc(100vh-72px)]"
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={{ duration: 0.35, ease: "easeInOut" }}
  >
    {children}
  </motion.main>
);

export default function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 bg-radial-fade">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 min-h-screen text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="/projects" element={<Page><Projects /></Page>} />
          <Route path="/projects/:id" element={<Page><ProjectDetail /></Page>} />
          <Route path="/skills" element={<Page><Skills /></Page>} />
          <Route path="/team" element={<Page><Team /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
          <Route path="/services" element={<Page><Services /></Page>} />
          <Route path="/webdevelopment" element={<Page><CustomWebDevelopment /></Page>} />
          <Route path="/mobiledevelopment" element={<Page><MobileDevelopment /></Page>} />
          <Route path="/softwaredevelopment" element={<Page><SoftwareDevelopment /></Page>} />
          <Route path="/uxdesign" element={<Page><UXDesign /></Page>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      </div>
    </div>
  );
}
