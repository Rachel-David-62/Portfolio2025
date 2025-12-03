import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import iconHome from "../assets/icon1.png";
import iconAbout from "../assets/icon2.png";
import iconSkills from "../assets/icon3.png";
import iconContact from "../assets/icon4.png";

// Composant réutilisable pour un bouton de navigation
const NavButton = ({ id, icon, label, isMobile, activeId, scrollTo }) => {
  const isActive = activeId === id;

  return (
    <button
      onClick={() => scrollTo(id)}
      className="group relative flex items-center justify-center w-12 h-12 transition-all duration-300"
    >
      {/* Tooltip (bulle d'aide) affichée uniquement sur desktop */}
      {!isMobile && (
        <div className="absolute left-16 px-3 py-1 bg-white text-(--graphite) text-sm font-bold rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-x-2.5 group-hover:translate-x-0 whitespace-nowrap pointer-events-none z-50">
          {label}
          <div className="absolute top-1/2 -left-1 w-2 h-2 bg-white transform -translate-y-1/2 rotate-45"></div>
        </div>
      )}

      {/* Indicateur de section active (cercle blanc) */}
      <div
        className={`absolute inset-0 bg-white rounded-xl transition-all duration-300 ${
          isActive ? "scale-100 opacity-30" : "scale-0 opacity-0"
        }`}
      ></div>

      {/* Icône de navigation */}
      <img
        src={icon}
        alt={label}
        className={`w-10 h-10 object-contain relative z-10 transition-transform duration-300 ${
          isActive ? "scale-110" : "group-hover:scale-110"
        }`}
      />
    </button>
  );
};

// Composant principal de la barre de navigation latérale
const Sidebar = () => {
  const [activeId, setActiveId] = useState("home");

  // Hook pour détecter le scroll et mettre à jour l'icône active
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(section);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour faire scroller la page vers une section donnée
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Fonction utilitaire pour rendre un bouton de navigation
  const renderNavButton = (id, icon, label, isMobile = false) => (
    <NavButton
      id={id}
      icon={icon}
      label={label}
      isMobile={isMobile}
      activeId={activeId}
      scrollTo={scrollTo}
    />
  );

  return (
    <>
      {/* Barre latérale pour la vue Desktop */}
      <div
        className="hidden md:flex fixed left-0 top-0 h-screen w-24 md:w-32 bg-(--matcha) flex-col items-center py-8 z-50 rounded-r-[40px] shadow-2xl justify-between"
        data-aos="slide-right"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        {/* Logo cliquable */}
        <div
          className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-10 cursor-pointer transition-transform hover:scale-105"
          onClick={() => scrollTo("home")}
        >
          <img
            src={logo}
            alt="Logo Rachel"
            className="w-full h-full object-contain drop-shadow-md"
          />
        </div>

        {/* Menu de navigation principal */}
        <nav className="flex flex-col gap-8 items-center flex-1 justify-center">
          {renderNavButton("home", iconHome, "Accueil")}
          {renderNavButton("about", iconAbout, "A Propos")}
          {renderNavButton("skills", iconSkills, "Compétences")}
          {renderNavButton("contact", iconContact, "Contact")}
        </nav>

        {/* Déco en bas de la barre latérale */}
        <div className="mt-auto flex flex-col gap-1 opacity-50">
          <div className="w-8 h-1 bg-(--sage-light) rounded-full"></div>
          <div className="w-8 h-1 bg-(--sage-light) rounded-full"></div>
          <div className="w-8 h-1 bg-(--sage-light) rounded-full"></div>
        </div>
      </div>

      {/* Barre de navigation pour la vue Mobile (en bas) */}
      <div
        className="md:hidden fixed bottom-4 left-4 right-4 h-20 bg-(--matcha)/95 backdrop-blur-md rounded-full z-50 shadow-2xl flex items-center justify-around px-2 border border-white/20"
        data-aos="slide-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        {renderNavButton("home", iconHome, "Accueil", true)}
        {renderNavButton("about", iconAbout, "Profil", true)}
        {renderNavButton("skills", iconSkills, "Skills", true)}
        {renderNavButton("contact", iconContact, "Contact", true)}
      </div>
    </>
  );
};

export default Sidebar;
