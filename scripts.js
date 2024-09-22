document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('click', event => {
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }
    });
});