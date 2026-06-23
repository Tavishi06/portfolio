"use client";

import { motion } from "framer-motion";

export default function Github() {
  return (
    <section
      id="github"
      className="
      bg-zinc-950
      text-white
      py-28
      px-6
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Label */}
        <p
          className="
          text-cyan-400
          uppercase
          tracking-[0.3em]
          text-sm
          mb-3
          "
        >
          Open Source
        </p>

        {/* Heading */}
        <h2
          className="
          text-4xl
          md:text-5xl
          font-bold
          mb-14
          "
        >
          GitHub Activity
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-3xl
            p-6
            "
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=Tavishi06&show_icons=true&theme=tokyonight"
              alt="GitHub Stats"
              className="w-full rounded-xl"
            />
          </motion.div>

          {/* Most Used Languages */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-3xl
            p-6
            "
          >
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Tavishi06&layout=compact&theme=tokyonight"
              alt="Languages"
              className="w-full rounded-xl"
            />
          </motion.div>

        </div>

        {/* GitHub Button */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/Tavishi06"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-block
            px-8
            py-4
            rounded-xl
            bg-cyan-500
            text-black
            font-semibold
            hover:scale-105
            transition
            "
          >
            Visit GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
}