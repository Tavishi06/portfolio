"use client";

import { motion } from "framer-motion";

const achievements = [
{
number: "8.9",
suffix: "/10",
title: "CGPA",
},
{
number: "5+",
suffix: "",
title: "Projects Built",
},
{
number: "45",
suffix: " Days",
title: "ML Training",
},
{
number: "20+",
suffix: "",
title: "DSA Problems",
},
];

export default function Achievements() {
return ( <section
   id="achievements"
   className="
   bg-zinc-950
   text-white
   py-24
   px-6
   "
 > <div className="max-w-7xl mx-auto">


    <p
      className="
      text-cyan-400
      uppercase
      tracking-[0.3em]
      text-sm
      text-center
      mb-3
      "
    >
      Highlights
    </p>

    <h2
      className="
      text-4xl
      md:text-5xl
      font-bold
      text-center
      mb-16
      "
    >
      Achievements & Stats
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {achievements.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className="
          bg-zinc-900
          border
          border-zinc-800
          rounded-3xl
          p-8
          text-center
          "
        >
          <h3
            className="
            text-4xl
            md:text-5xl
            font-extrabold
            text-cyan-400
            "
          >
            {item.number}
            <span className="text-xl">
              {item.suffix}
            </span>
          </h3>

          <p
            className="
            mt-4
            text-gray-400
            "
          >
            {item.title}
          </p>
        </motion.div>
      ))}

    </div>

  </div>
</section>


);
}
