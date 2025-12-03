import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import portfolioImg from "../assets/monPortfolio.png";
import siteVitrineImg from "../assets/SiteVitrine-lea.png";
import maquetteImg from "../assets/Maquette.png";

// Composant de modale affichant les détails d'un projet
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Pour fermer la modale en cliquant à l'extérieur */}
      <div
        className="fixed inset-0 bg-[#434c48]/70 backdrop-blur-lg"
        onClick={onClose}
      ></div>

      {/* Contenu principal de la Modale */}
      <div
        className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-white/90 rounded-[3rem] glass-panel shadow-2xl p-6 md:p-10"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        {/* Bouton pour Fermer la Modale */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#434c48] hover:text-[#8bb59f] transition-colors z-20"
          aria-label="Fermer la modale"
        >
          <X size={28} strokeWidth={2.5} />
        </button>

        {/* Titre et tags du projet */}
        <h3 className="text-3xl md:text-4xl font-serif text-[#434c48] mb-2">
          {project.title}
        </h3>
        <p className="text-sm font-bold text-[#8bb59f] uppercase tracking-wider mb-6">
          {project.tag}
        </p>

        {/* Image du projet agrandie */}
        <div className="w-full h-auto max-h-96 rounded-2xl mb-6 overflow-hidden">
          <img
            src={project.fullImage || project.image}
            alt={`Aperçu du projet ${project.title}`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Description */}
        <p className="text-[#434c48] opacity-80 leading-relaxed">
          {project.desc}
          <br />
          <br />
          Ceci est une description détaillée du projet. Vous pouvez ajouter ici
          toutes les informations spécifiques : technologies utilisées, défis
          relevés, liens vers la démo ou le code, etc. L'idée est de donner plus
          de contexte que la carte initiale.
        </p>
      </div>
    </div>
  );
};

// Composant principal de la page Projets
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Définition des données des projets
  const projects = [
    {
      title: "Portfolio 2025 (Rachel)",
      tag: "React + Three.js",
      desc: "Mon portfolio personnel, développé avec React, Three.js (fiber/drei) et Tailwind CSS pour une expérience 3D immersive.",
      image: portfolioImg,
      fullImage: portfolioImg,
    },
    {
      title: "Site Vitrine (Léa)",
      tag: "Projet Figma / Dev",
      desc: "Conception et développement d'un site vitrine pour une artiste indépendante, spécialisée dans le custom sur textile.",
      image: siteVitrineImg,
      fullImage: siteVitrineImg,
    },
    {
      title: "Maquette UI/UX (Léa)",
      tag: "Design Figma",
      desc: "Maquette Figma complète du site vitrine, incluant le flow utilisateur, l'architecture et le design des pages.",
      image: maquetteImg,
      fullImage: maquetteImg,
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Blocage/déblocage du scroll du body lors de l'ouverture de la modale
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <>
      <div className="w-full min-h-screen py-20 px-6 md:px-16 flex flex-col justify-center bg-[#FDFBF9]">
        <div className="max-w-7xl mx-auto w-full">
          {/* Titre */}
          <div className="mb-12" data-aos="fade-right">
            <h2 className="text-4xl md:text-6xl font-serif text-[#434c48]">
              Projets
            </h2>
            <p className="text-[#8bb59f] tracking-widest mt-2 uppercase text-sm font-bold">
              Mes Réalisations
            </p>
          </div>

          {/* Grid affichant les cartes de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item, idx) => (
              // Carte individuelle de projet, cliquable pour ouvrir la modale
              <div
                key={idx}
                className="glass-panel rounded-4xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 group cursor-pointer"
                onClick={() => openModal(item)}
                data-aos="fade-up"
                data-aos-delay={idx * 200}
              >
                {/* L'image miniature du projet */}
                <div
                  className={`h-48 flex items-center justify-center relative bg-gray-100 overflow-hidden`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Texte de la carte */}
                <div className="p-8 bg-white/50">
                  <span className="text-xs font-bold text-[#8bb59f] uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl font-serif text-[#434c48] mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#434c48] opacity-70 mb-6">
                    {item.desc}
                  </p>

                  <span className="text-xs font-bold text-[#a9c6a9] uppercase tracking-wider pt-4 border-t border-[#434c48]/10 flex items-center gap-2">
                    Voir les détails
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Affichage de la modale */}
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </>
  );
};

export default Projects;
