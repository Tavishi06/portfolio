"use client";

import { motion } from "framer-motion";
import {
FaEnvelope,
FaGithub,
FaLinkedin,
FaPhone,
FaDownload,
} from "react-icons/fa";

export default function Contact() {
return ( <section
   id="contact"
   className="
   bg-zinc-950
   text-white
   py-28
   px-6
   "
 > <div className="max-w-6xl mx-auto">


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
      Contact
    </p>

    {/* Heading */}
    <h2
      className="
      text-4xl
      md:text-5xl
      font-bold
      mb-12
      "
    >
      Let's Connect
    </h2>

    {/* Contact Cards */}
    <div className="grid md:grid-cols-2 gap-6">

      {/* Email */}
      <motion.a
        whileHover={{ y: -5 }}
        href="mailto:tavishikashyap02@gmail.com"
        className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-2xl
        p-6
        flex
        items-center
        gap-4
        hover:border-cyan-400
        transition
        "
      >
        <FaEnvelope
          size={28}
          className="text-cyan-400"
        />

        <div>
          <h3 className="font-semibold text-lg">
            Email
          </h3>

          <p className="text-gray-400">
            tavishikashyap02@gmail.com
          </p>
        </div>
      </motion.a>

      {/* Phone */}
      <motion.a
        whileHover={{ y: -5 }}
        href="tel:+919115561688"
        className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-2xl
        p-6
        flex
        items-center
        gap-4
        hover:border-cyan-400
        transition
        "
      >
        <FaPhone
          size={28}
          className="text-cyan-400"
        />

        <div>
          <h3 className="font-semibold text-lg">
            Phone
          </h3>

          <p className="text-gray-400">
            +91 9115561688
          </p>
        </div>
      </motion.a>

      {/* GitHub */}
      <motion.a
        whileHover={{ y: -5 }}
        href="https://github.com/Tavishi06"
        target="_blank"
        rel="noopener noreferrer"
        className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-2xl
        p-6
        flex
        items-center
        gap-4
        hover:border-cyan-400
        transition
        "
      >
        <FaGithub
          size={28}
          className="text-cyan-400"
        />

        <div>
          <h3 className="font-semibold text-lg">
            GitHub
          </h3>

          <p className="text-gray-400">
            View My Projects
          </p>
        </div>
      </motion.a>

      {/* LinkedIn */}
      <motion.a
        whileHover={{ y: -5 }}
        href="https://www.linkedin.com/in/tavishi-kashyap-0409b6370/"
        target="_blank"
        rel="noopener noreferrer"
        className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-2xl
        p-6
        flex
        items-center
        gap-4
        hover:border-cyan-400
        transition
        "
      >
        <FaLinkedin
          size={28}
          className="text-cyan-400"
        />

        <div>
          <h3 className="font-semibold text-lg">
            LinkedIn
          </h3>

          <p className="text-gray-400">
            Connect Professionally
          </p>
        </div>
      </motion.a>

    </div>

    {/* Resume Button */}
    <div className="text-center mt-16">

      <a
        href="/resume.pdf"
        download
        className="
        inline-flex
        items-center
        gap-3
        px-8
        py-4
        rounded-2xl
        bg-cyan-500
        text-black
        font-bold
        hover:scale-105
        transition
        "
      >
        <FaDownload />
        Download Resume
      </a>

    </div>

  </div>
</section>


);
}
