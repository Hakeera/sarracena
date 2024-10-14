let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const itemCount = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = itemCount - 3;
    } else if (currentIndex > itemCount - 3) {
        currentIndex = 0;
    }

    const translateX = -(currentIndex * (110 / 3));
    carousel.style.transform = `translateX(${translateX}%)`;
}

setInterval(() => {
    moveCarousel(1);
}, 10000);
