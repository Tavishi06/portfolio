"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
{
title: "Customer Churn Prediction",
image: "/churn.PNG",
tech: "Python • Machine Learning • Scikit-Learn",
description:
"Built and deployed a machine learning application that predicts customer churn using Random Forest, Logistic Regression, and Naive Bayes models.",
github: "https://github.com/Tavishi06/Churn-Prediction",
demo: "https://churn-prediction-a4m4p4azzrx5vtusswwqfu.streamlit.app/",
},
{
title: "Fake News Detection",
image: "/fake.PNG",
tech: "NLP • Node.js • MongoDB",
description:
"Developed a full-stack NLP application capable of classifying news articles as real or fake using Logistic Regression and text preprocessing techniques.",
github: "https://github.com/Tavishi06/fake-news-detector",
demo: "https://fake-news-detector-one-olive.vercel.app/",
},
{
title: "Learning Dashboard",
image: "/learning.PNG",
tech: "React • Supabase • Tailwind CSS",
description:
"Created a responsive student dashboard with real-time Supabase integration and a modern user interface.",
github: "https://github.com/Tavishi06/learning-dashboard",
demo: "https://learning-dashboard-khaki-two.vercel.app/",
},
];

export default function Projects() {
return ( <section
   id="projects"
   className="
   bg-black
   text-white
   py-28
   px-6
   "
 > <div className="max-w-7xl mx-auto">

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
      Portfolio
    </motion.p>

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="
      text-4xl
      md:text-5xl
      font-bold
      mb-14
      "
    >
      Featured Projects
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          whileHover={{
            y: -10,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
          className="
          group
          relative
          overflow-hidden
          bg-zinc-900
          border
          border-zinc-800
          rounded-3xl
          p-8
          flex
          flex-col
          "
        >
          {/* Glow Effect */}
          <div
            className="
            absolute
            inset-0
            bg-gradient-to-r
            from-cyan-500/0
            via-cyan-500/10
            to-purple-500/0
            opacity-0
            group-hover:opacity-100
            transition
            duration-500
            "
          />

          {/* Project Image */}
          <div
            className="
            relative
            h-52
            overflow-hidden
            rounded-2xl
            mb-6
            "
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-110
              "
            />

            <div
              className="
              absolute
              inset-0
              bg-black/30
              opacity-0
              group-hover:opacity-100
              transition
              duration-300
              "
            />
          </div>

          {/* Project Number */}
          <p
            className="
            text-zinc-700
            text-5xl
            font-bold
            mb-5
            "
          >
            0{index + 1}
          </p>

          {/* Title */}
          <h3
            className="
            text-2xl
            font-bold
            mb-3
            group-hover:text-cyan-400
            transition
            "
          >
            {project.title}
          </h3>

          {/* Tech Stack */}
          <p
            className="
            text-cyan-400
            text-sm
            mb-4
            "
          >
            {project.tech}
          </p>

          {/* Description */}
          <p
            className="
            text-gray-400
            leading-7
            flex-grow
            "
          >
            {project.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-8">

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
              px-4
              py-2
              border
              border-zinc-700
              rounded-xl
              hover:border-cyan-400
              hover:text-cyan-400
              transition
              "
            >
              GitHub
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
              px-4
              py-2
              bg-cyan-500
              text-black
              rounded-xl
              font-semibold
              hover:scale-105
              transition
              "
            >
              Live Demo
            </a>

          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>

);
}
