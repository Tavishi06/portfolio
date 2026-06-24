"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-xl
      bg-black/30
      border-b
      border-zinc-800
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
        "
      >
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="
          text-2xl
          font-extrabold
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500
          bg-clip-text
          text-transparent
          "
        >
          Tavishi
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="
                relative
                text-gray-300
                hover:text-cyan-400
                transition
                duration-300
                "
              >
                {link.name}

                <span
                  className="
                  absolute
                  left-0
                  -bottom-1
                  w-0
                  h-[2px]
                  bg-cyan-400
                  transition-all
                  duration-300
                  hover:w-full
                  "
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="
          hidden
          md:block
          px-5
          py-2
          rounded-xl
          bg-cyan-500
          text-black
          font-semibold
          hover:scale-105
          transition
          "
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="
          md:hidden
          text-white
          text-2xl
          "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
            md:hidden
            bg-zinc-900/95
            backdrop-blur-lg
            border-t
            border-zinc-800
            "
          >
            <ul
              className="
              flex
              flex-col
              items-center
              gap-6
              py-8
              "
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                    text-lg
                    text-gray-300
                    hover:text-cyan-400
                    transition
                    "
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              <a
                href="/resume.pdf"
                download
                className="
                px-5
                py-2
                rounded-xl
                bg-cyan-500
                text-black
                font-semibold
                "
              >
                Resume
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}