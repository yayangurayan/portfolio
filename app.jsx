import React, { useState, useEffect, useRef } from 'react';
import { create } from 'zustand';

// --- STATE MANAGEMENT with Zustand ---
// Mengelola status game: 'playing' atau 'won'
const useGameStore = create((set) => ({
  gameStatus: 'playing', // Initial state
  winGame: () => set({ gameStatus: 'won' }),
}));

// --- Custom Hooks ---

// Hook untuk animasi "reveal on scroll"
const useIntersectionObserver = (options) => {
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, isVisible];
};

// Hook untuk custom cursor
const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return position;
};


// --- Main Components ---

// Komponen untuk Game "The Developer's Odyssey" (Placeholder)
const GameComponent = () => {
  const winGame = useGameStore((state) => state.winGame);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark-bg text-dark-font font-inter p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-1-dark to-primary-2-dark">Developer's Odyssey</span>
        </h1>
        <p className="text-lg text-dark-font-secondary mb-8">
          Kumpulkan semua skill dan atasi rintangan untuk membuka portofolio.
        </p>
        <div className="p-8 border border-dark-border rounded-lg bg-dark-bg-secondary shadow-lg">
           <p className="mb-4">Ini adalah placeholder untuk game platformer 2D.</p>
           <p className="mb-6 text-sm text-dark-font-secondary">Untuk tujuan demonstrasi, klik tombol di bawah untuk menyelesaikan game.</p>
            <button
              onClick={winGame}
              className="px-8 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-primary-1-dark to-primary-2-dark hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              Selesaikan Game & Buka Portofolio
            </button>
        </div>
      </div>
    </div>
  );
};

