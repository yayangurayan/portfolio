import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver.js';

// Komponen Pembantu untuk Animasi
const AnimatedSection = ({ children }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      {children}
    </div>
  );
};

// Komponen Pembantu untuk Efek Ketik
const TypingEffect = () => {
  const [text, setText] = useState('');
  const words = ["Inovator Digital.", "Analis Pasar.", "Problem Solver."];
  
  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimeout;

    function type() {
      const currentWord = words[wordIndex];
      const speed = isDeleting ? 80 : 150;
      
      if (isDeleting) {
        setText(currentWord.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setText(currentWord.substring(0, charIndex + 1));
        charIndex++;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        typingTimeout = setTimeout(() => { isDeleting = true; }, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingTimeout = setTimeout(type, 500);
      } else {
        typingTimeout = setTimeout(type, speed);
      }
    }

    typingTimeout = setTimeout(type, 250);

    return () => clearTimeout(typingTimeout);
  }, []);

  return (
    <span className="typing-text text-transparent bg-clip-text bg-gradient-to-r from-primary-1-dark to-primary-2-dark">
      {text}
    </span>
  );
};


const FinalPortfolio = () => {
  // Data untuk konten portofolio
  const techSkills = [
    { name: 'HTML', icon: 'fa-brands fa-html5' }, { name: 'CSS', icon: 'fa-brands fa-css3-alt' }, { name: 'JavaScript', icon: 'fa-brands fa-js' },
    { name: 'C#', icon: 'fa-solid fa-c' }, { name: 'Unity', icon: 'fa-brands fa-unity' }, { name: 'TradingView', icon: 'fa-solid fa-chart-simple' }
  ];
  const certifications = [
    { title: 'Capital Market School', issuer: 'Indonesia Stock Exchange (BEI)', icon: 'fa-solid fa-award' },
    { title: 'Financial System Stability', issuer: 'Bank Indonesia Journals', icon: 'fa-solid fa-landmark' }
  ];
  const experiences = [
    { date: 'Okt 2024 - Sekarang', title: 'President Director', company: 'GIBEI UNIMED', duties: 'Memimpin tim, mengelola acara literasi keuangan, dan meningkatkan efisiensi anggaran 30%.'},
    { date: 'Agu 2024 - Okt 2024', title: 'Volunteer - Stocklab Competition Crew', company: 'Kompetisi Investasi Muda', duties: 'Bertanggung jawab atas koordinasi teknis dan kelancaran acara untuk 100+ peserta.'}
  ];
  const projects = [
    {img: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=Tapstok', cat: 'P2MW Project', title: 'Tapstok: Sistem Manajemen Stok NFC', desc: 'Merancang dan memimpin pengembangan aplikasi manajemen stok berbasis NFC yang mengurangi error inventaris UMKM hingga 70%.', tags: ['NFC', 'Manajemen Stok', 'UMKM']},
    {img: 'https://placehold.co/600x400/EC4899/FFFFFF?text=Tiket+Bus', cat: 'Proyek Pribadi', title: 'Digitalisasi Tiket Perjalanan Bus', desc: 'Membangun MVP platform booking tiket untuk membantu bisnis transportasi kecil go-digital dan mengurangi operasi manual.', tags: ['HTML', 'CSS', 'JavaScript']}
  ];

  return (
    <div className="bg-dark-bg text-dark-font font-inter overflow-x-hidden" style={{ scrollBehavior: 'smooth' }}>
        <header className="fixed top-0 left-0 w-full z-50 py-4 bg-dark-bg/80 backdrop-blur-lg border-b border-dark-border/50 transition-all duration-300">
            <div className="container mx-auto px-4 md:px-8">
                <nav className="flex justify-between items-center">
                    <a href="#hero" className="text-2xl font-bold">Andrian.</a>
                    <ul className="hidden md:flex space-x-8 text-sm">
                        {['Tentang', 'Proyek', 'Keahlian', 'Pengalaman', 'Kontak'].map(item => (
                            <li key={item}><a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-dark-font-secondary hover:text-dark-font transition-colors relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-primary-1-dark after:to-primary-2-dark after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">{item}</a></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>

        <main>
            {/* Hero Section */}
            <section id="hero" className="min-h-screen flex items-center pt-24 md:pt-0 relative">
                <div className="container mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
                    <div className="text-center md:text-left flex-1">
                        <AnimatedSection>
                          <span className="font-semibold text-primary-1-dark">Halo, saya Andrian.</span>
                          <h1 className="text-4xl lg:text-6xl font-extrabold my-3 leading-tight">Saya Seorang <br className="hidden md:block" /><TypingEffect /></h1>
                          <p className="text-lg text-dark-font-secondary max-w-xl mx-auto md:mx-0 mb-8">Mahasiswa Bisnis Digital dengan misi mendorong transformasi teknologi untuk UMKM melalui solusi yang adaptif, berkelanjutan, dan berbasis data.</p>
                          <div className="flex justify-center md:justify-start gap-4">
                              <a href="#proyek" className="px-7 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-primary-1-dark to-primary-2-dark hover:scale-105 hover:shadow-lg hover:shadow-primary-1-dark/20 transition-all duration-300">Lihat Proyek Saya</a>
                              <a href="#kontak" className="px-7 py-3 font-semibold text-primary-1-dark rounded-full border-2 border-primary-1-dark hover:bg-primary-1-dark/10 transition-colors">Hubungi Saya</a>
                          </div>
                        </AnimatedSection>
                    </div>
                    <div className="flex-shrink-0">
                      <AnimatedSection>
                        <div className="relative w-72 h-72 lg:w-80 lg:h-80 p-2 rounded-full">
                           <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-1-dark to-primary-2-dark animate-spin [animation-duration:4s]"></div>
                            <img src="https://placehold.co/400x400/161b22/E5E7EB?text=Andrian" alt="Foto Profil Andrian" className="relative w-full h-full object-cover rounded-full border-8 border-dark-bg"/>
                        </div>
                      </AnimatedSection>
                    </div>
                </div>
            </section>

            <div className="py-24 space-y-24 md:space-y-32">
                 {/* About Section */}
                <section id="tentang" className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-8"><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-1-dark to-primary-2-dark">Cerita Saya</span></h2>
                        <p className="text-lg text-dark-font-secondary leading-relaxed">Lahir di Pematangsiantar, saya tumbuh dengan ketertarikan mendalam pada dua dunia: dinamika pasar modal dan potensi tak terbatas dari teknologi digital. Sebagai mahasiswa Bisnis Digital, saya percaya bahwa setiap baris kode, setiap strategi digital, dan setiap analisis data memiliki kekuatan untuk mengubah bisnis, terutama UMKM. Integritas, disiplin, dan inovasi adalah kompas yang memandu setiap langkah saya.</p>
                    </AnimatedSection>
                </section>

                {/* Projects Section */}
                <section id="proyek" className="container mx-auto px-4 md:px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-1-dark to-primary-2-dark">Proyek Unggulan</span></h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {projects.map((p, i) => (
                               <div key={i} className="bg-dark-bg-secondary border border-dark-border rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-primary-1-dark/10 hover:-translate-y-2">
                                  <div className="overflow-hidden"><img src={p.img} alt={p.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                                  <div className="p-6">
                                      <span className="text-sm font-bold text-primary-1-dark uppercase">{p.cat}</span>
                                      <h3 className="text-2xl font-bold my-2">{p.title}</h3>
                                      <p className="text-dark-font-secondary mb-4">{p.desc}</p>
                                      <div className="flex flex-wrap gap-2">
                                          {p.tags.map(t => <span key={t} className="bg-dark-bg text-xs font-medium px-3 py-1 rounded-full">{t}</span>)}
                                      </div>
                                  </div>
                              </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </section>

                {/* Skills Section */}
                <section id="keahlian" className="container mx-auto px-4 md:px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-1-dark to-primary-2-dark">Keahlian & Sertifikasi</span></h2>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1 bg-dark-bg-secondary p-8 rounded-lg border border-dark-border">
                                <h3 className="text-2xl font-bold mb-6">Keahlian Teknis</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {techSkills.map(skill => (
                                        <div key={skill.name} className="bg-dark-bg p-4 rounded-md flex items-center gap-3 transition-colors hover:text-primary-1-dark">
                                            <i className={`${skill.icon} text-2xl w-8 text-center`}></i>
                                            <span className="font-semibold">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 bg-dark-bg-secondary p-8 rounded-lg border border-dark-border">
                                <h3 className="text-2xl font-bold mb-6">Sertifikasi Profesional</h3>
                                <div className="space-y-6">
                                    {certifications.map(cert => (
                                        <div key={cert.title} className="flex items-start gap-4">
                                            <i className={`${cert.icon} text-3xl text-primary-1-dark mt-1`}></i>
                                            <div>
                                                <h4 className="font-bold text-lg">{cert.title}</h4>
                                                <p className="text-dark-font-secondary">{cert.issuer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </section>

                {/* Experience Section */}
                <section id="pengalaman" className="container mx-auto px-4 md:px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-1-dark to-primary-2-dark">Perjalanan Profesional</span></h2>
                        <div className="relative max-w-2xl mx-auto">
                            <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-dark-border"></div>
                            <div className="space-y-12">
                                {experiences.map((exp, i) => (
                                    <div key={i} className={`relative pl-8 md:pl-0 ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                                        <div className={`md:flex ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                                            <div className="md:w-1/2">
                                                <div className={`p-6 bg-dark-bg-secondary border border-dark-border rounded-lg`}>
                                                    <p className="text-sm text-dark-font-secondary mb-1">{exp.date}</p>
                                                    <h3 className="text-xl font-bold">{exp.title}</h3>
                                                    <p className="text-primary-1-dark font-semibold mb-2">{exp.company}</p>
                                                    <p className="text-dark-font-secondary text-sm">{exp.duties}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute top-1 -left-[9px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-dark-bg border-4 border-primary-1-dark rounded-full"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </section>
                
                {/* Contact Section */}
                <section id="kontak" className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-8"><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-1-dark to-primary-2-dark">Mari Terhubung</span></h2>
                        <p className="text-lg text-dark-font-secondary leading-relaxed mb-8">Saya percaya kolaborasi adalah kunci inovasi. Jika Anda memiliki ide, proyek, atau sekadar ingin berdiskusi tentang persimpangan antara bisnis dan teknologi, pintu digital saya selalu terbuka.</p>
                        <a href="mailto:andriandareen@gmail.com" className="inline-block px-10 py-4 font-semibold text-white rounded-full bg-gradient-to-r from-primary-1-dark to-primary-2-dark hover:scale-105 hover:shadow-lg hover:shadow-primary-1-dark/20 transition-all duration-300">
                           Kirim Pesan
                        </a>
                    </AnimatedSection>
                </section>
            </div>
        </main>
        
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

export default FinalPortfolio;
