import React from 'react';
import { useGameStore } from '../../store/useGameStore.js';

const StartScreen = () => {
  const startGame = useGameStore((state) => state.startGame);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark-bg text-dark-font font-inter p-4 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-1-dark to-primary-2-dark">Developer's Odyssey</span>
      </h1>
      <p className="text-lg text-dark-font-secondary mb-8 max-w-2xl">
        Sebuah perjalanan interaktif melalui karier seorang developer. Kumpulkan item, atasi rintangan, dan buka portofolio di akhir perjalanan.
      </p>
      <button
        onClick={startGame}
        className="px-8 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-primary-1-dark to-primary-2-dark hover:scale-105 hover:shadow-xl hover:shadow-primary-1-dark/20 transition-all duration-300 text-lg"
      >
        Mulai Petualangan
      </button>
    </div>
  );
};

export default StartScreen;
