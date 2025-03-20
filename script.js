// Плавная прокрутка к секциям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Анимация появления элементов при скролле
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.about, .history, .contact').forEach((section) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-out';
    observer.observe(section);
});

// Добавляем класс для анимации
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.hero').classList.add('visible');
});

// Modal functionality
const modal = document.getElementById('imageModal');
const modalImg = modal.querySelector('img');
const closeBtn = modal.querySelector('.modal__close');

// Add click event to all gallery images
document.querySelectorAll('.history__gallery img').forEach(img => {
    img.addEventListener('click', () => {
        modal.classList.add('active');
        modalImg.src = img.src;
        modalImg.alt = img.alt;
    });
});

// Close modal when clicking close button
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Add animation on scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".about, .history, .contact");
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
}); 