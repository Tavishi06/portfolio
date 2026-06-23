"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
      relative
      overflow-hidden
      min-h-screen
      pt-20
      pb-32
      bg-gradient-to-b
      from-black
      via-zinc-950
      to-black
      text-white
      flex
      items-center
      justify-center
      px-6
      "
    >
      {/* Background Glow Effects */}
      <div
        className="
        absolute
        top-20
        left-10
        w-72
        h-72
        bg-cyan-500/20
        rounded-full
        blur-3xl
        "
      />

      <div
        className="
        absolute
        bottom-20
        right-10
        w-72
        h-72
        bg-purple-500/20
        rounded-full
        blur-3xl
        "
      />

      <div
        className="
        relative
        z-10
        text-center
        max-w-4xl
        "
      >
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
          text-cyan-400
          uppercase
          tracking-[0.3em]
          text-sm
          mb-4
          "
        >
          Welcome To My Portfolio
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
          text-5xl
          md:text-7xl
          font-extrabold
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500
          bg-clip-text
          text-transparent
          "
        >
          Tavishi Kashyap
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
          text-xl
          md:text-2xl
          text-gray-400
          mt-6
          "
        >
          Full Stack Developer • Machine Learning Enthusiast
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="
          max-w-2xl
          mx-auto
          mt-8
          text-gray-300
          leading-relaxed
          text-lg
          "
        >
          Computer Science undergraduate passionate about
          building scalable web applications, machine learning
          solutions, and AI-powered products. I enjoy solving
          real-world problems through technology.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-4
          mt-10
          "
        >
          <a
            href="/Tavishi_Kashyap_Resume.pdf"
            download
            className="
            px-6
            py-3
            rounded-xl
            bg-cyan-500
            text-black
            font-semibold
            hover:scale-105
            transition
            duration-300
            "
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="
            px-6
            py-3
            rounded-xl
            border
            border-cyan-500
            text-cyan-400
            hover:bg-cyan-500
            hover:text-black
            transition
            duration-300
            "
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="
          mt-16
          text-cyan-400
          text-3xl
          "
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}