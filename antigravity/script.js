document.addEventListener('DOMContentLoaded', () => {
    // Mouse movement effect for background glows
    const glows = document.querySelectorAll('.background-glow');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        glows.forEach((glow, index) => {
            const speed = (index + 1) * 0.05;
            const xOffset = (window.innerWidth / 2 - x) * speed;
            const yOffset = (window.innerHeight / 2 - y) * speed;
            
            glow.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    // Tilt effect for cards
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -5; // Max rotation deg
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
});
