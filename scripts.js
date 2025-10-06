document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const images = document.querySelectorAll('.project-carousel .carousel-image');
    const leftArrow = document.querySelector('.carousel-arrow.left-arrow');
    const rightArrow = document.querySelector('.carousel-arrow.right-arrow');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    let currentIndex = 0;
    let timer;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.opacity = i === index ? '1' : '0';
            img.style.display = i === index ? 'block' : 'none';
        });
        indicators.forEach((indicator, i) => {
            indicator.style.background = i === index ? 'white' : 'gray';
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(nextImage, 5000);
    }

    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            currentIndex = parseInt(indicator.getAttribute('data-index'));
            showImage(currentIndex);
            resetTimer();
        });
    });

    rightArrow.addEventListener('click', () => {
        nextImage();
        resetTimer();
    });

    leftArrow.addEventListener('click', () => {
        prevImage();
        resetTimer();
    });

    timer = setInterval(nextImage, 3000); // Automatically cycle every 3 seconds
    showImage(currentIndex); // Initialize the first image

    // Navigation dropdown functionality
    document.querySelectorAll('nav ul li').forEach(item => {
        item.addEventListener('click', event => {
            const dropdown = item.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});