// Komponen Portofolio Akhir (Rekreasi dari HTML/CSS lama)
const FinalPortfolioComponent = () => {

  const TypingEffect = () => {
    const [text, setText] = useState('');
    const words = ["Inovator Digital.", "Analis Pasar.", "Problem Solver."];
    const typingSpeed = 150;
    const deletingSpeed = 80;
    const delay = 2000;
    
    useEffect(() => {
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      const type = () => {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
          setText(currentWord.substring(0, charIndex - 1));
          charIndex--;
          if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
          }
        } else {
          setText(currentWord.substring(0, charIndex + 1));
          charIndex++;
          if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, delay);
            return;
          }
        }
      };
      const typingInterval = setInterval(type, isDeleting ? deletingSpeed : typingSpeed);
      return () => clearInterval(typingInterval);
    }, []);

    return (
      <span className="typing-text text-transparent bg-clip-text bg-gradient-to-r from-primary-1-dark to-primary-2-dark border-r-3 border-primary-1-dark animate-blink">
        {text}
      </span>
    );
  };

  const AnimatedSection = ({ children, delay = 0 }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
      <div
        ref={ref}
        className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        style={{ transitionDelay: `${delay}ms`}}
      >
        {children}
      </div>
    );
  };
  
  return (
    <div className="bg-dark-bg text-dark-font font-inter overflow-x-hidden">
        {/* Header (diterjemahkan ke Tailwind) */}
        <header className="fixed top-0 left-0 w-full z-50 py-6 bg-dark-bg/70 backdrop-blur-md border-b border-dark-border/50">
            <div className="container mx-auto px-4 md:px-8">
                <nav className="flex justify-between items-center">
                    <a href="#hero" className="text-2xl font-bold">Andrian.</a>
                    <ul className="hidden md:flex space-x-8">
                        <li><a href="#about" className="text-dark-font-secondary hover:text-dark-font transition-colors">Tentang</a></li>
                        <li><a href="#projects" className="text-dark-font-secondary hover:text-dark-font transition-colors">Proyek</a></li>
                        <li><a href="#skills" className="text-dark-font-secondary hover:text-dark-font transition-colors">Keahlian</a></li>
                        <li><a href="#experience" className="text-dark-font-secondary hover:text-dark-font transition-colors">Pengalaman</a></li>
                        <li><a href="#contact" className="text-dark-font-secondary hover:text-dark-font transition-colors">Kontak</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main>
            {/* Hero Section */}
            <section id="hero" className="min-h-screen flex items-center pt-24 md:pt-0">
                <div className="container mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
                    <div className="text-center md:text-left flex-1">
                        <AnimatedSection>
                          <span className="font-semibold text-primary-1-dark">Halo, saya Andrian.</span>
                          <h1 className="text-4xl lg:text-6xl font-extrabold my-3">Saya Seorang <TypingEffect /></h1>
                          <p className="text-lg text-dark-font-secondary max-w-xl mx-auto md:mx-0 mb-8">Mahasiswa Bisnis Digital dengan misi mendorong transformasi teknologi untuk UMKM melalui solusi yang adaptif, berkelanjutan, dan berbasis data.</p>
                          <div className="flex justify-center md:justify-start gap-4">
                              <a href="#projects" className="px-7 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-primary-1-dark to-primary-2-dark hover:scale-105 hover:shadow-lg hover:shadow-primary-1-dark/20 transition-all duration-300">Lihat Proyek Saya</a>
                              <a href="#contact" className="px-7 py-3 font-semibold text-primary-1-dark rounded-full border-2 border-primary-1-dark hover:bg-primary-1-dark/10 transition-colors">Hubungi Saya</a>
                          </div>
                        </AnimatedSection>
                    </div>
                    <div className="flex-shrink-0">
                      <AnimatedSection delay={200}>
                        <div className="relative w-72 h-72 lg:w-80 lg:h-80 p-2 rounded-full animate-spin [animation-duration:4s]">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-1-dark to-primary-2-dark"></div>
                            <img src="https://placehold.co/400x400/161b22/E5E7EB?text=Andrian" alt="Foto Profil Andrian" className="relative w-full h-full object-cover rounded-full border-8 border-dark-bg"/>
                        </div>
                      </AnimatedSection>
                    </div>
                </div>
            </section>

             {/* Sections Lainnya */}
            <div className="space-y-24 md:space-y-32 py-24">
                {/* About Section */}
                <section id="about" className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-8"><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-1-dark to-primary-2-dark">Cerita Saya</span></h2>
                        <p className="text-lg text-dark-font-secondary leading-relaxed">Lahir di Pematangsiantar, saya tumbuh dengan ketertarikan mendalam pada dua dunia: dinamika pasar modal dan potensi tak terbatas dari teknologi digital. Sebagai mahasiswa Bisnis Digital, saya percaya bahwa setiap baris kode, setiap strategi digital, dan setiap analisis data memiliki kekuatan untuk mengubah bisnis, terutama UMKM. Integritas, disiplin, dan inovasi adalah kompas yang memandu setiap langkah saya.</p>
                    </AnimatedSection>
                </section>

                {/* Projects Section */}
                <section id="projects" className="container mx-auto px-4 md:px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-1-dark to-primary-2-dark">Proyek Unggulan</span></h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Project Card 1 */}
                            <div className="bg-dark-bg-secondary border border-dark-border rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-primary-1-dark/10 hover:-translate-y-2">
                                <img src="https://placehold.co/600x400/8B5CF6/FFFFFF?text=Tapstok" alt="Proyek Tapstok" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="p-6">
                                    <span className="text-sm font-bold text-primary-1-dark uppercase">P2MW Project</span>
                                    <h3 className="text-2xl font-bold my-2">Tapstok: Sistem Manajemen Stok NFC</h3>
                                    <p className="text-dark-font-secondary mb-4">Merancang dan memimpin pengembangan aplikasi manajemen stok berbasis NFC yang mengurangi error inventaris UMKM hingga 70%.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="bg-dark-bg text-xs font-medium px-3 py-1 rounded-full">NFC</span>
                                        <span className="bg-dark-bg text-xs font-medium px-3 py-1 rounded-full">Manajemen Stok</span>
                                        <span className="bg-dark-bg text-xs font-medium px-3 py-1 rounded-full">UMKM</span>
                                    </div>
                                </div>
                            </div>
                            {/* Project Card 2 */}
                             <div className="bg-dark-bg-secondary border border-dark-border rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-primary-2-dark/10 hover:-translate-y-2">
                                <img src="https://placehold.co/600x400/EC4899/FFFFFF?text=Tiket+Bus" alt="Proyek Digitalisasi Tiket Bus" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="p-6">
                                    <span className="text-sm font-bold text-primary-2-dark uppercase">Proyek Pribadi</span>
                                    <h3 className="text-2xl font-bold my-2">Digitalisasi Tiket Perjalanan Bus</h3>
                                    <p className="text-dark-font-secondary mb-4">Membangun MVP platform booking tiket untuk membantu bisnis transportasi kecil go-digital dan mengurangi operasi manual.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="bg-dark-bg text-xs font-medium px-3 py-1 rounded-full">HTML</span>
                                        <span className="bg-dark-bg text-xs font-medium px-3 py-1 rounded-full">CSS</span>
                                        <span className="bg-dark-bg text-xs font-medium px-3 py-1 rounded-full">JavaScript</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </section>
                
                {/* ... (Sections lain akan mengikuti pola yang sama) ... */}

            </div>
        </main>
        
         {/* Footer */}
        <footer className="border-t border-dark-border py-8 text-center">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex justify-center gap-6 mb-4">
                    <a href="https://linkedin.com/in/andrian-kho-947a97264" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-dark-font-secondary hover:text-primary-1-dark transition-colors text-2xl"><i className="fab fa-linkedin"></i></a>
                    <a href="#" aria-label="GitHub" className="text-dark-font-secondary/50 cursor-not-allowed text-2xl"><i className="fab fa-github"></i></a>
                </div>
                <p className="text-dark-font-secondary">&copy; {new Date().getFullYear()} Andrian. Diciptakan dengan hasrat untuk kode dan inovasi.</p>
            </div>
        </footer>
    </div>
  );
};

