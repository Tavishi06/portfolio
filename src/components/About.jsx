"use client";

import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Python",
  "Machine Learning",
  "Tailwind CSS",
  "Git",
];

export default function About() {
  return (
    <section
      id="about"
      className="
      bg-zinc-950
      text-white
      py-28
      px-6
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
          text-cyan-400
          uppercase
          tracking-[0.3em]
          text-sm
          mb-3
          "
        >
          About
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
          text-4xl
          md:text-5xl
          font-bold
          mb-8
          "
        >
          About Me
        </motion.h2>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
          bg-zinc-900
          border
          border-zinc-800
          rounded-3xl
          p-8
          shadow-xl
          "
        >
          <p
            className="
            text-gray-300
            leading-8
            text-lg
            "
          >
            I am a Computer Science undergraduate at
            IKGPTU with a strong interest in Full Stack
            Development, Machine Learning, and Artificial
            Intelligence.

            <br />
            <br />

            I enjoy building modern web applications,
            solving challenging programming problems,
            and exploring emerging technologies.

            <br />
            <br />

            Currently, I am focused on React, Next.js,
            Node.js, Machine Learning, and Data Structures
            & Algorithms while preparing for software
            engineering opportunities.
          </p>

          {/* Skills */}
          <div className="mt-10">
            <h3
              className="
              text-xl
              font-semibold
              mb-5
              "
            >
              Technologies & Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                  }}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-zinc-800
                  border
                  border-zinc-700
                  text-gray-300
                  hover:border-cyan-400
                  hover:text-cyan-400
                  transition
                  cursor-pointer
                  "
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-6
          mt-12
          "
        >
          {[
            { number: "5+", label: "Projects" },
            { number: "20+", label: "DSA Problems" },
            { number: "8.9", label: "CGPA" },
            { number: "1", label: "ML Training" },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{
                y: -5,
              }}
              className="
              bg-zinc-900
              border
              border-zinc-800
              rounded-2xl
              p-6
              text-center
              "
            >
              <h3
                className="
                text-3xl
                font-bold
                text-cyan-400
                "
              >
                {item.number}
              </h3>

              <p className="text-gray-400 mt-2">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}