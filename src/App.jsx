import React, { useState, useEffect } from 'react';
import { useGameStore } from './stores/useGameStore';
import { sfx } from './sound/sfx';

// Impor Komponen
import StartScreen from './components/ui/StartScreen';
import GameCanvas from './components/game/GameCanvas';
import FinalPortfolio from './pages/FinalPortfolio';
import CustomCursor from './components/ui/CustomCursor';
import GameOverScreen from './components/ui/GameOverScreen';
import ProjectPreviewCard from './components/ui/ProjectPreviewCard';

// Komponen Mute Button
const MuteButton = () => {
    const { isMuted, toggleMute } = useGameStore();

    const handleClick = () => {
        // Audio context di browser harus dimulai oleh interaksi pengguna
        // jadi kita panggil startAudio saat tombol pertama kali diklik
        if (!sfx.isAudioReady) {
            sfx.startAudio();
        }
        toggleMute();
    }

    return (
        <button 
            onClick={handleClick}
            className="fixed bottom-4 right-4 z-[9999] w-12 h-12 bg-dark-bg-secondary/50 backdrop-blur-sm border border-dark-border rounded-full text-dark-font-secondary hover:text-white hover:border-primary-1-dark transition-all flex items-center justify-center"
            aria-label={isMuted ? "Unmute" : "Mute"}
        >
            <i className={`fas ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
        </button>
    )
}

function App() {
  const { gameStatus, projectToShow, clearProjectPreview } = useGameStore();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [renderPortfolio, setRenderPortfolio] = useState(false);
  
  // Logika untuk transisi dari game ke portofolio
  useEffect(() => {
    if (gameStatus === 'won' && !isFadingOut) {
      setIsFadingOut(true);
      // Tunggu animasi fade-out selesai sebelum merender portofolio
      setTimeout(() => {
        setRenderPortfolio(true);
      }, 500); 
    }
    
    // Reset state transisi jika game dimulai ulang
    if (gameStatus === 'start' || gameStatus === 'playing') {
        setIsFadingOut(false);
        setRenderPortfolio(false);
    }
  }, [gameStatus, isFadingOut]);

  // Render konten berdasarkan status game
  const renderContent = () => {
    if (renderPortfolio) {
        return <FinalPortfolio />;
    }

    const contentMap = {
        start: <StartScreen />,
        playing: <GameCanvas />,
        gameOver: <GameOverScreen />,
    };

    const content = contentMap[gameStatus] || <StartScreen />;

    return (
        <div className={isFadingOut ? 'animate-fade-out' : 'animate-fade-in'}>
            {content}
        </div>
    )
  };
  
  return (
    <>
      <CustomCursor />
      <MuteButton />
      {projectToShow && <ProjectPreviewCard project={projectToShow} onClose={clearProjectPreview} />}
      {renderContent()}
    </>
  );
}

export default App;
