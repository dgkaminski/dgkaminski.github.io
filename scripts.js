document.addEventListener('DOMContentLoaded', function() {
    // Navigation Menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    if (!hamburger || !navMenu) {
        return;
    }

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    body.appendChild(overlay);

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.style.display = navMenu.classList.contains('active') ? 'block' : 'none';
        body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Handle submenu toggles
    const hasSubmenu = document.querySelectorAll('.has-submenu');
    hasSubmenu.forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.closest('a') && !e.target.closest('.submenu')) {
                e.preventDefault();
                this.classList.toggle('active');
                const submenu = this.querySelector('.submenu');
                submenu.classList.toggle('active');
            }
        });
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.style.display = 'none';
        body.style.overflow = '';
    });

    // Carousel functionality
    const images = document.querySelectorAll('.project-carousel .carousel-image');
    const leftArrow = document.querySelector('.carousel-arrow.left-arrow');
    const rightArrow = document.querySelector('.carousel-arrow.right-arrow');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');

    if (!images.length || !leftArrow || !rightArrow) {
        return;
    }
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