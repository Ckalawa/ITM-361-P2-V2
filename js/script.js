const images = ["A220.png", "A300.png", "A310.png", "A321.png", "A340.png", "A350.png", "A380.png"];
let currentIndex = 0;

function updateCarousel() {
    const carousel = document.getElementById('carousel');
    carousel.style.backgroundImage = `url(${images[currentIndex]})`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

function initCarousel() {
    const carouselContainer = document.createElement('div');
    carouselContainer.id = 'carousel';
    document.body.appendChild(carouselContainer);

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.addEventListener('click', prevSlide);
    document.body.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', nextSlide);
    document.body.appendChild(nextButton);

    updateCarousel();
}

window.addEventListener('load', initCarousel);
