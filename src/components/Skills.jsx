"use client";

import { motion } from "framer-motion";

const skillCategories = [
{
title: "Languages",
skills: [
{ name: "C", link: "https://en.cppreference.com/w/c" },
{ name: "C++", link: "https://isocpp.org" },
{ name: "Java", link: "https://www.oracle.com/java/" },
{ name: "Python", link: "https://www.python.org" },
{
name: "JavaScript",
link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
},
],
},

{
title: "Frontend",
skills: [
{ name: "React", link: "https://react.dev" },
{ name: "Next.js", link: "https://nextjs.org" },
{ name: "Tailwind CSS", link: "https://tailwindcss.com" },
{ name: "Framer Motion", link: "https://www.framer.com/motion/" },
],
},

{
title: "Backend",
skills: [
{ name: "Node.js", link: "https://nodejs.org" },
{ name: "Express.js", link: "https://expressjs.com" },
{ name: "MongoDB", link: "https://www.mongodb.com" },
{ name: "Supabase", link: "https://supabase.com" },
],
},

{
title: "Machine Learning",
skills: [
{
name: "Logistic Regression",
link: "https://scikit-learn.org",
},
{
name: "Random Forest",
link: "https://scikit-learn.org",
},
{
name: "Naive Bayes",
link: "https://scikit-learn.org",
},
{
name: "KNN",
link: "https://scikit-learn.org",
},
{
name: "SVM",
link: "https://scikit-learn.org",
},
],
},
];

export default function Skills() {
return ( <section
   id="skills"
   className="
   bg-zinc-950
   text-white
   py-28
   px-6
   "
 > <div className="max-w-7xl mx-auto">


    <p
      className="
      text-cyan-400
      uppercase
      tracking-[0.3em]
      text-sm
      mb-3
      "
    >
      Expertise
    </p>

    <h2
      className="
      text-4xl
      md:text-5xl
      font-bold
      mb-14
      "
    >
      Technical Skills
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {skillCategories.map((category, index) => (
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
            y: -8,
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
          p-6
          "
        >
          <h3
            className="
            text-xl
            font-bold
            mb-5
            text-cyan-400
            "
          >
            {category.title}
          </h3>

          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill) => (
              <a
                key={skill.name}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                px-3
                py-2
                rounded-xl
                bg-zinc-800
                text-sm
                border
                border-zinc-700
                hover:bg-cyan-500
                hover:text-black
                hover:border-cyan-500
                transition
                duration-300
                "
              >
                {skill.name}
              </a>
            ))}
          </div>
        </motion.div>
      ))}

    </div>

  </div>
</section>


);
}
