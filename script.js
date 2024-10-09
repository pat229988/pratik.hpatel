document.addEventListener('DOMContentLoaded', function() {
    const text = "Let Him Cook!";
    const animatedText = document.getElementById('animated-text');

    function animateText() {
        let index = 0;
        animatedText.innerHTML = '';

        function addLetter() {
            if (index < text.length) {
                animatedText.innerHTML += text.charAt(index);
                index++;
                setTimeout(addLetter, 100);
            } else {
                setTimeout(rotateText, 500);
            }
        }

        function rotateText() {
            animatedText.style.transform = 'rotate(5deg)';
            setTimeout(() => {
                animatedText.style.transform = 'rotate(0deg)';
                setTimeout(animateText, 1000); // Restart the animation after a 1-second pause
            }, 500);
        }

        addLetter();
    }

    animateText();
});