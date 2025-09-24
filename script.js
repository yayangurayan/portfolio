document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIKA PRELOADER & KONTEN UTAMA ---
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    
    document.body.classList.add('loading');

    // Jaminan bahwa konten akan muncul setelah 1.5 detik
    setTimeout(() => {
        if (preloader) preloader.classList.add('fade-out');
        if (mainContent) mainContent.style.opacity = '1';
        document.body.classList.remove('loading');
        
        // Inisialisasi Intersection Observer SETELAH preloader selesai
        setTimeout(initScrollReveal, 50); 
    }, 1500);


    // --- INISIALISASI PARTICLE.JS ---
    const initParticles = (isDarkMode) => {
        if (typeof particlesJS === 'undefined') return;
        const color = isDarkMode ? '#8d96a0' : '#4B5563';
        
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": color },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.4, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": color, "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 1, "direction": "none", "out_mode": "out" }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": false }, "resize": true },
                "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } } }
            },
            "retina_detect": true
        });
    };


    // --- NAVIGASI & HEADER ---
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    navLinks.forEach(link => link.addEventListener('click', () => {
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }));


    // --- SCROLLSPY (NAVIGASI AKTIF) ---
    const sections = document.querySelectorAll('.section');
    const observerOptions = { root: null, rootMargin: '-40% 0px -60% 0px' };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    sections.forEach(section => sectionObserver.observe(section));


    // --- MODE TERANG/GELAP (THEME TOGGLE) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const applyTheme = (theme) => {
        const isDark = theme !== 'light-theme';
        document.body.classList.toggle('light-theme', !isDark);
        
        if (window.pJSDom && window.pJSDom[0]) {
            window.pJSDom[0].pJS.fn.vendors.destroypJS();
        }
        initParticles(isDark);
    };

    let currentTheme = localStorage.getItem('theme') || 'dark-theme';
    applyTheme(currentTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            currentTheme = document.body.classList.contains('light-theme') ? 'dark-theme' : 'light-theme';
            localStorage.setItem('theme', currentTheme);
            applyTheme(currentTheme);
        });
    }

    
    // --- ANIMASI KETIK-HAPUS DI HERO SECTION ---
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const words = ["Inovator Digital.", "Analis Pasar.", "Problem Solver."];
        let wordIndex = 0, charIndex = 0, isDeleting = false;

        const type = () => {
            const currentWord = words[wordIndex];
            const speed = isDeleting ? 80 : 150;

            if (isDeleting) {
                typingText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, speed);
            }
        };
        setTimeout(type, 2000); // Mulai setelah preloader
    }


    // --- ANIMASI GRADASI DINAMIS & CUSTOM CURSOR ---
    const gradientBorder = document.getElementById('dynamic-gradient-border');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    const colors = [['#8B5CF6', '#EC4899'], ['#10B981', '#F59E0B'], ['#3B82F6', '#6366F1']];
    let colorIndex = 0;

    setInterval(() => {
        colorIndex = (colorIndex + 1) % colors.length;
        const [color1, color2] = colors[colorIndex];
        document.documentElement.style.setProperty('--dynamic-grad-1', color1);
        document.documentElement.style.setProperty('--dynamic-grad-2', color2);
        if (gradientBorder) {
            gradientBorder.style.setProperty('--gradient-1', color1);
            gradientBorder.style.setProperty('--gradient-2', color2);
        }
        if (cursorDot) cursorDot.style.backgroundColor = color1;
        if (cursorOutline) cursorOutline.style.borderColor = color1;
    }, 4000);

    window.addEventListener('mousemove', (e) => {
        if (cursorDot && cursorOutline) {
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
            cursorOutline.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 500, fill: "forwards" });
        }
    });

    // --- EFEK 3D TILT PADA KARTU PROYEK ---
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left, y = e.clientY - rect.top;
            const { width, height } = rect;
            const rotateX = (y / height - 0.5) * -20;
            const rotateY = (x / width - 0.5) * 20;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });


    // --- FUNGSI UNTUK ANIMASI SCROLL REVEAL ---
    function initScrollReveal() {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    }


    // --- TOMBOL KEMBALI KE ATAS ---
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            backToTopButton.classList.toggle('active', window.scrollY > 300);
        });
    }
});
