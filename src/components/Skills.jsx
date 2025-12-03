import React from "react";

// Composant principal de la section Compétences
const Skills = () => {
  // Liste des outils de Design
  const tools = [
    {
      name: "Figma",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Adobe XD",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-original.svg",
    },
    {
      name: "Illustrator",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    },
    {
      name: "Photoshop",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    },
    {
      name: "InDesign",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg",
    },
    {
      name: "Canva",
      url: "https://upload.wikimedia.org/wikipedia/fr/b/b8/Canva_logo.svg",
    },
  ];

  // Liste des outils de Développement
  const dev = [
    {
      name: "HTML5",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Three.js",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg",
    },
    {
      name: "Vite",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    },
    {
      name: "Tailwind",
      url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      name: "Git",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    { name: "GitHub", url: "https://cdn.simpleicons.org/github/181717" },
  ];

  return (
    <div className="w-full min-h-screen py-20 px-6 md:px-16 flex flex-col justify-center bg-[#FDFBF9]">
      <div className="max-w-6xl mx-auto w-full">
        {/* Titre  */}
        <div className="mb-16 text-center md:text-left" data-aos="fade-right">
          <h2 className="text-4xl md:text-6xl font-serif text-(--graphite)">
            Compétences
          </h2>
          <p className="text-(--celadon) tracking-widest mt-2 uppercase text-sm font-bold">
            Stack Technique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bloc des outils de Design */}
          <div
            className="glass-panel p-10 rounded-[2.5rem] bg-(--sage-light)/20 border border-(--sage-light)/30 hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-serif text-(--graphite) mb-8 border-b border-(--graphite)/10 pb-4">
              Design
            </h3>
            {/* Grid des icônes de Design */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {tools.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 p-3">
                    <img
                      src={item.url}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-(--graphite) opacity-70 group-hover:opacity-100 transition-opacity">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bloc des outils de Développement */}
          <div
            className="glass-panel p-10 rounded-[2.5rem] bg-(--matcha)/20 border border-(--matcha)/30 hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h3 className="text-2xl font-serif text-(--graphite) mb-8 border-b border-(--graphite)/10 pb-4">
              Dev
            </h3>
            {/* Grille des icônes de Développement */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {dev.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 p-3">
                    <img
                      src={item.url}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-(--graphite) opacity-70 group-hover:opacity-100 transition-opacity">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bloc des Langues */}
        <div
          className="mt-16 glass-panel p-8 rounded-3xl bg-white/50 border border-(--sage-light)/30"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="font-serif text-xl text-(--graphite)">
              Langues
            </span>
            {/* Détail des niveaux de langue */}
            <div className="flex gap-12 text-sm md:text-base">
              <div className="flex flex-col items-center">
                <span className="font-bold text-(--graphite)">Français</span>
                <span className="text-(--celadon) text-xs font-bold uppercase">
                  Courant
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-(--graphite)">Anglais</span>
                <span className="text-(--celadon) text-xs font-bold uppercase">
                  Intermédiaire
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-(--graphite)">Espagnol</span>
                <span className="text-(--celadon) text-xs font-bold uppercase">
                  Débutant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
