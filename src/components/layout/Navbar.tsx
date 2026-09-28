"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 transition-all duration-300 sm:px-6 ${
          scrolled ? "glass py-2.5" : "py-1"
        }`}
        style={{ width: scrolled ? "min(90%, 880px)" : "min(94%, 1100px)" }}
      >
        <a href="#home" className="flex items-center gap-2 text-sm font-semibold">
          <span className="text-gradient text-lg font-bold">D</span>
          <span className="hidden sm:inline">Dilshodbek</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="group relative flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-xs font-medium text-white"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.9), rgba(30,41,82,0.9) 60%, rgba(9,9,11,0.95))",
            boxShadow:
              "0 0 0 1px rgba(167,139,250,0.35), 0 4px 20px -4px rgba(124,58,237,0.55), 0 0 24px -6px rgba(124,58,237,0.5)",
          }}
        >
          {/* glossy top highlight */}
          <span className="pointer-events-none absolute inset-x-2 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/25 to-transparent" />
          <span className="relative">Say Hello</span>
          <FiSend className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.a>
      </nav>
    </motion.header>
  );
}
