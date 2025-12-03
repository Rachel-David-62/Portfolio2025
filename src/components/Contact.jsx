import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// Composant principal de la section Contact
const Contact = () => {
  return (
    <div className="w-full min-h-screen py-20 px-6 md:px-16 flex items-center justify-center bg-[#FDFBF9]">
      <div className="max-w-5xl w-full flex flex-col items-center">
        {/* Titre */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-6xl font-serif text-(--graphite)">
            Me Contacter
          </h2>
          <p className="text-(--celadon) tracking-widest mt-2 uppercase text-sm font-bold">
            Discutons de vos projets
          </p>
          <p className="text-(--graphite) opacity-70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Je suis actuellement disponible pour une alternance ou de nouvelles
            opportunités. N'hésitez pas à me contacter directement via les
            moyens ci-dessous.
          </p>
        </div>

        {/* Grille des Cartes de Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Carte Email */}
          <a
            href="mailto:rachel.david62@hotmail.com"
            className="group glass-panel p-8 rounded-4xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 border border-(--sage-light)]/40 hover:border-(--matcha)]"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="w-16 h-16 bg-(--matcha) rounded-full flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform">
              <Mail size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl text-(--graphite) mb-2">Email</h3>
            <p className="text-sm font-bold text-(--celadon) uppercase tracking-wider mb-4">
              Écrivez-moi
            </p>
            <span className="text-(--graphite) opacity-80 group-hover:text-(--matcha) transition-colors break-all">
              rachel.david62@hotmail.com
            </span>
          </a>
          {/* Carte Téléphone */}
          <a
            href="tel:0617026405"
            className="group glass-panel p-8 rounded-4xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 border border-(--sage-light)/40 hover:border-(--matcha)"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-16 h-16 bg-(--celadon) rounded-full flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform">
              <Phone size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl text-(--graphite) mb-2">
              Téléphone
            </h3>
            <p className="text-sm font-bold text-(--celadon) uppercase tracking-wider mb-4">
              Appelez-moi
            </p>
            <span className="text-(--graphite) opacity-80 group-hover:text-(--matcha) transition-colors">
              06.17.02.64.05
            </span>
          </a>

          {/* Carte Localisation */}
          <div
            className="glass-panel p-8 rounded-4xl flex flex-col items-center text-center border border-(--sage-light)/40"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-16 h-16 bg-(--sage-light) rounded-full flex items-center justify-center text-(--graphite) shadow-lg mb-6">
              <MapPin size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl text-(--graphite) mb-2">
              Localisation
            </h3>
            <p className="text-sm font-bold text-(--celadon) uppercase tracking-wider mb-4">
              Mon adresse
            </p>
            <div className="text-(--graphite) opacity-80 flex flex-col">
              <span>16 Rue Thiers</span>
              <span>62880 Annay-sous-Lens</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
