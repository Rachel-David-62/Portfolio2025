import React from "react";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

// Composant de lien de réseau social réutilisable
const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-[#434c48] opacity-70 hover:opacity-100 hover:text-[#a9c6a9] hover:-translate-y-1 transition-all duration-300"
  >
    {icon}
  </a>
);

// Composant principal du footer
const Footer = () => {
  return (
    <footer className="w-full py-8 bg-[#FDFBF9] border-t border-[#434c48]/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Section Copyright */}
        <div className="text-sm text-[#434c48] opacity-60 font-sans text-center md:text-left">
          © 2025 Rachel David.
        </div>

        {/* Section Icônes Réseaux Sociaux */}
        <div className="flex items-center gap-6">
          <SocialLink
            href="https://github.com/"
            icon={<Github size={20} />}
            label="GitHub"
          />
          <SocialLink
            href="https://linkedin.com/"
            icon={<Linkedin size={20} />}
            label="LinkedIn"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
