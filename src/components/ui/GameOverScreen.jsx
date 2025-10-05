import React from 'react';
import { useGameStore } from '../../stores/useGameStore';

const GameOverScreen = () => {
  const { startGame, restartGame } = useGameStore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark-bg text-dark-font font-inter p-4 text-center animate-fade-in">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-2 text-red-500">
        Game Over
      </h1>
      <p className="text-lg text-dark-font-secondary mb-8 max-w-2xl">
        Anda menabrak bug! Dalam pengembangan, setiap kesalahan adalah pelajaran berharga.
      </p>
      <div className="flex gap-4">
        <button
          onClick={startGame}
          className="px-8 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-primary-1-dark to-primary-2-dark hover:scale-105 hover:shadow-xl hover:shadow-primary-1-dark/20 transition-all duration-300 text-lg"
        >
          Coba Lagi
        </button>
        <button
          onClick={restartGame}
          className="px-8 py-3 font-semibold text-primary-1-dark rounded-full border-2 border-primary-1-dark hover:bg-primary-1-dark/10 transition-colors text-lg"
        >
          Kembali ke Menu
        </button>
      </div>
    </div>
  );
};

export default GameOverScreen;
