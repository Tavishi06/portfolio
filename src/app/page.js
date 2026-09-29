// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import About from "../components/About";
// import Projects from "../components/Projects";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";
// import Skills from "@/components/Skills";
// import Timeline from "@/components/Timeline";
// import Achievements from "@/components/Achievements";
// import Github from "@/components/Github";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Achievements />
//       <Timeline />
//       <Github />
//       <Projects />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

const LINKS = {
  github: "https://github.com/Tavishi06",
  linkedin: "https://www.linkedin.com/in/tavishi-kashyap-0409b6370/",
  resume: "/Tavishi_Kashyap_Resume.pdf",
  email: "mailto:tavishikashyap02@gmail.com",
};

const featured = [
  {
    title: "QueueLess",
    sub: "Hospital queue and patient flow system",
    status: "In development",
    desc: "Patients often arrive at a hospital without knowing which doctors are available or how long they will wait. QueueLess shows OPD availability, live queue status and an estimated waiting time, with a personal dashboard for each patient.",
    stack:
      "Java, Spring Boot, REST APIs, PostgreSQL, Spring Security, JWT, React, OTP verification",
    links: [], // add { label: "GitHub", href: "..." } once the repo is ready
  },
  {
    title: "Customer Churn Prediction",
    sub: "Machine learning web app",
    desc: "Predicts which customers are likely to leave, using Logistic Regression, Random Forest and Naive Bayes. Logistic Regression reached 80.12% accuracy. Includes data preprocessing, model evaluation and a Streamlit interface.",
    stack: "Python, Pandas, Scikit-learn, Streamlit",
    img: "/churn.PNG",
    links: [
      { label: "Live demo", href: "https://churn-prediction-a4m4p4azzrx5vtusswwqfu.streamlit.app/" },
      { label: "GitHub", href: "https://github.com/Tavishi06/Churn-Prediction" },
    ],
  },
  {
    title: "Fake News Detection",
    sub: "NLP text classifier",
    desc: "Classifies news articles as real or fake. Text is cleaned and vectorised, then classified with Logistic Regression and checked against held-out data. Wrapped in a web interface so it can be tried without opening a notebook.",
    stack: "Python, NLP, Scikit-learn, Node.js, MongoDB",
    img: "/fake.PNG",
    links: [
      { label: "Live demo", href: "https://fake-news-detector-one-olive.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Tavishi06/fake-news-detector" },
    ],
  },
];

const other = [
  {
    title: "Learning Dashboard",
    desc: "Student dashboard built during a frontend internship, backed by Supabase.",
    stack: "React, Supabase, Tailwind CSS",
    links: [
      { label: "Live demo", href: "https://learning-dashboard-khaki-two.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Tavishi06/learning-dashboard" },
    ],
  },
  {
    title: "Student Management",
    desc: "CRUD application with a REST backend, deployed on Render.",
    stack: "Node.js, Express, MongoDB Atlas",
    links: [],
  },
];

const skills = [
  ["Languages", "Java, C, C++, Python, JavaScript"],
  ["Backend", "Spring Boot, Node.js, Express.js, REST APIs"],
  ["Frontend", "React, Next.js, Tailwind CSS"],
  ["Databases", "PostgreSQL, MongoDB, Supabase"],
  ["Machine learning", "Scikit-learn, Pandas, NLP, Streamlit"],
  ["Tools", "Git, GitHub, Maven, VS Code"],
];

const experience = [
  ["2026", "Frontend Development Intern, Andaz Kumar", "Built a learning dashboard with React and Supabase."],
  ["2026", "Frontend Development Intern, Trams", "Built a responsive agency landing page with React and Tailwind CSS."],
  ["2025", "Machine Learning Training, Netmax, Chandigarh", "45-day programme covering ML algorithms and model development."],
];

