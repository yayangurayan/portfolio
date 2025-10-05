import React, { useState, useEffect } from 'react';
import { useGameStore } from 'D:/WebProjects/Web Portfolio (Update)/wdd-gamified-portfolio/stores/useGameStore.js';
import StartScreen from 'D:/WebProjects/Web Portfolio (Update)/wdd-gamified-portfolio/components/ui/StartScreen.jsx';
import GameCanvas from 'D:/WebProjects/Web Portfolio (Update)/wdd-gamified-portfolio/components/game/GameCanvas.jsx';
import FinalPortfolio from 'D:/WebProjects/Web Portfolio (Update)/wdd-gamified-portfolio/pages/FinalPortfolio.jsx';
import CustomCursor from 'D:/WebProjects/Web Portfolio (Update)/wdd-gamified-portfolio/components/ui/CustomCursor.jsx';

function App() {
  const { gameStatus } = useGameStore();
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [isGameFading, setIsGameFading] = useState(false);
  
  useEffect(() => {
    // Logika transisi dari game ke portofolio
    if (gameStatus === 'won' && !isGameFading) {
      setIsGameFading(true);
      setTimeout(() => {
        setIsPortfolioVisible(true);
      }, 500); // Tunggu animasi fade-out selesai
    }
  }, [gameStatus, isGameFading]);

  // Muat Font Awesome secara dinamis
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    }
  }, []);

  const renderContent = () => {
    if (gameStatus === 'start') {
      return <StartScreen />;
    }
    if (isPortfolioVisible) {
      return <FinalPortfolio />;
    }
    // Tampilkan game dan atur transisi fade-out
    return (
       <div className={`transition-opacity duration-500 ${isGameFading ? 'opacity-0' : 'opacity-100'}`}>
         <GameCanvas />
       </div>
    );
  };
  
  return (
    <>
      <CustomCursor />
      {renderContent()}
    </>
  );
}

export default App;
