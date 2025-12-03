import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Jonction visuelle entre les sections
const Connector = () => (
  <div
    className="w-full flex justify-center items-center -my-4 relative z-0 opacity-80"
    data-aos="fade-in"
    data-aos-duration="1500"
  >
    {/* Le trait vertical utilise le dégradé défini dans index.css */}
    <div className="h-24 w-0.5 bg-linear-subtle"></div>

    {/* Cercle décoratif au centre du connecteur */}
    <div className="absolute w-2 h-2 rounded-full bg-(--celadon) shadow-[0_0_8px_var(--celadon)] opacity-70"></div>
  </div>
);

function App() {
  useEffect(() => {
    // Initialisation de la librairie d'animations au scroll (AOS)
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="flex min-h-screen bg-var(--beige-rose) font-sans selection:bg-var(--matcha) selection:text-white relative overflow-hidden">
      {/* Barre de navigation latérale */}
      <Sidebar />

      {/* Conteneur principal des sections de la page */}
      <main className="flex-1 md:pl-32 pb-24 md:pb-0 transition-all duration-300 flex flex-col relative overflow-x-hidden">
        {/* Section Accueil */}
        <section id="home" className="h-screen w-full relative z-10">
          <Home />
        </section>

        {/* Section Profil (A Propos) */}
        <section id="about" className="min-h-screen w-full relative z-10">
          <About />
        </section>

        <Connector />

        {/* Section Compétences */}
        <section id="skills" className="min-h-screen w-full relative z-10">
          <Skills />
        </section>

        <Connector />

        {/* Section Projets */}
        <section id="projects" className="min-h-screen w-full relative z-10">
          <Projects />
        </section>

        <Connector />

        {/* Section Contact */}
        <section id="contact" className="min-h-screen w-full relative z-10">
          <Contact />
        </section>

        {/* Pied de page */}
        <div className="relative z-10">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