function Links({ items }) {
  if (!items.length) return null;
  return (
    <div className="links">
      {items.map((l) => (
        <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
          {l.label}
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="wrap">
          <strong>Tavishi Kashyap</strong>
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main className="wrap">
        <header className="hero">
          <h1>Tavishi Kashyap</h1>
          <p className="role">
            Computer Science student, Java and Spring Boot developer
          </p>
          <p className="lede">
            I build practical software with Java, Spring Boot, REST APIs and
            databases, and I have full-stack and machine learning projects
            alongside.
          </p>
          <div className="actions">
            <a className="btn primary" href={LINKS.resume}>Resume</a>
            <a className="btn" href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href="#contact">Contact</a>
          </div>
        </header>

        <section className="row" id="about">
          <h2>About</h2>
          <div>
            <p>
              I am a B.Tech Computer Science student at IKGPTU Main Campus,
              graduating in 2027, with a CGPA of 8.9/10.
            </p>
            <p>
              Right now I am going deeper on Java, Spring Boot, data structures
              and algorithms, and backend development. I am looking for
              software engineering roles, especially on the backend.
            </p>
          </div>
        </section>

        <section className="row" id="projects">
          <h2>Projects</h2>
          <div>
            {featured.map((p) => (
              <article className="project" key={p.title}>
                <h3>
                  {p.title}
                  {p.status && <span className="badge">{p.status}</span>}
                </h3>
                <p className="sub">{p.sub}</p>
                <p className="desc">{p.desc}</p>
                <p className="stack">{p.stack}</p>
                <Links items={p.links} />
                {p.img && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="shot" src={p.img} alt={`${p.title} screenshot`} loading="lazy" />
                )}
              </article>
            ))}
            {other.map((p) => (
              <article className="project" key={p.title}>
                <h3>{p.title}</h3>
                <p className="desc">{p.desc}</p>
                <p className="stack">{p.stack}</p>
                <Links items={p.links} />
              </article>
            ))}
          </div>
        </section>

        <section className="row" id="java">
          <h2>Java and Spring Boot</h2>
          <div>
            <p>
              Java is my main development direction. I am building backend
              applications with Spring Boot, REST APIs, Maven and PostgreSQL,
              and adding JPA/Hibernate and Spring Security as I use them in
              QueueLess.
            </p>
            <p className="small muted">
              Core Java, OOP, collections and exception handling are covered in
              the Java repository.
            </p>
            <div className="links project" style={{ padding: 0, border: 0 }}>
              <a href="https://github.com/Tavishi06/Spring-Boot" target="_blank" rel="noreferrer">
                Spring Boot repository
              </a>
            </div>
          </div>
        </section>

        <section className="row" id="dsa">
          <h2>Problem solving</h2>
          <div>
            <p>
              I practise data structures and algorithms daily, at about three
              problems a day, and keep the solutions in a public repository.
              Topics so far: arrays, strings, linked lists, stacks, queues,
              recursion, trees, sorting and searching.
            </p>
            <div className="links project" style={{ padding: 0, border: 0 }}>
              <a href="https://github.com/Tavishi06/30-days-dsa-challenge" target="_blank" rel="noreferrer">
                30 Days DSA Challenge
              </a>
            </div>
          </div>
        </section>

        <section className="row" id="skills">
          <h2>Skills</h2>
          <ul className="skills">
            {skills.map(([k, v]) => (
              <li key={k}>
                <b>{k}</b>
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="row" id="experience">
          <h2>Experience</h2>
          <ul className="timeline">
            {experience.map(([when, what, detail]) => (
              <li key={what}>
                <span className="when">{when}</span>
                <div>
                  <b>{what}</b>
                  <p className="muted small">{detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="row" id="education">
          <h2>Education</h2>
          <div>
            <p><b>B.Tech, Computer Science and Engineering</b></p>
            <p className="muted small">IKGPTU Main Campus, 2023 to 2027. CGPA 8.9/10.</p>
            <p className="small">
              Coursework: Data Structures and Algorithms, Operating Systems,
              Computer Networks, Database Management Systems, Computer
              Organization and Architecture, Theory of Computation.
            </p>
          </div>
        </section>

        <section className="row" id="contact">
          <h2>Contact</h2>
          <div>
            <p>
              The best way to reach me is by email:{" "}
              <a href={LINKS.email}>tavishikashyap02@gmail.com</a>. I am also on{" "}
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>{" "}
              and{" "}
              <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a>.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">Tavishi Kashyap, 2026</div>
      </footer>
    </>
  );
}
