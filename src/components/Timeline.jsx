"use client";

import { motion } from "framer-motion";

const timelineData = [
{
year: "2023",
title: "Started B.Tech CSE",
place: "IKGPTU Main Campus, Kapurthala",
description:
"Began Bachelor of Technology in Computer Science & Engineering.",
},

{
year: "2025",
title: "Machine Learning Training",
place: "Netmax Pvt. Ltd., Chandigarh",
description:
"Completed 45-day Machine Learning training covering ML algorithms and model development.",
},

{
year: "2026",
title: "Frontend Development Internship",
place: "Andaz Kumar",
description:
"Built the Next-Gen Learning Dashboard using React and Supabase.",
},

{
year: "2026",
title: "Frontend Development Internship",
place: "Trams",
description:
"Developed a responsive Agency Landing Page using React and Tailwind CSS.",
},

{
year: "2026",
title: "Full Stack & AI Projects",
place: "Personal Projects",
description:
"Built Churn Prediction, Fake News Detection, and Full Stack applications.",
},
];

export default function Timeline() {
return ( <section
   id="timeline"
   className="
   bg-black
   text-white
   py-28
   px-6
   "
 > <div className="max-w-5xl mx-auto">


    <p
      className="
      text-cyan-400
      uppercase
      tracking-[0.3em]
      text-sm
      mb-3
      "
    >
      Journey
    </p>

    <h2
      className="
      text-4xl
      md:text-5xl
      font-bold
      mb-16
      "
    >
      Education & Experience
    </h2>

    <div className="relative border-l border-zinc-800">

      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
          className="
          ml-8
          mb-12
          relative
          "
        >
          <div
            className="
            absolute
            -left-[42px]
            top-2
            w-4
            h-4
            bg-cyan-400
            rounded-full
            "
          />

          <p className="text-cyan-400 text-sm mb-2">
            {item.year}
          </p>

          <h3 className="text-2xl font-bold">
            {item.title}
          </h3>

          <p className="text-gray-400 mt-1">
            {item.place}
          </p>

          <p className="text-gray-500 mt-3 leading-7">
            {item.description}
          </p>
        </motion.div>
      ))}

    </div>

  </div>
</section>


);
}
