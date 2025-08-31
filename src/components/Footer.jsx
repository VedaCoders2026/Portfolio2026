import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-transparent">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} 4lo.ops Tech. All rights reserved.</p>
        <div className="flex gap-4 text-xl">
          <a className="hover:opacity-70" href="/" aria-label="GitHub"><FaGithub /></a>
          <a className="hover:opacity-70" href="/" aria-label="LinkedIn"><FaLinkedin /></a>
          <a className="hover:opacity-70" href="/" aria-label="Twitter"><FaTwitter /></a>
          <a className="hover:opacity-70" href="/" aria-label="Instagram"><FaInstagram /></a>
          <a className="hover:opacity-70" href="/" aria-label="Facebook"><FaFacebook /></a>
        </div>
      </div>
    </footer>
  );
}
