// Script principal pour le site RP Bofuri - NightOfKarma

document.addEventListener('DOMContentLoaded', function() {
    // Animation pour faire apparaître les éléments au scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('active');
            }
        });
    };
    
    // Stats animation
    const animateStats = () => {
        const statBars = document.querySelectorAll('.stat-bar-fill');
        
        statBars.forEach(bar => {
            const value = bar.getAttribute('data-value');
            bar.style.width = `${value}%`;
        });
    };
    
    // Navigation active state
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Modal pour les détails des compétences
    const skillItems = document.querySelectorAll('.skill-item');
    const modal = document.getElementById('skill-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.querySelector('.close-modal');
    
    if (skillItems && modal && modalContent && closeModal) {
        skillItems.forEach(item => {
            item.addEventListener('click', function() {
                const skillName = this.querySelector('h4').textContent;
                const skillDesc = this.getAttribute('data-description');
                
                modalContent.innerHTML = `
                    <h3>${skillName}</h3>
                    <p>${skillDesc}</p>
                `;
                
                modal.classList.add('active');
            });
        });
        
        closeModal.addEventListener('click', function() {
            modal.classList.remove('active');
        });
        
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
    
    // Exécution des animations au chargement
    animateOnScroll();
    animateStats();
    
    // Exécution des animations au scroll
    window.addEventListener('scroll', animateOnScroll);
});

// Fonction pour basculer entre le monde réel et New World
function toggleWorld(worldType) {
    const realWorldSection = document.getElementById('real-world');
    const newWorldSection = document.getElementById('new-world');
    const realWorldBtn = document.getElementById('real-world-btn');
    const newWorldBtn = document.getElementById('new-world-btn');
    
    if (worldType === 'real') {
        realWorldSection.classList.add('active');
        newWorldSection.classList.remove('active');
        realWorldBtn.classList.add('active');
        newWorldBtn.classList.remove('active');
    } else {
        newWorldSection.classList.add('active');
        realWorldSection.classList.remove('active');
        newWorldBtn.classList.add('active');
        realWorldBtn.classList.remove('active');
    }
}