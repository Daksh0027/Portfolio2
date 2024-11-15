const gifImage = document.querySelector('.experience-gif');
const staticSrc = gifImage.src;
const animatedSrc = gifImage.getAttribute('data-hover');

gifImage.addEventListener('mouseover', () => {
    gifImage.src = animatedSrc;
});

gifImage.addEventListener('mouseout', () => {
    gifImage.src = staticSrc;
});