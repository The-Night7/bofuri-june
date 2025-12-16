document.addEventListener('DOMContentLoaded', function() {
    // Fonctions pour les effets de fade-in au défilement
    const fadeElements = document.querySelectorAll('.fade-in');
        
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    // Vérifier les éléments au chargement et au défilement
    checkFade();
    window.addEventListener('scroll', checkFade);

    // Fonction pour basculer entre le monde réel et New World sur la page personnage
    const realWorldBtn = document.getElementById('real-world-btn');
    const newWorldBtn = document.getElementById('new-world-btn');
    const realWorld = document.getElementById('real-world');
    const newWorld = document.getElementById('new-world');

    if (realWorldBtn && newWorldBtn && realWorld && newWorld) {
        realWorldBtn.addEventListener('click', function() {
            toggleWorld('real');
        });

        newWorldBtn.addEventListener('click', function() {
            toggleWorld('new');
        });
    }

    // Fonction pour basculer entre les mondes
    window.toggleWorld = function(world) {
        if (world === 'real') {
            realWorldBtn.classList.add('active');
            newWorldBtn.classList.remove('active');
            realWorld.classList.add('active');
            newWorld.classList.remove('active');
    } else {
            realWorldBtn.classList.remove('active');
            newWorldBtn.classList.add('active');
            realWorld.classList.remove('active');
            newWorld.classList.add('active');
    }
    };

    // Fonction pour ouvrir les modals des compétences (page statistiques)
    const skillItems = document.querySelectorAll('.skill-item');
    const skillModal = document.getElementById('skill-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.querySelector('.close-modal');

    if (skillItems && skillModal && modalContent && closeModal) {
        skillItems.forEach(item => {
            item.addEventListener('click', function() {
                const description = this.getAttribute('data-description');
                const title = this.querySelector('h4').textContent;

                modalContent.innerHTML = `
                    <h4>${title}</h4>
                    <p>${description}</p>
                `;

                skillModal.classList.add('active');
            });
        });

        closeModal.addEventListener('click', function() {
            skillModal.classList.remove('active');
        });

        window.addEventListener('click', function(e) {
            if (e.target === skillModal) {
                skillModal.classList.remove('active');
}
        });
    }
});
