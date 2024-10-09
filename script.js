document.addEventListener('DOMContentLoaded', function() {
    const text = "Let Him Cook!";
    const animatedText = document.getElementById('animated-text');
    let index = 0;

    function animateText() {
        if (index < text.length) {
            animatedText.innerHTML += text.charAt(index);
            index++;
            setTimeout(animateText, 100);
        } else {
            animatedText.style.animation = 'rotate 2s ease-in-out';
        }
    }

    animateText();
});