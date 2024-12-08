// Like button functionality
const likeButton = document.getElementById('like-button');
if (likeButton) {
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('liked');
    });
}

// Inspire button functionality
const inspireButton = document.getElementById('inspire-button');
if (inspireButton) {
    inspireButton.addEventListener('click', () => {
        const inspirationalMessages = [
            "Adventure is worthwhile in itself. - Amelia Earhart",
            "Life is either a daring adventure or nothing at all. - Helen Keller",
            "Travel far enough, you meet yourself. - David Mitchell"
        ];
        
        alert(inspirationalMessages[Math.floor(Math.random() * inspirationalMessages.length)]);
    });
}

// Add hover animation to destination cards
const cards = document.querySelectorAll('.destination-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});