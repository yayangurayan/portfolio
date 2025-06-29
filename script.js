// Fungsi untuk menutup menu hamburger ketika link diklik
function closeMobileMenu() {
    navLinks.classList.remove('active');
}

// Script untuk menu hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Menutup menu ketika salah satu link diklik
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        closeMobileMenu();
    });
});

// Script untuk efek scroll pada navigasi
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Fungsi untuk mengecek apakah elemen berada di viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
        rect.bottom >= 0
    );
}

// Fungsi untuk menambahkan animasi saat elemen masuk viewport
function animateOnScroll() {
    const sections = document.querySelectorAll('section');
    const sectionTitle = document.querySelectorAll('.section-title');
    const summaryBox = document.querySelector('.summary-box');
    const infoItems = document.querySelectorAll('.info-item');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const eduCards = document.querySelectorAll('.edu-card');
    const skillCategories = document.querySelectorAll('.skill-category');
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    const heroContent = document.querySelector('.hero-content');
    const heroImg = document.querySelector('.hero-img');

    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('active');
        }
    });

    sectionTitle.forEach(title => {
        if (isInViewport(title)) {
            title.classList.add('active');
        }
    });

    if (summaryBox && isInViewport(summaryBox)) {
        summaryBox.classList.add('active');
    }

    infoItems.forEach((item, index) => {
        if (isInViewport(item)) {
            setTimeout(() => {
                item.classList.add('active');
            }, index * 150);
        }
    });

    timelineItems.forEach((item, index) => {
        if (isInViewport(item)) {
            setTimeout(() => {
                item.classList.add('active');
            }, index * 200);
        }
    });

    eduCards.forEach((card, index) => {
        if (isInViewport(card)) {
            setTimeout(() => {
                card.classList.add('active');
            }, index * 150);
        }
    });

    skillCategories.forEach((category, index) => {
        if (isInViewport(category)) {
            setTimeout(() => {
                category.classList.add('active');

                // Animate skill bars
                const skillBars = category.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = `${width}%`;
                });
            }, index * 150);
        }
    });

    if (contactInfo && isInViewport(contactInfo)) {
        contactInfo.classList.add('active');
    }

    if (contactForm && isInViewport(contactForm)) {
        contactForm.classList.add('active');
    }

    // Hero section animations
    if (heroContent && isInViewport(heroContent)) {
        heroContent.classList.add('active');
    }

    if (heroImg && isInViewport(heroImg)) {
        heroImg.classList.add('active');
    }
}

// Panggil fungsi saat halaman dimuat dan saat di-scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Smooth scrolling untuk anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Submit form kontak
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const subject = this.querySelector('input[placeholder="Subjek"]').value;
    const message = this.querySelector('textarea').value;

    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Mohon lengkapi semua kolom form!');
        return;
    }

    // Create a simple confirmation message
    const confirmationMessage = `
        Terima kasih, ${name}!
        Pesan Anda telah berhasil dikirim.
        Saya akan segera menghubungi Anda melalui email: ${email}
        
        Detail pesan:
        Subjek: ${subject}
        Pesan: ${message}
    `;

    alert(confirmationMessage);
    this.reset();
});

// Initialize skill bars on page load
document.addEventListener('DOMContentLoaded', function () {
    // Set initial width to 0 for all skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        bar.style.width = '0';
    });
});