import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Achievements from "@/components/Achievements";
import Github from "@/components/Github";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Timeline />
      <Github />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}