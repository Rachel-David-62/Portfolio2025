import React from "react";
import { Briefcase, GraduationCap, Heart, MapPin } from "lucide-react";
import profilePic from "../assets/photoprofil.jpg";

// Composant principal de la section Profil (A Propos)
const About = () => {
  return (
    <div className="w-full min-h-screen py-20 px-6 md:px-16 flex flex-col justify-center bg-[#FDFBF9]">
      <div className="max-w-7xl mx-auto w-full">
        {/* Titre de la section */}
        <div className="mb-12" data-aos="fade-right">
          <h2 className="text-4xl md:text-6xl font-serif text-(--graphite)">
            Profil
          </h2>
          <p className="text-(--celadon) tracking-widest mt-2 uppercase text-sm font-bold">
            Mon Parcours & Ma Vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Carte de Biographie et Présentation */}
          <div
            className="md:col-span-2 lg:col-span-2 bg-white rounded-4xl p-8 flex flex-col justify-center shadow-sm hover:shadow-md transition-all duration-300 border border-(--sage-light)/40"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-6 mb-6">
              {/* Photo de profil */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-(--sage-light) shadow-sm shrink-0 transition-all duration-300 hover:scale-105">
                <img
                  src={profilePic}
                  alt="Rachel David"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif text-(--graphite)">
                Créative & Technique
              </h3>
            </div>
            {/* Texte de présentation */}
            <p className="text-(--graphite) opacity-80 leading-relaxed text-justify">
              Je combine une sensibilité artistique (issue de mon{" "}
              <strong>Bac STD2A</strong>) avec la rigueur du code. Actuellement
              à la recherche d’une alternance <strong>CDA</strong> (Concepteur
              Développeur d’Application). Mon but : concevoir des interfaces web
              esthétiques, accessibles et intuitives.
            </p>
          </div>

          {/* Carte de Formation */}
          <div
            className="md:col-span-1 lg:row-span-2 bg-(--sage-light)/20 rounded-4xl p-8 border border-(--sage-light)/50 hover:bg-(--sage-light)/30 transition-colors duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center gap-2 mb-6 border-b border-(--graphite)/10 pb-4">
              <GraduationCap className="text-(--graphite) w-6 h-6" />
              <h3 className="font-bold text-(--graphite) uppercase tracking-wider">
                Formation
              </h3>
            </div>

            {/* Liste des formations */}
            <ul className="space-y-6">
              <li className="relative pl-4 border-l-2 border-(--celadon)">
                <span className="font-bold block text-(--graphite) text-lg">
                  Dev Front-End
                </span>
                <span className="text-xs text-(--graphite)/70 uppercase flex items-center gap-1">
                  <MapPin size={10} /> Simplon | Lens
                </span>
                <p className="text-xs mt-1 opacity-60">HTML, CSS, JS, React</p>
              </li>
              <li className="relative pl-4 border-l-2 border-(--celadon)">
                <span className="font-bold block text-(--graphite) text-lg">
                  PSC1
                </span>
                <span className="text-xs text-(--graphite)/70 uppercase">
                  Secourisme | Arras
                </span>
              </li>
              <li className="relative pl-4 border-l-2 border-(--celadon)">
                <span className="font-bold block text-(--graphite) text-lg">
                  Bac STD2A
                </span>
                <span className="text-xs text-(--graphite)/70 uppercase">
                  E.S.A.A.T | Roubaix
                </span>
                <p className="text-xs mt-1 opacity-60">
                  Design & Arts Appliqués
                </p>
              </li>
            </ul>
          </div>

          {/* Carte des Soft Skills */}
          <div
            className="md:col-span-1 bg-(--matcha) text-(--graphite) rounded-4xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:scale-[1.02] transition-transform duration-300"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Heart className="w-8 h-8 mb-2 text-white" />
            <h3 className="font-serif text-xl mb-3 text-white">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-white/30 text-(--graphite) font-bold rounded-full text-xs backdrop-blur-sm">
                Curieuse
              </span>
              <span className="px-3 py-1 bg-white/30 text-(--graphite) font-bold rounded-full text-xs backdrop-blur-sm">
                Autonome
              </span>
              <span className="px-3 py-1 bg-white/30 text-(--graphite) font-bold rounded-full text-xs backdrop-blur-sm">
                Esthète
              </span>
            </div>
          </div>

          {/* Carte des Expériences Professionnelles */}
          <div
            className="md:col-span-2 lg:col-span-3 bg-white rounded-4xl p-8 shadow-sm border border-(--sage-light)/40 hover:shadow-md transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="text-(--matcha) w-6 h-6" />
              <h3 className="font-bold text-(--graphite) uppercase tracking-wider">
                Expériences Professionnelles
              </h3>
            </div>

            {/* Liste des expériences */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-(--beige-rose)/50 rounded-xl hover:bg-(--beige-rose) transition-colors">
                <div className="font-bold text-sm text-(--celadon)">
                  2025 (1 mois)
                </div>
                <div className="font-serif text-lg leading-tight my-2 text-(--graphite)">
                  Dev Front-End
                </div>
                <div className="text-xs opacity-70 uppercase tracking-wide">
                  Nuances Coiffure
                </div>
              </div>
              <div className="p-4 bg-(--beige-rose)/50 rounded-xl hover:bg-(--beige-rose) transition-colors">
                <div className="font-bold text-sm text-(--celadon)">
                  2020-2021
                </div>
                <div className="font-serif text-lg leading-tight my-2 text-(--graphite)">
                  Mairie d'Annay
                </div>
                <div className="text-xs opacity-70 uppercase tracking-wide">
                  Service Civique & Admin
                </div>
              </div>
              <div className="p-4 bg-(--beige-rose)/50 rounded-xl hover:bg-(--beige-rose) transition-colors">
                <div className="font-bold text-sm text-(--celadon)">2018</div>
                <div className="font-serif text-lg leading-tight my-2 text-(--graphite)">
                  Opérateur Fab.
                </div>
                <div className="text-xs opacity-70 uppercase tracking-wide">
                  Draka Comteq
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
