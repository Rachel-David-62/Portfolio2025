import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

// Composant pour la sphère 3D déformée et flottante
const LiquidShape = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh scale={2.4}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#8BB59F"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
};

// Composant principal de la page d'accueil
const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Conteneur pour le fond 3D (Canvas Three.js) */}
      <div
        className="absolute inset-0 z-0 opacity-60"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <LiquidShape />
        </Canvas>
      </div>

      {/* Contenu principal de la section Hero (Texte) */}
      <div className="z-10 text-center flex flex-col items-center select-none mix-blend-multiply">
        <p
          className="text-(--graphite) text-xs md:text-sm tracking-[0.5em] uppercase font-bold mb-4"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Portfolio 2025
        </p>

        <h1
          className="text-(--graphite) text-[18vw] md:text-[12rem] font-serif font-black tracking-tighter leading-[0.8]"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          BOOK
        </h1>

        <div
          className="flex flex-col md:flex-row items-center gap-2 md:gap-6 mt-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <span className="h-px w-12 bg-(--graphite) hidden md:block"></span>
          <h2 className="text-lg md:text-2xl font-light uppercase tracking-[0.2em] text-(--graphite)">
            Rachel David
          </h2>
          <span className="h-px w-12 bg-(--graphite) hidden md:block"></span>
        </div>

        <p
          className="mt-2 text-(--celadon) font-bold tracking-widest text-xs md:text-sm"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          ALTERNANCE CDA
        </p>
      </div>
    </div>
  );
};

export default Home;