// --- Custom Cursor Component ---
const CustomCursor = () => {
    const position = useMousePosition();
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseOver = (e) => {
            if (e.target.closest('a, button')) {
                setIsPointer(true);
            } else {
                setIsPointer(false);
            }
        };
        document.addEventListener('mouseover', handleMouseOver);
        return () => document.removeEventListener('mouseover', handleMouseOver);
    }, []);

    const outlineSize = isPointer ? 60 : 40;
    const dotSize = isPointer ? 0 : 8;

    return (
        <div className="hidden md:block">
            <div
                className="pointer-events-none fixed z-[9999] rounded-full bg-primary-1-dark transition-all duration-200"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: `${dotSize}px`,
                    height: `${dotSize}px`,
                    transform: 'translate(-50%, -50%)',
                }}
            />
            <div
                className="pointer-events-none fixed z-[9999] rounded-full border-2 border-primary-1-dark/50 transition-all duration-300"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: `${outlineSize}px`,
                    height: `${outlineSize}px`,
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </div>
    );
};


// --- Komponen Aplikasi Utama ---
function App() {
  const gameStatus = useGameStore((state) => state.gameStatus);
  const [showPortfolio, setShowPortfolio] = useState(false);
  
  useEffect(() => {
    if (gameStatus === 'won') {
      // Menambahkan delay untuk transisi fade out/in
      const timer = setTimeout(() => {
        setShowPortfolio(true);
      }, 500); // 0.5 detik
      return () => clearTimeout(timer);
    }
  }, [gameStatus]);

  // Pre-load font awesome
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <CustomCursor />
      <div className={`transition-opacity duration-500 ${gameStatus === 'playing' ? 'opacity-100' : 'opacity-0'}`}>
        {!showPortfolio && <GameComponent />}
      </div>
      <div className={`transition-opacity duration-500 ${showPortfolio ? 'opacity-100' : 'opacity-0'}`}>
        {showPortfolio && <FinalPortfolioComponent />}
      </div>
    </>
  );
}

export default App;
