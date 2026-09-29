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

import Github from "@/components/Github";
import Reveal from "./Reveal";

const GITHUB = "https://github.com/Tavishi06";
const LINKEDIN = "https://www.linkedin.com/in/tavishi-kashyap-0409b6370/";
const RESUME = "/Tavishi_Kashyap_Resume.pdf";
const EMAIL = "tavishikashyap02@gmail.com";

const skills = [
  ["Languages", "Java, C, C++, Python, JavaScript"],
  ["Backend", "Spring Boot, Node.js, Express, REST APIs"],
  ["Frontend", "React, Next.js, Tailwind CSS"],
  ["Databases", "PostgreSQL, MongoDB, Supabase"],
  ["ML", "Scikit-learn, Pandas, NLP, Streamlit"],
  ["Tools", "Git, GitHub, Maven, VS Code"],
];

const path = [
  ["2026", "Frontend Intern, Andaz Kumar", "Learning dashboard with React and Supabase"],
  ["2026", "Frontend Intern, Trams", "Agency landing page with React and Tailwind"],
  ["2025", "Machine Learning Training, Netmax", "45 days of ML algorithms and model building"],
  ["2023", "B.Tech CSE, IKGPTU Main Campus", "Graduating 2027, CGPA 8.9/10"],
];

function Links({ items }) {
  return (
    <div className="links">
      {items.map(([label, href]) => (
        <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Reveal />
      <header className="hero">
        <div className="wrap">
          <div className="top">
            <strong>Tavishi K.</strong>
            <ul>
              <li><a href="#work">Work</a></li>
              <li><a href="#stack">Stack</a></li>
              <li><a href="#path">Path</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="hero-grid">
            <div>
              <h1 className="display">Tavishi<br />Kashyap</h1>
              <p className="role">
                Computer Science student. I build backends with Java and Spring Boot, plus full-stack and ML projects.
              </p>
              <div className="actions">
                <a className="btn solid" href={RESUME}>Resume</a>
                <a className="btn" href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
                <a className="btn" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="btn" href="#contact">Contact</a>
              </div>
            </div>
            <aside className="board" aria-label="What I am working on">
              <p className="head">Now serving</p>
              <ul>
                <li><span className="tag">Building</span><span className="what">QueueLess, Spring Boot backend</span></li>
                <li><span className="tag">Learning</span><span className="what">Spring Security and JWT</span></li>
                <li><span className="tag">Daily</span><span className="what">3 DSA problems</span></li>
              </ul>
            </aside>
          </div>
        </div>
      </header>

      <main>
        <section className="sec" id="work">
          <div className="wrap">
            <h2 className="display" data-reveal>Work</h2>

            <article data-reveal className="panel lead">
              <div>
                <span className="pill">In development</span>
                <h3>QueueLess</h3>
                <p className="one">
                  A hospital queue system that tells patients which doctors are available and how long they will wait.
                </p>
                <p className="stack">Java, Spring Boot, PostgreSQL, JWT, React</p>
              </div>
            </article>

            <article data-reveal className="panel">
              <div>
                <h3>Churn Prediction</h3>
                <p className="one">Predicts which customers will leave. Logistic Regression reached 80.12% accuracy.</p>
                <p className="stack">Python, Scikit-learn, Streamlit</p>
                <Links items={[["Live demo", "https://churn-prediction-a4m4p4azzrx5vtusswwqfu.streamlit.app/"], ["GitHub", "https://github.com/Tavishi06/Churn-Prediction"]]} />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="shot" src="/churn.PNG" alt="Churn prediction app" loading="lazy" />
            </article>

            <article data-reveal className="panel">
              <div>
                <h3>Fake News Detector</h3>
                <p className="one">Classifies news articles as real or fake using NLP and Logistic Regression.</p>
                <p className="stack">Python, NLP, Node.js, MongoDB</p>
                <Links items={[["Live demo", "https://fake-news-detector-one-olive.vercel.app/"], ["GitHub", "https://github.com/Tavishi06/fake-news-detector"]]} />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="shot" src="/fake.PNG" alt="Fake news detector app" loading="lazy" />
            </article>

            <div className="small-grid">
              <article data-reveal className="panel">
                <h3>Learning Dashboard</h3>
                <p className="one">Student dashboard with Supabase.</p>
                <p className="stack">React, Supabase, Tailwind</p>
                <Links items={[["Live demo", "https://learning-dashboard-khaki-two.vercel.app/"], ["GitHub", "https://github.com/Tavishi06/learning-dashboard"]]} />
              </article>
              <article data-reveal className="panel">
                <h3>Student Management</h3>
                <p className="one">Student and admin portals with registration, login and a REST API, deployed on Render and Vercel.</p>
                <p className="stack">Node.js, Express, MongoDB Atlas</p>
                <Links items={[["Live demo", "https://student-management-xi-two.vercel.app/"], ["Github", "https://github.com/Tavishi06/student-management"]]} />
              </article>
            </div>
          </div>
        </section>

        <section className="sec stack-sec" id="stack">
          <div className="wrap">
            <h2 className="display" data-reveal>Stack</h2>
            <div>
              {skills.map(([k, v], i) => (
                <div className="skill" data-reveal style={{ "--i": i }} key={k}>
                  <h3>{k}</h3>
                  <p>{v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="path">
          <div className="wrap two">
            <div>
              <h2 className="display" data-reveal>Path</h2>
              <ul className="path">
                {path.map(([yr, t, d]) => (
                  <li key={t} data-reveal>
                    <b><span className="yr">{yr}</span>{t}</b>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="display" data-reveal>Practice</h2>
              <p>
                I solve data structures and algorithms problems every day and keep the solutions public: arrays,
                strings, linked lists, stacks, queues, recursion, trees, sorting and searching.
              </p>
              <div className="now" data-reveal>
                <p>Java and Spring Boot code lives here:</p>
                <p>
                  <a href="https://github.com/Tavishi06/30-days-dsa-challenge" target="_blank" rel="noreferrer">30 Days DSA</a>
                  {"  "}
                  <a href="https://github.com/Tavishi06/Spring-Boot" target="_blank" rel="noreferrer">Spring Boot</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="contact" id="contact">
        <div className="wrap">
          <h2 className="display" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", marginBottom: "2rem" }}>Say hello</h2>
          <a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <div className="row">
            <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
            <a href={RESUME}>Resume</a>
          </div>
          <small>Tavishi Kashyap, 2026</small>
        </div>
      </footer>
    </>
  );
}